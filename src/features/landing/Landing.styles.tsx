import styled from "styled-components";

const StyledLandingContainer = styled.div`
  .cuna-auto-loan-form {
    padding: 40px;
    border-radius: 5px;
    border: 1px solid #bfc9ca;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
    background: #eaf2f8;
  }

  // loading spinner

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #3498db;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #3498db transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export { StyledLandingContainer };
