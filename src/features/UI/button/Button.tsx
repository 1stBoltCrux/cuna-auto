import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ content }: { content: string }) => {
  return (
    <StyledButton>
      <button>{content}</button>
    </StyledButton>
  );
};

export default Button;
