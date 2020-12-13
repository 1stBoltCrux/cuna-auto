import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ text, handleSubmit }: { text: string, handleSubmit: () => void}) => {
  return (
    <StyledButton>
      <button onClick={() => handleSubmit()}>{text}</button>
    </StyledButton>
  );
};

export default Button;
