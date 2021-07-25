import React from 'react'
import styled from 'styled-components'
import { primaryColor } from '../../constantes/colors'
import RegisterForm from './RegisterForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { useHistory } from 'react-router-dom'
import { goToLogin } from '../../routes/coordinates'

const RegisterPageContainer = styled.div`
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


const ButtonBack = styled.button`
  height: 50px;
  margin-top: 30px;
  color: ${primaryColor};
  font-size: 18px;
`

const RegisterPage = () => {
  useUnprotectedPage()
  const history = useHistory()

  return (
    <RegisterPageContainer>
    <DescriptionDiv>
      <TitleLogin>Registre-se</TitleLogin>
    </DescriptionDiv>
    <RegisterForm />
    <ButtonBack onClick={() => goToLogin(history)}>Voltar</ButtonBack>
  </RegisterPageContainer>
  );
}

export default RegisterPage;
