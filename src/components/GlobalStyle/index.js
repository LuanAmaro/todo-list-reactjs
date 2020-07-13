import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #232323;
    color: #FFFFFF
  }

  a {
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    cursor: pointer;
    outline: none;
    font-family: 'Poppins', sans-serif;
  }

  img {
    width: 100%;
  }
`;
