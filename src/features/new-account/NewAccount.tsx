import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledNewAccountContainer } from "./NewAccount.styles";

const NewAccount = () => {
  const dispatch = useDispatch();

  return (
    <StyledNewAccountContainer>
      <p>New account component.</p>
    </StyledNewAccountContainer>
  );
}

export default NewAccount;
