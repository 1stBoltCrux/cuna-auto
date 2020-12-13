import React from "react";
import { StyledInput } from "./Input.styles";

const Input = ({
  handleChange,
  label,
  name,
  placeholder,
  type,
  errors
}: {
  handleChange: (inputName: string, inputValue: string) => void;
  label: string;
  name: string;
  placeholder: string;
  type: string;
  errors: {[key: string]: any}
}) => {
  return (
    <StyledInput>
      <label>{label}</label>
      <input
        onChange={(e) => handleChange(name, e.target.value)}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      {
        errors[name] ? <p className="error">{errors[name]}</p> : null
      }
    </StyledInput>
  );
};

export default Input;
