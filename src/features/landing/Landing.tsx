import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledLandingContainer } from "./Landing.styles";
import Input from "../UI/input/Input";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount,
// } from './counterSlice';

const Landing = () => {
  //   const count = useSelector(selectCount);
  const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <StyledLandingContainer>
      <div className="cuna-auto-loan-form">
        <Input
          placeholder="Auto Purchase Price"
          name="auto-puchase-price"
          label="Auto Purchase Price"
        />
        <Input placeholder="Auto Make" name="auto-make" label="Auto Make" />
        <Input placeholder="Auto Model" name="auto-model" label="Auto Model" />
        <Input
          placeholder="Estimated Income"
          name="estimated-income"
          label="Estimated Income"
        />
        <Input
          placeholder="Estimated Credit Score"
          name="estimated-credit-score"
          label="Estimated Credit Score"
        />
      </div>
    </StyledLandingContainer>
  );
};

export default Landing;
