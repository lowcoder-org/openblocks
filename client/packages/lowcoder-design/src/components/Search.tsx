import styled from "styled-components";
import { default as Input, InputProps } from "antd/es/input";
import { ReactComponent as Icon } from "icons/v1/icon-Search.svg";
import React, { CSSProperties } from "react";

const SearchInput = styled(Input)`
  margin: 0;
  padding: 0 11px 0 0;
  height: 32px;
  width: 100%;
  border: 1px solid #d7d9e0;
  border-radius: 4px;
  font-size: 13px;
  user-select: none;
  overflow: hidden;
  background-color: #fdfdfd;
  color: #000;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #daecfc;
  }
  &:hover {
    background-color: #fdfdfd;
    color: #000;
  }
  &:focus-within {
    background-color: #fdfdfd;
    color: #000;
  }
`;
const SearchDiv = styled.div<{ error?: boolean }>`
  height: 32px;
  width: 100%;
  background: #fdfdfd;
  border-radius: 4px;
  margin-top: 16px;
  user-select: none;

  &&&&& .ant-input-affix-wrapper-focused {
    border-color: #3377ff;
    box-shadow: 0 0 0 2px rgba(51, 119, 255, 0.2);
  }

  &&&.ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused {
    border-color: #3377ff;
    box-shadow: 0 0 0 2px rgba(51, 119, 255, 0.2);
  }

  .ant-input-affix-wrapper:hover {
    border-color: #8b8fa3;
  }
`;
const SearchIcon = styled(Icon)`
  color: #9195a3;
  margin: 6px 0 6px 8px;
`;

interface ISearch {
  style?: CSSProperties;
  placeholder: string;
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterPress?: (value: string) => void; // Added for capturing Enter key press
  disabled?: boolean;
}

export const Search = (props: ISearch & InputProps) => {
  const { value, onChange, style, disabled, placeholder, onEnterPress, ...others } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };

  // Handling Enter key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnterPress) {
      onEnterPress(value);
    }
  };

  return (
      <SearchDiv style={style}>
        <SearchInput
            disabled={disabled}
            placeholder={placeholder}
            onChange={handleChange}
            onKeyDown={handleKeyDown} // Listening for key down events
            value={value}
            prefix={<SearchIcon />}
            {...others}
        />
      </SearchDiv>
  );
};