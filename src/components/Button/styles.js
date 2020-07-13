import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Colors from '~/themes/Colors';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : '40px')};
  border: none;
  font-size: 16px;
  font-weight: bold;

  ${Colors.primary}

  span {
    flex: 1;
    ${({ lef13 }) => {
      if (lef13) {
        return css`
          position: relative;
          margin-left: 13px;
        `;
      }
    }}
  }

  &:hover {
    background: ${shade(0.1, `${Colors.primary.backgroundColor}`)};
  }
`;
