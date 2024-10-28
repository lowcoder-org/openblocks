import { CompParams } from "lowcoder-core";
import { ToDataType } from "comps/generators/multi";
import { NameConfigDisabled, NameConfigHidden, withExposingConfigs, NameConfig, CompDepsConfig } from "comps/generators/withExposing";
import { withMethodExposing } from "comps/generators/withMethodExposing";
import { NameGenerator } from "comps/utils/nameGenerator";
import { oldContainerParamsToNew } from "../containerBase";
import { toSimpleContainerData } from "../containerBase/simpleContainerComp";
import { trans } from "i18n";
import { BoolCodeControl } from "comps/controls/codeControl";
import { DisabledContext } from "comps/generators/uiCompBuilder";
import React, { useState } from "react";

import {
  ContainerChildren,
  ContainerCompBuilder,
} from "../pageLayoutComp/pageLayoutCompBuilder";
import { PageLayout } from "../pageLayoutComp/pageLayout";
import { AnimationStyle } from "@lowcoder-ee/comps/controls/styleControlConstants";
import { styleControl } from "@lowcoder-ee/comps/controls/styleControl";
import {viewMode} from "@lowcoder-ee/util/editor";
const SetPropertyViewPageLayout =  React.lazy( async () => await import("./setProperty").then(module => ({default: module.SetPropertyViewPageLayout})))

export const ContainerBaseComp = (function () {
  const childrenMap = {
    disabled: BoolCodeControl,
    animationStyle: styleControl(AnimationStyle , 'animationStyle'),
  };

  let builder = new ContainerCompBuilder(childrenMap, (props, dispatch) => {

    const [siderCollapsed, setSiderCollapsed] = useState(false);  

    return (
      <DisabledContext.Provider value={props.disabled}>
        <PageLayout {...props} siderCollapsed={siderCollapsed} setSiderCollapsed={setSiderCollapsed} />
      </DisabledContext.Provider>
    );
  })
  if (viewMode() === "edit") {
    builder.setPropertyViewFn((children) => <SetPropertyViewPageLayout {...children}></SetPropertyViewPageLayout>);
  }
  return builder
    .build();
})(); 

// Compatible with old data
function convertOldContainerParams(params: CompParams<any>) {
  // convert older params to old params
  let tempParams = oldContainerParamsToNew(params);

  if (tempParams.value) {
    const container = tempParams.value.container;
    // old params
    if (container && (container.hasOwnProperty("layout") || container.hasOwnProperty("items"))) {
      const autoHeight = tempParams.value.autoHeight;
      const scrollbars = tempParams.value.scrollbars;
      return {
        ...tempParams,
        value: {
          container: {
            showHeader: true,
            body: { 0: { view: container } },
            showFooter: false,
            showSider: true,
            autoHeight: autoHeight,
            contentScrollbars: scrollbars,
          },
        },
      };
    }
  }
  return tempParams;
}


class ContainerTmpComp extends ContainerBaseComp {
  constructor(params: CompParams<any>) {
    super(convertOldContainerParams(params));
  }
}

const PageLayoutCompTmP = withExposingConfigs(ContainerTmpComp, [
  NameConfigHidden,
  NameConfigDisabled,

  new NameConfig("container", trans("export.ratingValueDesc")),
  new CompDepsConfig(
    "siderCollapsed",
    (comp) => ({ data : comp.children.container.children.siderCollapsed.nodeWithoutCache()}),
    (input) => input.data.value, trans("listView.itemsDesc")
  ),
]);

export const PageLayoutComp = withMethodExposing(PageLayoutCompTmP, [
  
  {
    method: {
      name: "setSiderCollapsed",
      description: "Set the Sider of the PageLayout to be collapsed or not",
      params: [{ name: "collapsed", type: "boolean" }],
    },
    execute: (comp, values) => {
      const page = values[0] as number;
      if (page && page > 0) {
        // comp.children.pagination.children.pageNo.dispatchChangeValueAction(page);
      }
    },
  }
]);

type ContainerDataType = ToDataType<ContainerChildren<{}>>;

export function defaultPageLayoutData(
  compName: string,
  nameGenerator: NameGenerator
): ContainerDataType {
  return {
    container: {
      header: toSimpleContainerData([
        {
          item: {
            compType: "navigation",
            name: nameGenerator.genItemName("pageNavigation"),
            comp: {
              logoUrl: "",
              hidden: false,
              items: [
                {
                  label: "Home",
                  hidden: false,
                  active: false,
                },
                {
                  label: "Services",
                  hidden: false,
                  active: false,
                  items: [
                    {
                      label: "Lowcode Platform",
                      hidden: false,
                      active: false,
                    },
                    {
                      label: "App Development",
                      hidden: false,
                      active: false,
                    },
                  ],
                },
                {
                  label: "About",
                  hidden: false,
                  active: false,
                },
              ],
            },
          },
          layoutItem: {
            i: "",
            h: 6,
            w: 24,
            x: 0,
            y: 0,
          },
        },
      ]),
    },
  };
}
