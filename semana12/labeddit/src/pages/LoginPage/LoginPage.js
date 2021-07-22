import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { primaryColor } from '../../constantes/colors'
import LoginForm from './LoginForm'
import {goToSignUp} from '../../routes/coordinates'

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

const ButtonRegister = styled.button`
  height: 50px;
  margin-top: 30px;
  color: ${primaryColor};
  font-size: 18px;
`

const LoginPage = () => {
  const history = useHistory()

  return (
    <LoginPageContainer>
      <DescriptionDiv>
        <TitleLogin>Login</TitleLogin>
        <p>Bem vindo! Por favor insira seu email e 
            senha para logar</p>
      </DescriptionDiv>
      <LoginForm />
      <ButtonRegister onClick={() => goToSignUp(history)}>Criar conta</ButtonRegister>
    </LoginPageContainer>
  );
}

export default LoginPage;
