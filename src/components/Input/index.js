import React from 'react';

import { Container } from './styles';

const Input = React.forwardRef(
  ({ label, error, helperText, ...props }, ref) => (
    <Container>
      {label && <label>{label}</label>}
      <input {...props} ref={ref} />
      {error && <span>{helperText || 'Este campo é obrigatório'}</span>}
    </Container>
  )
);

export default Input;
