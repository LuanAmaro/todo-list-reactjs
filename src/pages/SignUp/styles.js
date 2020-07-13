import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Colors from '~/themes/Colors';

export const Img = styled.img`
  width: 153px;
`;

export const ForgotPassword = styled(Link)`
  display: flex;
  justify-content: flex-end;

  color: #707070;

  margin-top: -15px;
  margin-bottom: 15px;
`;

export const Register = styled(Link)`
  display: flex;
  color: ${Colors.primary.backgroundColor};
`;
