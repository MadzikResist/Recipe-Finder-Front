import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled(Link)`
  font-size: 1.5rem;
  color: #F9B613;
  text-decoration: none;
  @media(min-width: 768px){
    font-size: 3rem;
    letter-spacing: 1px;
  }
`;
const Span = styled.span`
  color: #72AC31;
`;
const LinkReg = () => {
    return (
        <Container to="/register"><Span>R</Span>egister</Container>
    );
};

export default LinkReg;