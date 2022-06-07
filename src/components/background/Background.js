import React from 'react';
import styled, { keyframes } from 'styled-components';
import broccoli from '../../assets/broccoli.webp';
import carrot from '../../assets/carrot.webp';
import hotpepper from '../../assets/hotpepper.webp';
import corn from '../../assets/corn.webp';
import pepper from '../../assets/pepper.webp';
import potato from '../../assets/potato.webp';
import tomato from '../../assets/tomato.webp';

const fall = keyframes`
  0% {
    opacity: 1;
    top: -10%;
    transform: translateX (20px) rotate(0deg);
  }
  20% {
    opacity: 0.8;
    transform: translateX (-20px) rotate(45deg);
  }
  40% {

    transform: translateX (-20px) rotate(90deg);
  }
  60% {

    transform: translateX (-20px) rotate(135deg);
  }
  80% {

    transform: translateX (-20px) rotate(180deg);
  }
  100% {

    top: 110%;
    transform: translateX (-20px) rotate(225deg);
  }
`;
const Section = styled.section`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: radial-gradient(#333, #000);
  overflow: hidden;
`;
const Leaf = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const LeafDiv = styled.div`
  position: absolute;
  display: block;
  transform: translate(-50%, -50%);

  &:nth-child(1) {
    left: 6%;
    animation: ${fall} 50s linear infinite;
    animation-delay: -2s;
  }

  &:nth-child(2) {
    left: 24%;
    animation: ${fall} 50s linear infinite;
    animation-delay: -10s;
  }

  &:nth-child(3) {
    left: 42%;
    animation: ${fall} 50s linear infinite;
    animation-delay: -7s;
  }

  &:nth-child(4) {
    left: 56%;
    animation: ${fall} 50s linear infinite;
    animation-delay: -15s;
  }

  &:nth-child(5) {
    left: 70%;
    animation: ${fall} 50s linear infinite;
    animation-delay: -7s;
  }

  &:nth-child(6) {
    left: 84%;
    animation: ${fall} 50s linear infinite;
    animation-delay: -25s;
  }

  &:nth-child(7) {
    left: 97%;
    animation: ${fall} 50s linear infinite;
    animation-delay: -4s;
  }
`;
const Leaf1 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: rotateX(180deg);
`;

const Background = () => {
  return (
    <Section>
      <Leaf>
        <LeafDiv>
          <img src={tomato} height="75px" width="75px" />
        </LeafDiv>
        <LeafDiv>
          <img src={potato} height="75px" width="75px" />
        </LeafDiv>
        <LeafDiv>
          <img src={pepper} height="75px" width="75px" />
        </LeafDiv>
        <LeafDiv>
          <img src={broccoli} height="75px" width="75px" />
        </LeafDiv>
        <LeafDiv>
          <img src={hotpepper} height="75px" width="75px" />
        </LeafDiv>
        <LeafDiv>
          <img src={carrot} height="75px" width="75px" />
        </LeafDiv>
        <LeafDiv>
          <img src={corn} height="75px" width="75px" />
        </LeafDiv>
      </Leaf>

      <Leaf1>
        <LeafDiv>
          <img src={tomato} height="75px" width="75px" />
        </LeafDiv>
        <LeafDiv>
          <img src={potato} height="75px" width="75px" />
        </LeafDiv>
        <LeafDiv>
          <img src={pepper} height="75px" width="75px" />
        </LeafDiv>
        <LeafDiv>
          <img src={broccoli} height="75px" width="75px" />
        </LeafDiv>
        <LeafDiv>
          <img src={hotpepper} height="75px" width="75px" />
        </LeafDiv>
        <LeafDiv>
          <img src={carrot} height="75px" width="75px" />
        </LeafDiv>
        <LeafDiv>
          <img src={corn} height="75px" width="75px" />
        </LeafDiv>
      </Leaf1>

      {/*<Leaf>*/}
      {/*  <LeafDiv>*/}
      {/*    <img*/}
      {/*      src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png"*/}
      {/*      height="75px"*/}
      {/*      width="75px"*/}
      {/*    />*/}
      {/*  </LeafDiv>*/}
      {/*  <LeafDiv>*/}
      {/*    <img*/}
      {/*      src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png"*/}
      {/*      height="75px"*/}
      {/*      width="75px"*/}
      {/*    />*/}
      {/*  </LeafDiv>*/}
      {/*  <LeafDiv>*/}
      {/*    <img*/}
      {/*      src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png"*/}
      {/*      height="75px"*/}
      {/*      width="75px"*/}
      {/*    />*/}
      {/*  </LeafDiv>*/}
      {/*  <LeafDiv>*/}
      {/*    <img*/}
      {/*      src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png"*/}
      {/*      height="75px"*/}
      {/*      width="75px"*/}
      {/*    />*/}
      {/*  </LeafDiv>*/}

      {/*  <LeafDiv>*/}
      {/*    <img*/}
      {/*      src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png"*/}
      {/*      height="75px"*/}
      {/*      width="75px"*/}
      {/*    />*/}
      {/*  </LeafDiv>*/}
      {/*  <LeafDiv>*/}
      {/*    <img*/}
      {/*      src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png"*/}
      {/*      height="75px"*/}
      {/*      width="75px"*/}
      {/*    />*/}
      {/*  </LeafDiv>*/}
      {/*  <LeafDiv>*/}
      {/*    <img*/}
      {/*      src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png"*/}
      {/*      height="75px"*/}
      {/*      width="75px"*/}
      {/*    />*/}
      {/*  </LeafDiv>*/}
      {/*</Leaf>*/}
    </Section>
  );
};

export default Background;
