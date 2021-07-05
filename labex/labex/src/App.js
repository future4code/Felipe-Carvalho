import React from "react";
import { createGlobalStyle } from 'styled-components'
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";

const GlobalStyle = createGlobalStyle`
  *{
    background: #2b0065;
    margin: 0;
    padding: 0;
    color: white;
  }
  body{
    width: 100vw;
  }
  button{
    border: none;
  }
  a{
    text-decoration: none
  }
`



function App() {
  return (
    <div >
      <GlobalStyle />
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
