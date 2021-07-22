import React from 'react'
import styled from 'styled-components'
import { primaryColor, secundaryColor } from '../../constantes/colors'
import useForm from '../../hooks/useForm'

 
const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 37%;

`

const InputLogin = styled.input`
  background-color: ${secundaryColor};
  border: none;
  margin: 10px;
  height: 50px;
`
const ButtonLogin = styled.button`
  background-color: ${primaryColor};
  height: 50px;
  border-radius: 30px;
  margin-top: 30px;
  color: white;
  font-size: 18px;
  
`


const LoginForm = () => {
  const [form, onChange, clear] = useForm({email: "", password: ""})

  const onSubmitForm = (event) => {
    event.preventDefault()
  }

  return (
      <FormLogin onSubmit={onSubmitForm}>
        <InputLogin 
          name={"email"}
          value={form.email}
          onChange={onChange}
          type={'email'}
          placeholder='Informe seu email:'
          required
        />
        <InputLogin 
          name={"password"}
          value={form.password}
          onChange={onChange}
          type={'password'}
          placeholder='Informe sua senha:'
          required
        />
        <ButtonLogin
          type={"submit"}
          >
            Logar agora
          </ButtonLogin>
      </FormLogin>
  );
}

export default LoginForm;
