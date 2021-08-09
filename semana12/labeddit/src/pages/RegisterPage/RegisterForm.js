import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { primaryColor, secundaryColor,  } from '../../constantes/colors'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/user'


const FormRegister = styled.form`
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
const ButtonRegister = styled.button`
  background-color: ${primaryColor};
  height: 50px;
  border-radius: 30px;
  margin-top: 30px;
  color: white;
  font-size: 18px;
`


const RegisterForm = () => {
  const [form, onChange, clear] = useForm({username: '', email: '', password: ''})
  const history = useHistory()

  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(form)
    signUp(form, clear, history)
  }

  return (
    <FormRegister onSubmit={onSubmitForm}>
      <InputLogin 
        type='text' 
        placeholder='Informe seu nome:'
        name={'username'}
        value={form.username}
        onChange={onChange}
        required
      />
      <InputLogin 
        type='email' 
        placeholder='Informe seu email:'
        name={'email'}
        value={form.email}
        onChange={onChange}
        required
      />
      <InputLogin 
        type='password' 
        placeholder='Informe sua senha:'
        name={"password"}
        value={form.password}
        onChange={onChange}
        required
      />
      <ButtonRegister type={"submit"}>Criar conta</ButtonRegister>
    </FormRegister>
  );
}

export default RegisterForm;
