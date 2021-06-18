import React from 'react';
import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
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

 h2 {
   color: #829CFA;
 }

 button {
   background-color: #829CFA;
   color: #64697A;
   padding: 5px;
   margin: 5px;
   border-radius: 30px;
   &:hover {
     background-color: #8E95AD;
     color: #64697A;
   } 
 }
`

const ButtonApp = styled.button`

  margin: 75px;
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
    inputEmail: "",
    render: true,
    stringButton: "Clique para ver usuários" 
  }

  componentDidMount() {
    this.getList()
    console.log(this.state.listNames)
  }

  onChangeInputName = (event) => {
    this.setState({inputName: event.target.value})
  }

  onChangeInputEmail = ((event) => {
    this.setState({inputEmail: event.target.value})
  })

  changeRender = () => {
    this.setState({render: !this.state.render})
    if(this.state.render === true){
      this.setState({stringButton: "Clique para ir para janela de cadastros"})
    }else{
      this.setState({stringButton: "Clique para ver usuários"})
    }
  }

 

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

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    const headers = {
        headers: {
            Authorization: "felipe-souto-molina"
          }
    }
    axios.delete(url, headers)
     .then((res) => {
       alert("Deletado com sucesso");
       this.getList();
     })
     .catch((err) => {
       alert(err.event.data.message)
     })
 }

  render(){

    let renderComponent 
    if(this.state.render ) {
      renderComponent = 
      <Register 
        inputName = {this.state.inputName}
        onChangeInputName = {this.onChangeInputName}  
        inputEmail = {this.state.inputEmail}
        onChangeInputEmail = {this.onChangeInputEmail}
        createUser = {this.createUser}
      />
    }else{
      renderComponent = 
        <List 
          listNames = {this.state.listNames}
          deleteUser = {this.deleteUser}
        />
    }
      
    

    return (
      <div>
        <GlobalStyle /> 
        <ButtonApp 
          onClick={this.changeRender}
        >
          {this.state.stringButton}
        </ButtonApp>
        {renderComponent}
      </div>
    );
  }  
}

export default App;
