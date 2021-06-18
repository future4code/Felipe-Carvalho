import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Main from './components/Main/Main';
import Header from './components/Header/Header'

const GlobalStyle = createGlobalStyle`
body{
  background-color: #e2ded6;
  
}
h1{
  color: #250044;
}
h2{
  color: #0d1012;
}
`

const Container = styled.div` 
  display: grid;
  grid-template-columns: 15% 1fr;
  width: 100vw;
`

export default class App extends React.Component {

  

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Container >   
          <Main />
      </Container>
      </div>
      
    );
  }
  
}
