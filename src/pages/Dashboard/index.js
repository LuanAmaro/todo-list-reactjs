/* eslint-disable import/order */
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FiLogOut, FiPlus, FiCheck, FiTrash2 } from 'react-icons/fi';

// Styles
import {
  Container,
  Header,
  Img,
  Avatar,
  Content,
  ContainerAddList,
  ButtonAddList,
  IconAdd,
  Card,
  TextContent,
} from './styles';

// Components
import { Dividir, Input } from '~/components';
import api from '~/services/api';

export default function Dashboard() {
  document.title = 'TO-DO List - Dashboard';
  const { register, handleSubmit, errors } = useForm();
  const [List, setList] = useState([]);

  useEffect(() => {
    const loadList = async () => {
      const { data } = await api.get('/list');
      setList(data);
    };

    loadList();
  }, [List]);

  const onSubmit = useCallback(data => {
    // TODO
  }, []);

  const handleChecked = useCallback(id => {
    // TODO
  }, []);

  const handleRemove = useCallback(id => {
    // TODO
  }, []);

  return (
    <>
      <Container>
        <Header>
          <Img src={require('~/assets/images/logo.png')} alt="To-do List" />
          <Avatar>
            <div style={{ marginRight: 20, marginTop: 5 }}>
              <p>Username surname</p>
              <span>email@exemple.com.br</span>
            </div>
            <Link to="/">
              <FiLogOut color="#FE9E0E" size={40} />
            </Link>
          </Avatar>
        </Header>

        <Dividir />

        <Content>
          <ContainerAddList onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="list"
              type="text"
              style={{ paddingRight: 31 }}
              placeholder="Add title todo list"
              ref={register({ required: true })}
              error={Boolean(errors.list)}
            />
            <ButtonAddList type="submit">
              <p>Adicionar</p>
              <IconAdd>
                <FiPlus size={20} color="#ffff" />
              </IconAdd>
            </ButtonAddList>
          </ContainerAddList>
          {List.map(items => (
            <Card key={items.id}>
              <button type="button">
                <FiCheck
                  size={22}
                  color="#29CB00"
                  onClick={() => handleChecked(items.id)}
                />
              </button>
              <TextContent>
                <p>{items.description}</p>
              </TextContent>
              <button type="button">
                <FiTrash2
                  size={22}
                  color="#999999"
                  onClick={() => handleRemove(items.id)}
                />
              </button>
            </Card>
          ))}

          {/* Remove esse card quando for usar a API */}
          <Card>
            <button type="button">
              <FiCheck size={22} color="#29CB00" />
            </button>
            <TextContent>
              <p>
                Title one, Title one, Title one, Title one, Title one, Title one
              </p>
            </TextContent>
            <button type="button">
              <FiTrash2 size={22} color="#999999" />
            </button>
          </Card>
        </Content>
      </Container>
    </>
  );
}
