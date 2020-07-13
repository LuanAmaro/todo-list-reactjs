/* eslint-disable import/order */
import React from 'react';
import { useForm } from 'react-hook-form';

// Components
import { Img, Register } from './styles';

// Styles
import { Centered, Container, Dividir, Input, Button } from '~/components';

// Logo
import LogoTodoList from '~/assets/images/logo.png';

export default function ForgotPassword() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    // TODO
  };

  return (
    <Centered>
      <Container w400>
        <Img src={LogoTodoList} alt="To-do List" />

        <Dividir />
        <h2 style={{ color: '#FE9E0E' }}>Recuperar senha</h2>
        <Dividir />

        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            label="Email"
            name="email"
            ref={register({ required: true })}
            error={Boolean(errors.email)}
          />

          <Button
            lef13
            iconArrowRight
            sizeIcon={20}
            height={45}
            label="CONTINUAR"
            type="submit"
          />
        </form>

        <Dividir mt35 mb27 />

        <Register to="/">
          <p>Já possui uma conta?</p>
        </Register>
      </Container>
    </Centered>
  );
}
