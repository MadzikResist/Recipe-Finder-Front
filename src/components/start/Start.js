import React, { useEffect } from 'react';
import styled from 'styled-components';
import Video from './video/Video';
import Btn from './btn/Btn';
import NoteSection from './notesection/NoteSection';
import LogAndReg from './logandreg/LogAndReg';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const Start = () => {
  const history = useHistory();
  useEffect(() => {
    const secureStorage = localStorage.getItem('secure_token');
    if (secureStorage) {
      history.push('/dashboard');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Container>
      <Video />
      <Btn />
      <NoteSection />
      <LogAndReg />
    </Container>
  );
};

export default Start;
