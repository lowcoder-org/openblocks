import axios from "axios";
import { EmptyContent } from "components/EmptyContent";
import { LinkButton } from "lowcoder-design";
import { useShallowEqualSelector } from "util/hooks";
import { useContext, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "redux/reducers";
import { packageMetaReadyAction } from "redux/reduxActions/npmPluginActions";
import styled from "styled-components";
import { NpmPackageMeta, NpmVersionMeta, RemoteCompSource } from "types/remoteComp";
import { PluginCompItem } from "./PluginCompItem";
import { NPM_REGISTRY_URL } from "constants/npmPlugins";
import { trans } from "i18n";
import { RightContext } from "../rightContext";
import { RemoteCompFileOptions, RemoteCompNpmOptions } from "@lowcoder-ee/comps/utils/remote";

const PluginViewWrapper = styled.div`
  margin-bottom: 12px;
  .remove-btn {
    display: none;
  }
  &:hover {
    .remove-btn {
      display: block;
    }
  }
`;

const PluginViewTitle = styled.div`
  height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
`;

const PluginViewTitleText = styled.div`
  flex: 1;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #b8b9bf;
`;

const PluginViewContent = styled.div`
  padding-top: 4px;
  margin-bottom: 12px;
`;

interface PluginViewProps {
  name: string;
  source: RemoteCompSource;
  options: RemoteCompFileOptions | RemoteCompNpmOptions;
  onRemove: () => void;
}

export function PluginItem(props: PluginViewProps) {
  const { name, source, options, onRemove } = props;
  const dispatch = useDispatch();
  const { onDrag, searchValue } = useContext(RightContext);
  const [loading, setLoading] = useState(false);
  const packageMeta = useShallowEqualSelector(
    (state: AppState) => state.npmPlugin.packageMeta[name]
  );
  const currentVersion = useSelector((state: AppState) => state.npmPlugin.packageVersion[name]);
  const versions = useMemo(() => packageMeta?.versions || {}, [packageMeta?.versions]);
  const comps = versions[currentVersion]?.lowcoder?.comps || {};
  const compNames = Object.keys(comps);

  let packageMetaUrl: string;
  switch (source) {
    case "npm":
      packageMetaUrl = `${NPM_REGISTRY_URL}/${name}/`;
      let npmOptions = options as RemoteCompNpmOptions;
      npmOptions.packageVersion = currentVersion;
      break;
    case "url":
      packageMetaUrl = `${(options as RemoteCompFileOptions).sourceUrl}/package.json`;
      break;
    default:
      throw new Error(`Unknown remote source: ${source}`);
  }

  useEffect(() => {
    setLoading(true);

    axios.get<NpmPackageMeta|NpmVersionMeta>(packageMetaUrl).then((res) => {
      if (res.status >= 400) {
        return;
      }
      setLoading(false);
      let packageMeta: NpmPackageMeta;
      if (!(res.data as NpmPackageMeta).versions) {
        // Create skeleton for packages linked via url as no index is available
        const STATIC_VERSION = "static";
        packageMeta = {
          name: res.data.name,
          versions: {
            [STATIC_VERSION]: res.data as NpmVersionMeta,
          },
          "dist-tags": {
            latest: STATIC_VERSION,
          }
        };
      } else {
        packageMeta = res.data as NpmPackageMeta;
      }

      dispatch(packageMetaReadyAction(name, packageMeta));
    });
  }, [dispatch, name]);

  const filteredCompNames = compNames.filter(
    (i) => !searchValue || i.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  );
  const hasComps = filteredCompNames.length > 0;

  return (
    <PluginViewWrapper>
      <PluginViewTitle>
        <PluginViewTitleText>{name}</PluginViewTitleText>
        <LinkButton
          onClick={onRemove}
          className="remove-btn"
          text={trans("npm.removePluginBtnText")}
        />
      </PluginViewTitle>
      <PluginViewContent>
        {!hasComps && <EmptyContent text={loading ? "Loading..." : "No components found."} />}
        {hasComps &&
          filteredCompNames.map((compName) => (
            <PluginCompItem
              onDrag={onDrag}
              key={compName}
              compName={compName}
              compMeta={comps[compName]}
              source={source}
              options={options}
            />
          ))}
      </PluginViewContent>
    </PluginViewWrapper>
  );
}
