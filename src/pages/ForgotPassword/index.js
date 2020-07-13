/* eslint-disable import/order */
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

// Styles
import { Img, Register } from './styles';

// Components
import { Centered, Container, Dividir, Input, Button } from '~/components';

export default function ForgotPassword() {
  document.title = 'TO-DO List - Recuperar senha';
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = useCallback(data => {
    // TODO
  }, []);

  return (
    <Centered>
      <Container w400>
        <Img src={require('~/assets/images/logo.png')} alt="To-do List" />

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
