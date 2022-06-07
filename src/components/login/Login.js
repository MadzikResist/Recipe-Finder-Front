import React, { useEffect } from 'react';
import styled from 'styled-components';
import Title from './title/Title';
import { useForm } from 'react-hook-form';
import bgReg from '../../img/bgReg.webp';
import { useHistory } from 'react-router-dom';
import LinkReg from './link/LinkReg';
import { useFetch } from '../../hooks/useFetch';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  background-image: url(${bgReg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
`;
const Error = styled.p`
  color: red;
  font-size: 1.2rem;
  position: absolute;
  top: 102%;
`;
const Label = styled.div`
  position: relative;
  width: 80%;
  height: 80px;
  margin-bottom: 50px;
`;
const PInput = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.5rem;
  height: 40px;
  padding: 5px;
  transition: opacity 0.8s ease;
  opacity: 1;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    bottom: 50%;
    right: 0;
    width: 100%;
    height: 50%;
    background-color: #f9b613;
    opacity: 0.4;
    z-index: 1;
    transition: transform 1s ease;
    transform: skew(40deg) rotate(15deg) translate(100%, 50%);
  }
`;
const Input = styled.input`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 2px solid #000;
  outline: none;
  font-size: 1.2rem;
  padding-left: 5px;
  background: transparent;
  &:focus + ${PInput}::after {
    transform: skew(40deg) rotate(15deg) translate(0, 50%);
  }
  &:focus {
    border-bottom: 2px solid #f9b613;
  }
`;
const Submit = styled.button`
  width: 80%;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 7px 0;
  outline: none;
  color: #fff;
  border: none;
  border-radius: 3px;
  background: transparent;
  position: relative;
  overflow: hidden;
  margin-top: 15px;
  margin-bottom: 15px;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(#72ac31, #f9b613);
    transition: transform 1s ease;
  }
  &:hover::after {
    transform: translateX(-50%);
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;
const PZindex = styled.p`
  position: relative;
  z-index: 5;
`;
const Errors = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
`;
const ErrorServer = styled.p`
  color: red;
  font-size: 1.2rem;
`;
const Img = styled.img`
  width: 50px;
  visibility: ${(props) => (props.loadingImg ? 'visible' : 'hidden')};
  @media (min-width: 768px) {
    width: 70px;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;
const Right = styled.div`
  width: 100%;
`;
const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const { fetchData, error: loginError, fetching: loading } = useFetch();

  const onSubmit = async (data) => {
    await fetchData({
      url: 'auth/login',
      body: { email: data.email.trim(), password: data.password.trim() },
      onSuccess: (data) => {
        console.log('datalogin', data);
        localStorage.setItem('secure_token', JSON.stringify(data));
        history.push('/dashboard');
      },
    });
  };
  useEffect(() => {
    const secureStorage = localStorage.getItem('secure_token');
    if (secureStorage) {
      history.push('/dashboard');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <Container>
        {/*<Img src={loader} alt="Loading" loadingImg={loading}/>*/}
        <Left>
          <Title />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>
              <Input
                disabled={loading}
                type="text"
                id="email"
                name="email"
                aria-invalid={errors.email ? 'true' : 'false'}
                ref={register({ required: true })}
              />
              <PInput htmlFor="email">
                <PZindex>Email</PZindex>
              </PInput>
              {errors.nick && <Error role="alert">This field is required</Error>}
            </Label>
            <Label>
              <Input
                disabled={loading}
                type="password"
                id="pass"
                name="password"
                aria-invalid={errors.password ? 'true' : 'false'}
                ref={register({ required: true })}
              />
              <PInput htmlFor="pass">
                <PZindex>Password</PZindex>
              </PInput>
              {errors.password && <Error role="alert">This field is required</Error>}
            </Label>
            <Errors>{loginError && <ErrorServer>{loginError.errors}</ErrorServer>}</Errors>
            <Submit disabled={loading}>
              <PZindex>Log In</PZindex>
            </Submit>
            <LinkReg />
          </Form>
        </Left>
        <Right></Right>
      </Container>
    </>
  );
};

export default Login;
