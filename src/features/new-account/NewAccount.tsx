import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledNewAccountContainer } from "./NewAccount.styles";
import Input from "../UI/input/Input";

const NewAccount = () => {
  const dispatch = useDispatch();

  return (
    <StyledNewAccountContainer>
      <Input
        placeholder="Enter Username"
        label="Username"
        type="text"
        name="username"
        handleChange={() => {}}
        errors={{}}
      ></Input>
      <Input
        placeholder="Enter Password"
        label="Password"
        type="text"
        name="password"
        handleChange={() => {}}
        errors={{}}
      ></Input>
    </StyledNewAccountContainer>
  );
};

export default NewAccount;
