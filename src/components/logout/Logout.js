import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
const Btn = styled.button`
  height: 50%;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #f9b613;
  border-radius: 0.6em;
  color: #72ac31;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  line-height: 1;
  padding: 12px 20px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:hover {
    box-shadow: 0 0 40px 40px #72ac31 inset;
    color: #fff;
    outline: 0;
  }
`;
const P = styled.p`
  font-size: 1.2rem;
`;
const Logout = () => {
  const history = useHistory();
  const handleClick = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <Btn onClick={handleClick}>
      <P>Log out</P>
    </Btn>
  );
};

export default Logout;
