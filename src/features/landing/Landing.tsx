import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledLandingContainer } from "./Landing.styles";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import {
  selectLoanRequest,
  setLoanRequest,
  setErrors,
  isValid,
  selectErrors,
  postLoanRequest,
  selectNewAccountRedirect,
  isLoading,
} from "./landingSlice";
import { min, max } from "../../constants/constants";
import { Redirect } from "react-router-dom";

const Landing = () => {
  const loanRequestState = useSelector(selectLoanRequest);
  const errors = useSelector(selectErrors);
  const redirect = useSelector(selectNewAccountRedirect);
  const dispatch = useDispatch();
  const canSubmit = useSelector(isValid);
  const loading = useSelector(isLoading);

  const validate = (inputName: string, inputValue: string) => {
    switch (inputName) {
      case "autoPurchasePrice":
        if (!parseInt(inputValue)) {
          dispatch(
            setErrors({
              inputName,
              inputErrorValue: "Please enter a valid purchase price.",
            })
          );
        } else {
          dispatch(setErrors({ inputName, inputErrorValue: null }));
        }
        break;
      case "estimatedIncome":
        if (!parseInt(inputValue)) {
          dispatch(
            setErrors({
              inputName,
              inputErrorValue: "Please enter a valid estimated income.",
            })
          );
        } else {
          dispatch(setErrors({ inputName, inputErrorValue: null }));
        }
        break;
      case "estimatedCreditScore":
        if (
          !parseInt(inputValue) ||
          parseInt(inputValue) > max ||
          parseInt(inputValue) < min
        ) {
          dispatch(
            setErrors({
              inputName,
              inputErrorValue:
                "Please enter a valid credit score between 300 and 850.",
            })
          );
        } else {
          dispatch(setErrors({ inputName, inputErrorValue: null }));
        }
        break;
    }
  };

  const handleChange = (inputName: string, inputValue: string) => {
    validate(inputName, inputValue);
    dispatch(setLoanRequest({ ...loanRequestState, [inputName]: inputValue }));
  };

  const handleSubmit = () => {
    dispatch(postLoanRequest(loanRequestState));
  };

  console.log(redirect);

  return (
    <StyledLandingContainer>
      <div className="cuna-auto-loan-form">
        <div className="cuna-auto-loan-inputs">
          <Input
            type="text"
            handleChange={handleChange}
            placeholder="Auto Purchase Price"
            name="autoPurchasePrice"
            label="Auto Purchase Price"
            errors={errors}
          />
          <Input
            type="text"
            placeholder="Auto Make"
            name="autoMake"
            label="Auto Make"
            handleChange={handleChange}
            errors={errors}
          />
          <Input
            type="text"
            placeholder="Auto Model"
            name="autoModel"
            label="Auto Model"
            handleChange={handleChange}
            errors={errors}
          />
          <Input
            type="text"
            placeholder="Estimated Income"
            name="estimatedIncome"
            label="Estimated Income"
            handleChange={handleChange}
            errors={errors}
          />
          <Input
            type="text"
            placeholder="Estimated Credit Score"
            name="estimatedCreditScore"
            label="Estimated Credit Score"
            handleChange={handleChange}
            errors={errors}
          />
        </div>
        <div className="cuna-auto-loan-button-container">
          {loading ? (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <Button
              handleSubmit={handleSubmit}
              text="Submit Application"
              disabled={canSubmit}
            ></Button>
          )}
        </div>
      </div>
      {redirect ? <Redirect to="/new-account" /> : null}
    </StyledLandingContainer>
  );
};

export default Landing;
