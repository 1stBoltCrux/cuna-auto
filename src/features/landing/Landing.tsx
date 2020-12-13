import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledLandingContainer } from "./Landing.styles";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import { min, max } from "../../constants/constants";
import { LoanRequest } from "../../interfaces/interfaces";
import { selectLoanRequest, setLoanRequest } from './landingSlice';

const Landing = () => {
  const loanRequestState = useSelector(selectLoanRequest)
  const dispatch = useDispatch();

  const handleChange = (inputName: string, inputValue: string | number) => {
    dispatch(setLoanRequest({...loanRequestState, [inputName]: inputValue}))
  };

  const handleSubmit = () => {

  }

  return (
    <StyledLandingContainer>
      <div className="cuna-auto-loan-form">
        <div className="cuna-auto-loan-inputs">
          <Input
            type="number"
            handleChange={handleChange}
            placeholder="Auto Purchase Price"
            name="autoPurchasePrice"
            label="Auto Purchase Price"
          />
          <Input
          type="text"
            placeholder="Auto Make"
            name="autoMake"
            label="Auto Make"
            handleChange={handleChange}
          />
          <Input
          type="text"
            placeholder="Auto Model"
            name="autoModel"
            label="Auto Model"
            handleChange={handleChange}
          />
          <Input
            type="number"
            placeholder="Estimated Income"
            name="estimatedIncome"
            label="Estimated Income"
            handleChange={handleChange}
          />
          <Input
            type="number"
            placeholder="Estimated Credit Score"
            name="estimatedCreditScore"
            label="Estimated Credit Score"
            handleChange={handleChange}
            min={min}
            max={max}
          />
        </div>
        <div className="cuna-auto-loan-button-container">
          <Button handleSubmit={handleSubmit} text="Submit Application"></Button>
        </div>
      </div>
    </StyledLandingContainer>
  );
};

export default Landing;
