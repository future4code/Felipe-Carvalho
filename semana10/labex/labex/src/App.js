import React from "react";
import { createGlobalStyle } from 'styled-components'
import { Router } from "./router/Router";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    width: 100vw;
    height: 100vh;
    background: #0F0E38;
    color: white;
    font-family: 'Uchen', serif;
  }
  button{
    border: none;
    font-family: 'Uchen', serif;
    background-color: #0F0E38;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    height: 45px;
    width: 100px;
    transition: 0.8s;
    cursor: pointer;
    &:hover{
      background-color: white;
      color: black;
    }
  }
  a{
    text-decoration: none;
    color: white;
  }
`



function App() {
  return (
    <div >
      <GlobalStyle />
      
      <Router />
    </div>
  );
}

export default App;
