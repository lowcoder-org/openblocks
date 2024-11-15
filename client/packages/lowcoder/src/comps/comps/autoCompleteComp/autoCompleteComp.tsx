import React, { useEffect, useState } from "react";
import { Input } from "lowcoder-design";
import { BoolControl } from "comps/controls/boolControl";
import { styleControl } from "comps/controls/styleControl";
import {
  AnimationStyle,
  InputFieldStyle,
  InputLikeStyle,
  InputLikeStyleType,
  LabelStyle,
} from "comps/controls/styleControlConstants";
import {
  NameConfig,
  NameConfigPlaceHolder,
  NameConfigRequired,
  withExposingConfigs,
} from "comps/generators/withExposing";
import styled, { css } from "styled-components";
import { UICompBuilder} from "../../generators";
import { jsonControl } from "comps/controls/codeControl";
import { dropdownControl } from "comps/controls/dropdownControl";
import {
  getStyle,
  textInputChildren,
  TextInputConfigs,
  textInputValidate,
} from "../textInputComp/textInputConstants";
import { trans } from "i18n";
import { IconControl } from "comps/controls/iconControl";
import { hasIcon } from "comps/utils";
import { InputRef } from "antd/es/input";
import { default as ConfigProvider } from "antd/es/config-provider";
import { default as AutoComplete } from "antd/es/auto-complete";
import { RefControl } from "comps/controls/refControl";
import {
  booleanExposingStateControl,
} from "comps/controls/codeStateControl";

import { getDayJSLocale } from "i18n/dayjsLocale";
import {
  autoCompleteDate,
  convertAutoCompleteData,
  valueOrLabelOption,
  autoCompleteRefMethods,
  autoCompleteType,
  autocompleteIconColor,
  componentSize,
} from "./autoCompleteConstants";
import {viewMode} from "@lowcoder-ee/util/editor";
const PropertyView =  React.lazy( async () => await import("./propertyView"));
const InputStyle = styled(Input) <{ $style: InputLikeStyleType }>`
box-shadow: ${props=>`${props.$style?.boxShadow} ${props.$style?.boxShadowColor}`};
  ${(props) => css`
    ${getStyle(props.$style)}
    input {
      padding: ${props.style?.padding};
    }
    .ant-select-single {
      width: 100% !important;
    }
  `}
`;


const childrenMap = {
  ...textInputChildren,
  viewRef: RefControl<InputRef>,
  allowClear: BoolControl.DEFAULT_TRUE,
  style: styleControl(InputFieldStyle , 'style'),
  labelStyle: styleControl(LabelStyle , 'labelStyle'),
  prefixIcon: IconControl,
  suffixIcon: IconControl,
  items: jsonControl(convertAutoCompleteData, autoCompleteDate),
  ignoreCase: BoolControl.DEFAULT_TRUE,
  searchFirstPY: BoolControl.DEFAULT_TRUE,
  searchCompletePY: BoolControl,
  searchLabelOnly: BoolControl.DEFAULT_TRUE,
  valueOrLabel: dropdownControl(valueOrLabelOption, "label"),
  autoCompleteType: dropdownControl(autoCompleteType, "normal"),
  autocompleteIconColor: dropdownControl(autocompleteIconColor, "blue"),
  componentSize: dropdownControl(componentSize, "small"),
  valueInItems: booleanExposingStateControl("valueInItems"),
  inputFieldStyle: styleControl(InputLikeStyle , 'inputFieldStyle'),
  animationStyle: styleControl(AnimationStyle , 'animationStyle'),
};

const getValidate = (value: any): "" | "warning" | "error" | undefined => {
  if (
    value.hasOwnProperty("validateStatus") &&
    value["validateStatus"] === "error"
  )
    return "error";
  return "";
};

