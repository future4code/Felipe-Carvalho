import React from 'react'
import { createGlobalStyle } from 'styled-components';
import {Router} from './routes/Router'
import { backgroundColor, tertiaryColor } from './constantes/colors'


const GlobalStyle = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    font-family: 'Oxygen', sans-serif;
    
    body{
      width: 100vw;
      background-color: ${backgroundColor};
      color: ${tertiaryColor};
    }

    a{
      text-decoration: none;
    }

    button{
      border: none;
      cursor: pointer;
      background-color: ${backgroundColor};
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
