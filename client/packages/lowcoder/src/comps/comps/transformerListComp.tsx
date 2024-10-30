import { getBottomResIcon } from "@lowcoder-ee/util/bottomResUtils";
import { codeControl, TransformerCodeControl } from "comps/controls/codeControl";
import { MultiCompBuilder } from "comps/generators";
import { bottomResListComp } from "comps/generators/bottomResList";
import { withExposingRaw } from "comps/generators/withExposing";
import { trans } from "i18n";
import { fromRecord } from "lowcoder-core";
import React, { ReactNode } from "react";
import { BottomResComp, BottomResCompResult, BottomResTypeEnum } from "types/bottomRes";
import { SimpleNameComp } from "./simpleNameComp";
import {viewMode} from "@lowcoder-ee/util/editor";
const PropertyView =  React.lazy( async () => await import("@lowcoder-ee/comps/comps/propertyView/transformerListComp"));
const TransformerItemCompBase = new MultiCompBuilder(
  {
    name: SimpleNameComp,
    script: TransformerCodeControl,
  },
  (props) => props
)
if (viewMode() === "edit") {
  TransformerItemCompBase.setPropertyViewFn((children) => <PropertyView {...children}></PropertyView>);
}
const TransformerItemCompBaseBuilder = TransformerItemCompBase.build();

class TransformerAsBottomRes extends TransformerItemCompBaseBuilder implements BottomResComp {
  result(): BottomResCompResult | null {
    const scriptCtrl = this.children.script as InstanceType<ReturnType<typeof codeControl>>;
    const valueAndMsg = scriptCtrl.getValueAndMsg();
    const name = this.name();
    const success = !valueAndMsg.hasError();
    return {
      success: success,
      title: `${name} ${
        success ? trans("transformer.previewSuccess") : trans("transformer.previewFail")
      }`,
      dataType: typeof valueAndMsg.value === "function" ? "function" : "json",
      errorMessage: valueAndMsg.msg,
      data: valueAndMsg.value,
    };
  }

  type(): BottomResTypeEnum {
    return BottomResTypeEnum.Transformer;
  }

  id(): string {
    return this.name();
  }

  name(): string {
    return this.children.name.getView();
  }

  icon(): ReactNode {
    return getBottomResIcon(BottomResTypeEnum.Transformer);
  }
}

const TransformerItemComp = withExposingRaw(
  TransformerAsBottomRes,
  {
    value: trans("value"),
    code: trans("code"),
  },
  (comp) => {
    return fromRecord({
      value: comp.children.script.exposingNode(),
    });
  }
);

export const TransformerListComp = bottomResListComp(
  TransformerItemComp,
  BottomResTypeEnum.Transformer,
  {
    script: "return currentUser.name",
  }
);
