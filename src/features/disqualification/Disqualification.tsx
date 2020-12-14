import React from "react";
import { useSelector } from "react-redux";
import { StyledDisqualificationContainer } from "./Disqualification.styles";
import { selectDisqualifiedMessage } from "../landing/landingSlice";

const Disqualification = () => {
  const disqualificationMessage = useSelector(selectDisqualifiedMessage);

  return (
    <StyledDisqualificationContainer>
      <div className="cuna-auto-loan-message-card">
        <h3>Sorry, you're not qualified.</h3>
        <p>{disqualificationMessage}</p>
        <p>
          Please feel free to contact customer service at{" "}
          <a href="tel:555-555-5555">555-555-5555.</a>
        </p>
      </div>
    </StyledDisqualificationContainer>
  );
};

export default Disqualification;
