/* eslint-disable import/order */
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FiLogIn } from 'react-icons/fi';

// Styles
import { Img, ForgotPassword, Register } from './styles';

// Components
import { Centered, Container, Dividir, Input, Button } from '~/components';

// services
import { navigateTo } from '~/services/history';

export default function SignIn() {
  document.title = 'TO-DO List - Login';

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = useCallback(data => {
    // TODO
    navigateTo('/dashboard');
  }, []);

  return (
    <Centered>
      <Container w400>
        <Img src={require('~/assets/images/logo.png')} alt="TO-DO List" />

        <Dividir mt35 mb27 />

        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            label="Email"
            name="email"
            ref={register({ required: true })}
            error={Boolean(errors.email)}
          />
          <Input
            type="password"
            label="Senha"
            name="password"
            ref={register({ required: true })}
            error={Boolean(errors.password)}
          />
          <ForgotPassword to="forgot">Esqueceu sua senha?</ForgotPassword>
          <Button
            lef13
            iconArrowRight
            sizeIcon={20}
            height={45}
            label="ACESSAR"
            type="submit"
          />
        </form>

        <Dividir mt35 mb27 />

        <Register to="/register">
          <FiLogIn color="#FE9E0E" size={22} style={{ marginRight: 15 }} />
          <p>Registre-se</p>
        </Register>
      </Container>
    </Centered>
  );
}
