import { default as Progress } from "antd/es/progress";
import { styleControl } from "comps/controls/styleControl";
import { AnimationStyle, AnimationStyleType, CircleProgressStyle, CircleProgressType, heightCalculator, widthCalculator } from "comps/controls/styleControlConstants";
import styled, { css } from "styled-components";
import { numberExposingStateControl } from "../controls/codeStateControl";
import { UICompBuilder } from "../generators";
import { NameConfig, NameConfigHidden, withExposingConfigs } from "../generators/withExposing";
import { trans } from "i18n";
import {viewMode} from "@lowcoder-ee/util/editor";
import React from "react";
const SetPropertyViewFn =  React.lazy( async () => await import("./setProperty/progressCircleComp"));
// TODO: after Update of ANTd, introduce Size attribute to ProgressCircle

const getStyle = (style: CircleProgressType) => {
  return css`
    width: ${widthCalculator(style.margin)};	
    height: ${heightCalculator(style.margin)};	
    margin: ${style.margin};	
    padding: ${style.padding};
    border-radius:${style.radius};
    .ant-progress-text {
      color: ${style.text} !important;
      font-family:${style.fontFamily};
      font-style:${style.fontStyle};
      font-size:${style.textSize} !important;
      font-weight:${style.textWeight};
    }
    .ant-progress-circle-trail {
      stroke: ${style.track};
    }
    .ant-progress-inner .ant-progress-circle-path {
      stroke: ${style.fill} !important;
    }
    &.ant-progress-status-success {
      .ant-progress-inner .ant-progress-circle-path {
        stroke: ${style.success} !important;
      }
      .ant-progress-text {
        color: ${style.success} !important;
      }
    }
  `;
};

export const StyledProgressCircle = styled(Progress)<{
  $style: CircleProgressType;
  $animationStyle?: AnimationStyleType;
}>`
  ${(props) => props.$animationStyle}
  width: 100%;
  height: 100%;
  padding: 2px;
  .ant-progress-inner {
    width: 100% !important;
    height: 100% !important;
  }

  .ant-progress-circle {
    width: 100%;
    height: 100%;
  }
  ${(props) => props.$style && getStyle(props.$style)}
`;

let ProgressCircleTmpComp = (function () {
  const childrenMap = {
    value: numberExposingStateControl("value", 60),
    // borderRadius property hidden as it's not valid for progress circle
    style: styleControl(CircleProgressStyle, 'style'),
    animationStyle: styleControl(AnimationStyle, 'animationStyle'),
  };
  let builder = new UICompBuilder(childrenMap, (props) => {
    return (
      <StyledProgressCircle
        $style={props.style}
        $animationStyle={props.animationStyle}
        percent={Math.round(props.value.value)}
        type="circle"
      />
    );
  })
  if (viewMode() === "edit") {
    builder.setPropertyViewFn((children) => <SetPropertyViewFn {...children}></SetPropertyViewFn>);
  }
      return builder
    .build();
})();

ProgressCircleTmpComp = class extends ProgressCircleTmpComp {
  override autoHeight(): boolean {
    return false;
  }
};

export const ProgressCircleComp = withExposingConfigs(ProgressCircleTmpComp, [
  new NameConfig("value", trans("progress.valueDesc")),
  NameConfigHidden,
]);
