import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { primaryColor, secundaryColor } from '../../constantes/colors'
import useForm from '../../hooks/useForm'
import { login } from '../../services/user'

 
const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 37%;
  @media(max-width: 600px) {
    width: 60%;
  }
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
  const history = useHistory()

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, history)
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
