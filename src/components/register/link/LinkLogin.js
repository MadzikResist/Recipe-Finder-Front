import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  font-size: 1.5rem;
  color: #f9b613;
  text-decoration: none;
  @media (min-width: 768px) {
    font-size: 3rem;
    letter-spacing: 1px;
  }
`;
const Span = styled.span`
  color: #72ac31;
`;
const LinkLogin = () => {
  return (
    <Container to="/">
      <Span>L</Span>ogin
    </Container>
  );
};

export default LinkLogin;
