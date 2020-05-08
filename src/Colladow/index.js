import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import Resume from './Resume';
import Heading, { Name } from './components/Heading';

const theme = {
  fontFamily: '\'Open Sans\', Helvetica, sans-serif',
  margin: 8,
};

const Container = styled.div`
  padding: ${props => props.theme.margin * 2}px;
  box-sizing: border-box;
  max-width: 1440px;
  margin: auto;
`;

const Colladow = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header />

      <Heading>Resume</Heading>
      <Name>Wilson Collado</Name>

      <Resume />
    </Container>
  </ThemeProvider>
);

export default Colladow;
