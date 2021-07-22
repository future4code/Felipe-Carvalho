import React from 'react'
import styled from 'styled-components'
import { primaryColor, secundaryColor, tertiaryColor } from '../../constantes/colors'

const RegisterPageContainer = styled.div`
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
const ButtonRegister = styled.button`
  background-color: ${primaryColor};
  width: 35%;
  height: 50px;
  border-radius: 30px;
  margin-top: 30px;
  color: white;
  font-size: 18px;
`
const ButtonBack = styled.button`
  height: 50px;
  margin-top: 30px;
  color: ${primaryColor};
  font-size: 18px;
`

const RegisterPage = () => {
  return (
    <RegisterPageContainer>
    <DescriptionDiv>
      <TitleLogin>Registre-se</TitleLogin>
    </DescriptionDiv>
      <InputLogin type='text' placeholder='Informe seu nome:'/>
      <InputLogin type='email' placeholder='Informe seu email:'/>
      <InputLogin type='password' placeholder='Informe sua senha:'/>
      <ButtonRegister>Criar conta</ButtonRegister>
      <ButtonBack>Voltar</ButtonBack>
  </RegisterPageContainer>
  );
}

export default RegisterPage;
