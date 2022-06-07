import React from 'react';
import styled, { keyframes } from 'styled-components';
import Background from '../background/Background';

const circle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Container = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Img = styled.div`
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
  //width: 200px;
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #72ac31;
  border-radius: 50%;
  animation: ${circle} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #72ac31 transparent transparent transparent;
  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const Loading = () => {
  return (
    <>
      <Background />
      <Container>
        <Img></Img>
        <Img></Img>
        <Img></Img>
        <Img></Img>
      </Container>
    </>
  );
};
export default Loading;
