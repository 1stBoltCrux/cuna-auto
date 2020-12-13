import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledDisqualificationContainer } from "./Disqualification.styles";

const Disqualification = () => {
  const dispatch = useDispatch();

  return (
    <StyledDisqualificationContainer>
      <p>Disqualification component.</p>
    </StyledDisqualificationContainer>
  );
}

export default Disqualification;
