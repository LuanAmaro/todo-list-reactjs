import styled, { css } from 'styled-components';

export default styled.hr`
  border: none;
  width: 300px;
  height: 1px;

  ${props => {
    if (props.mt35) {
      return css`
        margin-top: 35px !important;
      `;
    }
  }}

  ${props => {
    if (props.mb27) {
      return css`
        margin-bottom: 27px !important;
      `;
    }
  }}

  margin-top: 15px;
  margin-bottom: 15px;

  background-color: #323232;
  margin-left: auto;
  margin-right: auto;
`;
