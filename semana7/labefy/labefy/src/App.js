import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import {css} from 'styled-components'

const ArimaFont = css`
@import url('https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@100&display=swap');
`;


const GlobalStyle = createGlobalStyle`
${ArimaFont}
body{
  background-color: #0a0b1b;
  font-family: 'Arima Madurai', cursive;
  width: 100vw;


}
h1 {
  color: #8cc0ff;
}

h2, h3, p, label{
  color: white;
}

`

const Container = styled.div`
  width: 100vw;
`

const ContainerMain = styled.div` 
  display: grid;
  grid-template-columns: 10% 1fr;
`

export default class App extends React.Component {

  

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Header />
        <ContainerMain >   
          <Main />
      </ContainerMain>
      </Container>
      
    );
  }
  
}
