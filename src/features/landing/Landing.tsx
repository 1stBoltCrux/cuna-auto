import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledLandingContainer } from './Landing.styles';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount,
// } from './counterSlice';

export function Landing() {
//   const count = useSelector(selectCount);
  const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <StyledLandingContainer>
      <p>Landing component.</p>
    </StyledLandingContainer>
  );
}
