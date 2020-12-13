import styled from "styled-components";

const StyledButton = styled.div`
  padding: 16px 0px;

  button {
    cursor: pointer;
    background-color: #3498db;
    color: white;
    padding: 16px;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 16px;

    &:disabled {
      cursor: not-allowed;
      background-color: #d5dbdb;
      color: #aeb6bf;
      &:hover {
        background-color: #d5dbdb;
      }
    }

    &:hover {
      background-color: #2980b9;
    }
  }
`;
export { StyledButton };
