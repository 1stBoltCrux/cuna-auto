import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledNewAccountContainer } from "./NewAccount.styles";
import { selectUser, selectErrors, setUser } from './newAccountSlice';
import Input from "../UI/input/Input";
import { passwordValidator, emailValidator } from '../../utilities/utilities';

const NewAccount = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const errors = useSelector(selectErrors);

  const handleChange = (inputName: string, inputValue: string) => {
    dispatch(setUser({ ...user, [inputName]: inputValue }));
  }

  const validator = () => {

  }

  return (
    <StyledNewAccountContainer>
      <Input
        placeholder="Enter Username"
        label="Username"
        type="text"
        name="username"
        handleChange={handleChange}
        errors={errors}
      ></Input>
      <Input
        placeholder="Enter Password"
        label="Password"
        type="text"
        name="password"
        handleChange={() => {}}
        errors={errors}
      ></Input>
      <Input
        placeholder="Repeat Password"
        label="Repeat Password"
        type="text"
        name="repeatPassword"
        handleChange={handleChange}
        errors={errors}
      ></Input>
    </StyledNewAccountContainer>
  );
};

export default NewAccount;
