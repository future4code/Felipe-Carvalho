import React from "react";
import { createGlobalStyle } from 'styled-components'
import { Header } from "./components/Header";
import { Router } from "./route/Router";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    width: 100vw;
    background: #2b0065;
    color: white;
    font-family: 'Uchen', serif;
  }
  button{
    border: none;
    font-family: 'Uchen', serif;
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
      <Header />
      <Router />
    </div>
  );
}

export default App;
