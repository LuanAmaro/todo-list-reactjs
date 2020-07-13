/* eslint-disable import/order */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiLogIn } from 'react-icons/fi';

// Styles
import { Img, ForgotPassword, Register } from './styles';

// Components
import { Centered, Container, Dividir, Input, Button } from '~/components';

// Logo
import LogoTodoList from '~/assets/images/logo.png';

// services
import { navigateTo } from '~/services/history';

export default function SignIn() {
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    document.title = 'TO-DO List - Login';
  }, []);

  const onSubmit = data => {
    // TODO
    navigateTo('/dashboard');
  };

  return (
    <Centered>
      <Container w400>
        <Img src={LogoTodoList} alt="To-do List" />

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
