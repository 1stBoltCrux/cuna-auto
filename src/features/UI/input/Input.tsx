import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledInput } from './Input.styles';

const Input = () => {

  return (
    <StyledInput>
        <input type="text"/>
    </StyledInput>
  );
}

export default Input;
