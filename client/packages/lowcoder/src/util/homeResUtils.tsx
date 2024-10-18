import { HomeResTypeEnum } from "../types/homeRes";
import { APPLICATION_VIEW_URL, APPLICATION_MARKETPLACE_VIEW_URL, buildFolderUrl } from "../constants/routesURL";
import history from "./history";
import { trans } from "../i18n";
import { FunctionComponent } from "react";
import {MultiIcon} from "@lowcoder-ee/comps/comps/multiIconDisplay";

export const HomeResInfo: Record<
  HomeResTypeEnum,
  { name: string; icon: FunctionComponent<any>; desc?: string }
> = {
  [HomeResTypeEnum.All]: {
    name: trans("home.all"),
    icon: MultiIcon("/icon:svg/AllTypesIcon"),
  },
  [HomeResTypeEnum.Application]: {
    name: trans("home.app"),
    icon: MultiIcon("/icon:svg/ApplicationDocIcon"),
  },
  [HomeResTypeEnum.Module]: {
    name: trans("home.module"),
    icon: MultiIcon("/icon:svg/ModuleDocIcon"),
  },
  [HomeResTypeEnum.Navigation]: {
    name: trans("home.navigation"),
    icon: MultiIcon("/icon:svg/NavDocIcon"),
  },
  [HomeResTypeEnum.NavLayout]: {
    name: trans("home.navLayout"),
    icon: MultiIcon("/icon:svg/NavDocIcon"),
    desc: trans("home.navLayoutDesc"),
  },
  [HomeResTypeEnum.Folder]: {
    name: trans("home.folder"),
    icon: MultiIcon("/icon:svg/FolderIcon"),
  },
  [HomeResTypeEnum.MobileTabLayout]: {
    name: trans("home.mobileTabLayout"),
    icon: MultiIcon("/icon:svg/NavDocIcon"),
    desc: trans("home.mobileTabLayoutDesc"),
  },
};

export const handleAppEditClick = (e: any, id: string): void => {
  /* if (e?.metaKey) {
    window.open(APPLICATION_VIEW_URL(id, "edit"), '_blank');
  } else {
    history.push(APPLICATION_VIEW_URL(id, "edit"), '_blank');
  } */
  window.open(APPLICATION_VIEW_URL(id, "edit"), '_blank');
};

export const handleAppViewClick = (id: string) => window.open(APPLICATION_VIEW_URL(id, "view"), '_blank');

export const handleMarketplaceAppViewClick = (id: string, isLocalMarketplace?: boolean) => isLocalMarketplace == true ? window.open(APPLICATION_VIEW_URL(id, "view_marketplace"), '_blank') : window.open(APPLICATION_MARKETPLACE_VIEW_URL(id, "view_marketplace"), '_blank');

export const handleFolderViewClick = (id: string) => history.push(buildFolderUrl(id));
