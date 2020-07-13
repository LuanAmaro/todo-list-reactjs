/* eslint-disable import/order */
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';

// Components
import { Img, Register } from './styles';

import { Centered, Container, Dividir, Input, Button } from '~/components';

// Logo
import LogoTodoList from '~/assets/images/logo.png';

// Styles

export default function SignUp() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    // TODO
  };

  return (
    <Centered>
      <Container w400>
        <Img src={LogoTodoList} alt="To-do List" />

        <Dividir />
        <h2 style={{ color: '#FE9E0E' }}>Registre-se</h2>
        <Dividir />

        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="name"
            label="Nome"
            name="name"
            ref={register({ required: true })}
            error={Boolean(errors.name)}
          />
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
          <Button height={45} label="CADASTRAR" type="submit" />
        </form>

        <Dividir mt35 mb27 />

        <Register to="/">
          <FiArrowLeft color="#FE9E0E" size={22} style={{ marginRight: 15 }} />
          <p>Voltar</p>
        </Register>
      </Container>
    </Centered>
  );
}
