import React, { useState } from "react";
import { StyledInput } from "./Input.styles";

const Input = ({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <StyledInput>
      <label>{label}</label>
      <input name={name} placeholder={placeholder} type="text" />
    </StyledInput>
  );
};

export default Input;
