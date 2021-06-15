import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Register from './components/Register/Register';
import axios from "axios";

const GlobalStyle = createGlobalStyle`
 body{
   width: 100vw;
   display: flex;
   align-items: center;
   justify-content: center;
 } 
`
const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "felipe-souto-molina"
  }
}

class App extends React.Component {

  componentDidMount() {
    this.getList()
  }

  getList = () => {
    axios.get(url, headers)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err.response.data)
    }) 
  }

  render(){
    return (
      <div>
        <GlobalStyle /> 
        <Register />
      </div>
    );
  }  
}

export default App;
