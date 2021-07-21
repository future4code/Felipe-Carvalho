import React from 'react'
import styled from 'styled-components'
import { primaryColor, secundaryColor, tertiaryColor } from '../../constantes/colors'

const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const DescriptionDiv = styled.div`
  margin-top: 5%;
  width: 35%;
` 
const TitleLogin = styled.h1`
  margin-bottom: 20px;
`

const InputLogin = styled.input`
  background-color: ${secundaryColor};
  border: none;
  margin: 10px;
  height: 50px;
  width: 35%;
`
const ButtonLogin = styled.button`
  background-color: ${primaryColor};
  width: 35%;
  height: 50px;
  border-radius: 30px;
  margin-top: 30px;
  color: white;
  font-size: 18px;
`
const ButtonRegister = styled.button`
  height: 50px;
  margin-top: 30px;
  color: ${primaryColor};
  font-size: 18px;
`

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <DescriptionDiv>
        <TitleLogin>Login</TitleLogin>
        <p>Bem vindo! Por favor insira seu email e 
            senha para logar</p>
      </DescriptionDiv>
        <InputLogin type='email' placeholder='Informe seu email:'/>
        <InputLogin type='password' placeholder='Informe sua senha:'/>
        <ButtonLogin>Logar agora</ButtonLogin>
        <ButtonRegister>Criar conta</ButtonRegister>
    </LoginPageContainer>
  );
}

export default LoginPage;
