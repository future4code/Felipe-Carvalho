import React, { useState } from "react";
import styled from 'styled-components'
import { Header } from "../components/Header";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 25%;
  margin-top: 5%;
  background-color: white;
  color: black;
  width: 50%;
  height:300px;
  border-radius: 15px;
`

const InputLogin = styled.input`
  width: 80%;
  border-radius:5px;
  height: 30px;
  margin-top: 20px ;
`

const ButtonLogin = styled.button`
  margin: 20px;
  width: 60px;
  height: 50px;
  border-radius: 50%;
  background-color: #619eff;
  color: white;
`


export const LoginPage = () => {
  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitLogin = () => {
    const body = {
      email: email, 
      password: password
    }
    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipecarvalho/login", body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      history.push('/admin/trips/list')
    })
    .catch((err) => {
      alert("Ocorreu um erro tente de novo")
    })
  }  



  return (
    <div>
        <Header />
        <ContainerLogin>
          <h1>Login</h1>
          <InputLogin 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={onChangeEmail}
          />
          <InputLogin 
            type="password" 
            placeholder="Senha"
            value={password}
            onChange={onChangePassword}
          />
          <div>
            <ButtonLogin onClick={goToHomePage}>Voltar</ButtonLogin>
            <ButtonLogin onClick={onSubmitLogin}>Entrar</ButtonLogin>
          </div>
          
        </ContainerLogin>
    </div>
  );
}

