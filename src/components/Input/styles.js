import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-bottom: 15px;

  label {
    margin-bottom: 2px;
  }

  input {
    font-family: 'Poppins', sans-serif;
    height: 40px;
    border: none;
    outline: none;
    padding-left: 10px;
    font-size: 14px;
  }

  span {
    color: red;
    font-size: 12px;
  }
`;
