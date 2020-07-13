import styled, { css } from 'styled-components';

export default styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${props => {
    if (props.w400) {
      return css`
        width: 400px;
      `;
    }
    if (props.w450) {
      return css`
        width: 450px;
      `;
    }
    if (props.w500) {
      return css`
        width: 500px;
      `;
    }
    if (props.w550) {
      return css`
        width: 550px;
      `;
    }
    if (props.w600) {
      return css`
        width: 550px;
      `;
    }
    if (props.w650) {
      return css`
        width: 550px;
      `;
    }
    if (props.w700) {
      return css`
        width: 550px;
      `;
    }
    if (props.w750) {
      return css`
        width: 550px;
      `;
    }
  }}

  @media (min-width: 320px) and (max-width: 480px) {
    width: 345px;
  }

  @media (max-width: 320px) {
    width: 290px;

    hr {
      width: 260px;
    }
  }
`;
