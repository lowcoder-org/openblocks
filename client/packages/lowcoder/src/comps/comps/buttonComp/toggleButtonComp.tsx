import { BoolCodeControl, StringControl } from "comps/controls/codeControl";
import { withDefault } from "comps/generators";
import { UICompBuilder } from "comps/generators/uiCompBuilder";
import { trans } from "i18n";
import styled from "styled-components";
import { ChangeEventHandlerControl } from "../../controls/eventHandlerControl";
import { CommonNameConfig, NameConfig, withExposingConfigs } from "../../generators/withExposing";
import { Button100, ButtonCompWrapper, buttonRefMethods } from "./buttonCompConstants";
import { IconControl } from "comps/controls/iconControl";
import { AlignWithStretchControl, LeftRightControl } from "comps/controls/dropdownControl";
import { booleanExposingStateControl } from "comps/controls/codeStateControl";
import {
  AnimationStyle,
  AnimationStyleType,
  ToggleButtonStyle,
} from "comps/controls/styleControlConstants";
import { styleControl } from "comps/controls/styleControl";
import { BoolControl } from "comps/controls/boolControl";
import { RefControl } from "comps/controls/refControl";
import React from "react";
import {viewMode} from "@lowcoder-ee/util/editor";
const SetPropertyViewToggleButton =  React.lazy( async () => await import("./setProperty").then(module => ({default: module.SetPropertyViewToggleButton})))

const IconWrapper = styled.div`
  display: flex;
`;

const ButtonCompWrapperStyled = styled(ButtonCompWrapper)<{
  $align: "left" | "center" | "right" | "stretch";
  $showBorder: boolean;
  $animationStyle: AnimationStyleType;
}>`
  ${(props) => props.$animationStyle}
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.$align};

  > button {
    width: ${(props) => props.$align !== "stretch" && "auto"};
    border: ${(props) => !props.$showBorder && "none"};
    box-shadow: ${(props) => !props.$showBorder && "none"};
  }
`;

const ToggleTmpComp = (function () {
  const childrenMap = {
    value: booleanExposingStateControl("value"),
    showText: withDefault(BoolControl, true),
    trueText: withDefault(StringControl, trans("toggleButton.trueDefaultText")),
    falseText: withDefault(StringControl, trans("toggleButton.falseDefaultText")),
    onEvent: ChangeEventHandlerControl,
    disabled: BoolCodeControl,
    loading: BoolCodeControl,
    trueIcon: withDefault(IconControl, "/icon:solid/AngleUp"),
    falseIcon: withDefault(IconControl, "/icon:solid/AngleDown"),
    iconPosition: LeftRightControl,
    alignment: AlignWithStretchControl,
    style: styleControl(ToggleButtonStyle , 'style'),
    animationStyle: styleControl(AnimationStyle , 'animationStyle'),
    showBorder: withDefault(BoolControl, true),
    viewRef: RefControl<HTMLElement>,
  };
  let builder = new UICompBuilder(childrenMap, (props) => {
    const text = props.showText
      ? (props.value.value ? props.trueText : props.falseText) || undefined
      : undefined;

    return (
      <ButtonCompWrapperStyled
        $disabled={props.disabled}
        $align={props.alignment}
        $showBorder={props.showBorder}
        $animationStyle={props.animationStyle}
      >
        <Button100
          ref={props.viewRef}
          $buttonStyle={props.style}
          loading={props.loading}
          disabled={props.disabled}
          onClick={() => {
            props.onEvent("change");
            props.value.onChange(!props.value.value);
          }}
        >
          {props.iconPosition === "right" && text}
          {<IconWrapper>{props.value.value ? props.trueIcon : props.falseIcon}</IconWrapper>}
          {props.iconPosition === "left" && text}
        </Button100>
      </ButtonCompWrapperStyled>
    );
  })
  if (viewMode() === "edit") {
    builder.setPropertyViewFn((children) => <SetPropertyViewToggleButton {...children}></SetPropertyViewToggleButton>);
  }
  return builder
    .setExposeMethodConfigs(buttonRefMethods)
    .build();
})();

export const ToggleButtonComp = withExposingConfigs(ToggleTmpComp, [
  new NameConfig("value", trans("dropdown.textDesc")),
  new NameConfig("loading", trans("button.loadingDesc")),
  ...CommonNameConfig,
]);
