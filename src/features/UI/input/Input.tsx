import React from "react";
import { StyledInput } from "./Input.styles";

const Input = ({
  handleChange,
  label,
  name,
  placeholder,
}: {
  handleChange: (inputName: string, inputValue: string | number) => void;
  label: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <StyledInput>
      <label>{label}</label>
      <input
        onChange={(e) => handleChange(name, e.target.value)}
        name={name}
        placeholder={placeholder}
        type="text"
      />
    </StyledInput>
  );
};

export default Input;
