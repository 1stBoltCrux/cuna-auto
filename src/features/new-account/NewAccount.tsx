import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledNewAccountContainer } from "./NewAccount.styles";
import {
  selectUser,
  selectErrors,
  setUser,
  setErrors,
  selectIsValid
} from "./newAccountSlice";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import { passwordValidator, emailValidator } from "../../utilities/utilities";

const NewAccount = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const errors = useSelector(selectErrors);
  const isvalid = useSelector(selectIsValid);

  console.log(errors)

  const handleChange = (inputName: string, inputValue: string) => {
    validate(inputName, inputValue);
    dispatch(setUser({ ...user, [inputName]: inputValue }));
  };

  const validate = (inputName: string, inputValue: string) => {
    switch (inputName) {
      case "username":
        if (!emailValidator(inputValue)) {
          dispatch(
            setErrors({
              inputName,
              inputErrorValue: "Please enter a valid email as a username.",
            })
          );
        } else {
          dispatch(setErrors({ inputName, inputErrorValue: null }));
        }
        break;
      case "password":
        if (!passwordValidator(inputValue)) {
          dispatch(
            setErrors({
              inputName,
              inputErrorValue:
                "Please enter a password that is at least 8 characters and contains a number and special character.",
            })
          );
        } else {
          dispatch(setErrors({ inputName, inputErrorValue: null }));
        }
        break;
      case "repeatPassword":
        if (inputValue !== user.password) {
          dispatch(
            setErrors({
              inputName,
              inputErrorValue: "Please make sure your password is matching.",
            })
          );
        } else {
          dispatch(setErrors({ inputName, inputErrorValue: null }));
        }
        break;
      default:
        break;
    }
  };

  return (
    <StyledNewAccountContainer>
      <div className="cuna-auto-loan-new-account-input-group">
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
        handleChange={handleChange}
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
      <Button handleSubmit={() => null} text="Create Account"/>
      </div>

    </StyledNewAccountContainer>
  );
};

export default NewAccount;
