import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// import Colors from '~/themes/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const Img = styled.img`
  width: 100px;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  text-align: right;

  p {
    font-size: 18px;
    line-height: 12px;
    font-weight: 600;
  }

  span {
    color: #606060;
    font-size: 13px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
`;

export const ContainerAddList = styled.form`
  display: flex;
  margin-bottom: 30px;
  margin-top: 27px;
`;

export const ButtonAddList = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 8px;
  background-color: #fe9e0e;
  border: none;
  width: 150px;
  height: 40px;
  margin-left: -21px;
  color: #fff;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const IconAdd = styled.div`
  display: flex;
  width: 57px;
  background-color: #f29202;
  height: 40px;
  align-items: center;
  justify-content: center;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Card = styled.div`
  display: flex;
  background: #262626;
  height: 62px;
  margin-bottom: 12px;
  justify-content: space-between;

  button {
    border: none;
    background-color: #3c3c3c;
    width: 57px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
`;
