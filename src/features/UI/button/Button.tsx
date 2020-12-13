import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ text, handleSubmit, disabled }: { text: string, handleSubmit: () => void, disabled?: boolean}) => {
  return (
    <StyledButton>
      <button disabled={disabled} onClick={() => handleSubmit()}>{text}</button>
    </StyledButton>
  );
};

export default Button;
