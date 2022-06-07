import React, { useState } from 'react';
import styled from 'styled-components';
import underweight from '../../assets/underweight.png';
import healthy from '../../assets/healthy.png';
import overweight from '../../assets/overweight.png';
import Nav from '../nav/Nav';
import Background from '../background/Background';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ContainerNested = styled.div`
  height: 75vh;
  width: 40vw;
  margin-top: 20vh;
  position: absolute;
  z-index: 50;
  background-color: #141414;
  opacity: 0.9;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid #f9b613;
  border-radius: 0.7em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.2rem;
  padding: 8px 4px;
  margin-top: 8px;
  margin-bottom: 16px;
  border: none;
  background: transparent;
  border-bottom: 1px solid yellow;
  color: white;
  :focus {
    outline: none;
    border: none;
    border-bottom: 1px solid yellow;
  }
`;

const Btn = styled.button`
  display: block;
  width: 100%;
  font-size: 1.2rem;
  margin: 8px 0;
  padding: 10px 0;
  background-color: #333;
  color: #fff;
  border: 1px solid #333;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    //box-shadow: 0 0 40px 40px #72ac31 inset;
    color: #72ac31;
    outline: 0;
  }
`;
const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Center = styled.div`
  text-align: center;
  margin: 40px 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #72ac31;
`;
const Label = styled.label`
  color: white;
  font-size: 1.1rem;
  width: 100px;
`;
const P = styled.p`
  margin: 10px 0;
  color: white;
`;

const ImgContainer = styled.div`
  text-align: center;
`;
const Img = styled.img`
  height: 200px;
`;
const CalculatorBmi = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [img, setImg] = useState(null);
  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBmi(bmi.toFixed(2));

      // Logic for message

      if (bmi < 18.5) {
        setMessage('You are underweight');
        setImg(underweight);
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are a healthy weight');
        setImg(healthy);
      } else {
        setMessage('You are overweight');
        setImg(overweight);
      }
    }
  };

  return (
    <>
      <Background />
      <Container>
        <Nav />
        <ContainerNested>
          <Center>BMI Calculator</Center>
          <form onSubmit={calcBmi}>
            <div>
              <Label>Weight (kg)</Label>
              <Input value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
              <Label>Height (cm)</Label>
              <Input value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <BtnDiv>
              <Btn type="submit">Calculate</Btn>
            </BtnDiv>
          </form>

          {bmi && (
            <Center>
              <h3>Your BMI is: {bmi}</h3>
              <P>{message}</P>
            </Center>
          )}

          {img && (
            <ImgContainer>
              <Img src={img} alt="body" />
            </ImgContainer>
          )}
        </ContainerNested>
      </Container>
    </>
  );
};

export default CalculatorBmi;
