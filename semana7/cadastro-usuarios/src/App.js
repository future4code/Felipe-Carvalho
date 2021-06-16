import React from 'react';
import {createGlobalStyle} from 'styled-components';
import axios from "axios";
import Register from './components/Register/Register';
import List from './components/List/List'

const GlobalStyle = createGlobalStyle`
 body{
   width: 100vw;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #323C61;
 } 
`
const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "felipe-souto-molina"
  }
}

class App extends React.Component {

  state = {
    listNames: [],
    inputName: "",
    inputEmail: ""
  }

  componentDidMount() {
    this.getList()
  }

  onChangeInputName = (event) => {
    this.setState({inputName: event.target.value})
  }

  onChangeInputEmail = ((event) => {
    this.setState({inputEmail: event.target.value})
  })

  getList = () => {
    axios.get(url, headers)
    .then((res) => {
      this.setState({listNames: res.data});
    })
    .catch((err) => {
      alert(err.response.data.message);
    }) 
  }

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
    axios.post(url, body, headers)
      .then(() => {
        alert("Cadastro  realizado com sucesso");
        this.setState({inputName: ""});
        this.setState({inputEmail: ""});
        this.getList()
        
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  render(){

    return (
      <div>
        <GlobalStyle /> 
        <Register 
          inputName = {this.state.inputName}
          onChangeInputName = {this.onChangeInputName}  
          inputEmail = {this.state.inputEmail}
          onChangeInputEmail = {this.onChangeInputEmail}
          createUser = {this.createUser}
        />
        <List listNames = {this.state.listNames}/>
        
      </div>
    );
  }  
}

export default App;