let AutoCompleteCompBase = (function () {
    let builder = new UICompBuilder(childrenMap, (props) => {
      const {
        items,
        onEvent,
        placeholder,
        searchFirstPY,
        searchCompletePY,
        searchLabelOnly,
        ignoreCase,
        valueOrLabel,
        autoCompleteType,
        autocompleteIconColor,
        componentSize,
      } = props;


      const getTextInputValidate = () => {
        return {
          value: { value: props.value.value },
          required: props.required,
          minLength: props?.minLength ?? 0,
          maxLength: props?.maxLength ?? 0,
          validationType: props.validationType,
          regex: props.regex,
          customRule: props.customRule,
        };
      };

      const [activationFlag, setActivationFlag] = useState(false);
      const [searchtext, setsearchtext] = useState<string>(props.value.value);
      const [validateState, setvalidateState] = useState({});

      //   是否中文环境
      const [chineseEnv, setChineseEnv] = useState(getDayJSLocale() === "zh-cn");

      useEffect(() => {
        setsearchtext(props.value.value);
        activationFlag &&
          setvalidateState(textInputValidate(getTextInputValidate()));
      }, [
        props.value.value,
        props.required,
        props?.minLength,
        props?.maxLength,
        props.validationType,
        props.regex,
        props.customRule,
      ]);

      return props.label({
        required: props.required,
        children: (
          <>
            <ConfigProvider
              theme={{
                token: {
                  colorBgContainer: props.inputFieldStyle.background,
                  colorBorder: props.inputFieldStyle.border,
                  borderRadius: parseInt(props.inputFieldStyle.radius),
                  colorText: props.inputFieldStyle.text,
                  colorPrimary: props.inputFieldStyle.accent,
                  controlHeight: componentSize === "small" ? 30 : 38,
                },
              }}
            >
              <AutoComplete
                disabled={props.disabled}
                value={searchtext}
                options={items}
                style={{ width: "100%" }}
                onChange={(value: string, option) => {
                  props.valueInItems.onChange(false);
                  setvalidateState(textInputValidate(getTextInputValidate()));
                  setsearchtext(value);
                  props.value.onChange(value);
                  props.onEvent("change")
                }}
                onFocus={() => {
                  setActivationFlag(true)
                  props.onEvent("focus")
                }}
                onBlur={() => props.onEvent("blur")}
                onSelect={(data: string, option) => {
                  setsearchtext(option[valueOrLabel]);
                  props.valueInItems.onChange(true);
                  props.value.onChange(option[valueOrLabel]);
                  props.onEvent("submit");
                }}
                filterOption={(inputValue: string, option) => {
                  if (ignoreCase) {
                    if (
                      option?.label &&
                      option?.label
                        .toUpperCase()
                        .indexOf(inputValue.toUpperCase()) !== -1
                    )
                      return true;
                  } else {
                    if (option?.label && option?.label.indexOf(inputValue) !== -1)
                      return true;
                  }
                  if (
                    chineseEnv &&
                    searchFirstPY &&
                    option?.label &&
                    option.label
                      .spell("first")
                      .toString()
                      .toLowerCase()
                      .indexOf(inputValue.toLowerCase()) >= 0
                  )
                    return true;
                  if (
                    chineseEnv &&
                    searchCompletePY &&
                    option?.label &&
                    option.label
                      .spell()
                      .toString()
                      .toLowerCase()
                      .indexOf(inputValue.toLowerCase()) >= 0
                  )
                    return true;
                  if (!searchLabelOnly) {
                    if (ignoreCase) {
                      if (
                        option?.value &&
                        option?.value
                          .toUpperCase()
                          .indexOf(inputValue.toUpperCase()) !== -1
                      )
                        return true;
                    } else {
                      if (
                        option?.value &&
                        option?.value.indexOf(inputValue) !== -1
                      )
                        return true;
                    }
                    if (
                      chineseEnv &&
                      searchFirstPY &&
                      option?.value &&
                      option.value
                        .spell("first")
                        .toString()
                        .toLowerCase()
                        .indexOf(inputValue.toLowerCase()) >= 0
                    )
                      return true;
                    if (
                      chineseEnv &&
                      searchCompletePY &&
                      option?.value &&
                      option.value
                        .spell()
                        .toString()
                        .toLowerCase()
                        .indexOf(inputValue.toLowerCase()) >= 0
                    )
                      return true;
                  }
                  return false;
                }}
              >
                  <InputStyle
                    ref={props.viewRef}
                    placeholder={placeholder}
                    allowClear={props.allowClear}
                    $style={props.inputFieldStyle}
                    prefix={hasIcon(props.prefixIcon) && props.prefixIcon}
                    suffix={hasIcon(props.suffixIcon) && props.suffixIcon}
                    status={getValidate(validateState)}
                    onPressEnter={undefined}
                  />
              </AutoComplete>
            </ConfigProvider>
          </>
        ),
        style: props.style,
        labelStyle: props.labelStyle,
        inputFieldStyle:props.inputFieldStyle,
        animationStyle: props.animationStyle,
        showValidationWhenEmpty: props.showValidationWhenEmpty,
        ...validateState,
      });
    })
    if (viewMode() === "admin") {
      builder.setPropertyViewFn((children) => <PropertyView {...children}></PropertyView>);
    }
        return builder
      .setExposeMethodConfigs(autoCompleteRefMethods)
      .setExposeStateConfigs([
        new NameConfig("value", trans("export.inputValueDesc")),
        new NameConfig("valueInItems", trans("autoComplete.valueInItems")),
        NameConfigPlaceHolder,
        NameConfigRequired,
        ...TextInputConfigs,
      ])
      .build();
})();

AutoCompleteCompBase = class extends AutoCompleteCompBase {
  override autoHeight(): boolean {
    return true;
  }
};

export const AutoCompleteComp = withExposingConfigs(AutoCompleteCompBase, [
  new NameConfig("value", trans("export.inputValueDesc")),
  new NameConfig("valueInItems", trans("autoComplete.valueInItems")),
  NameConfigPlaceHolder,
  NameConfigRequired, 
  ...TextInputConfigs,
]);
