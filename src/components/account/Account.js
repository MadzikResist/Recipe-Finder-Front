import React from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';
import DeleteAcc from './deleteAcc/DeleteAcc';
import Background from '../background/Background';
import Logout from '../logout/Logout';

const Container = styled.div`
  width: 80vw;
  margin: 200px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const H1 = styled.h1`
  font-size: 1.7rem;
  color: #f9b613;
  margin: 5vh 0;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;
const Account = () => {
  return (
    <>
      <Background />
      <Nav />
      <div>
        <Container>
          <H1>Account</H1>
          <Logout />
          <H1 style={{ color: 'red' }}>DANGER ZONE</H1>
          <DeleteAcc />
        </Container>
      </div>
    </>
  );
};

export default Account;
