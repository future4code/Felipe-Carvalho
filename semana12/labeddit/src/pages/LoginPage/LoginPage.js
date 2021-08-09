import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { primaryColor } from '../../constantes/colors'
import LoginForm from './LoginForm'
import {goToSignUp} from '../../routes/coordinates'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import reditinit from '../../assets/redditinit.jpg'

const LoginPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
`

const LoginFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const DescriptionDiv = styled.div`
  margin-top: 5%;
  width: 35%;
  @media(max-width: 600px) {
    width: 60%;
  }
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

const ImgStyled = styled.img`
width: 100%;
height: 88vh;
@media(max-width: 600px) {
  margin-top: 100px;
  height: 30vh;
}
`

const LoginPage = () => {
  useUnprotectedPage()
  const history = useHistory()

  return (
    <LoginPageContainer>
      <LoginFormContainer>
        <DescriptionDiv>
          <TitleLogin>Login</TitleLogin>
          <p>Bem vindo! Por favor insira seu email e 
              senha para logar</p>
        </DescriptionDiv>
        <LoginForm />
        <ButtonRegister onClick={() => goToSignUp(history)}>Criar conta</ButtonRegister>
      </LoginFormContainer>
      <div>
        <ImgStyled src={reditinit} alt="reddit" />
      </div>
    </LoginPageContainer>
  );
}

export default LoginPage;
