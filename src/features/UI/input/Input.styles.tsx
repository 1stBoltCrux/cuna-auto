import styled from "styled-components";

const StyledInput = styled.div`
  margin-bottom: 16px;
  min-height: 90px;
  
  input {
    margin-bottom: 4px;
    box-sizing: border-box;
    border: 1px solid #bfc9ca;
    border-radius: 5px;
    padding: 8px;
    color: #424949;
    height: 40px;
    width: 100%;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  p {
    margin: 0;
    color: red;
  }
`;
export { StyledInput };
