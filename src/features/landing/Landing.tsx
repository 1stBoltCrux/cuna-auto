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
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </StyledLandingContainer>
  );
};

export default Landing;
