import styled from 'styled-components';

const StyledButton = styled.div`
padding: 16px 0px;

button {
    cursor: pointer;
    background-color: #3498DB;
    color: white;
    padding: 16px;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 16px;

    &:disabled {
        background-color: #D5DBDB;
        color: #AEB6BF ;
    }
}
`;
export {
    StyledButton
}