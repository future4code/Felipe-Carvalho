import React from 'react'
import { createGlobalStyle } from 'styled-components';
import {Router} from './routes/Router'
import { backgroundColor, tertiaryColor } from './constantes/colors'


const GlobalStyle = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    background-color: ${backgroundColor};
    font-family: 'Oxygen', sans-serif;
    color: ${tertiaryColor};
    
    body{
      width: 100vw;
    }

    a{
      text-decoration: none;
    }

    button{
      border: none;
      cursor: pointer;
    }
  }
`

const App = () => {
  return (
    <div >
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
