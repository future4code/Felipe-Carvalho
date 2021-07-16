import axios from "axios";
import React, { useState } from "react";
import styled from 'styled-components'
import {Header} from '../components/Header'
import { useForm } from '../hooks/useForm'


const ContainerForm = styled.div`
  background-color: white;
  width: 60%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
`

const Title = styled.h1`
  color: black;
`

const FormCreate = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
`

const InputContainer = styled.input`
  width: 300px;
  height: 30px;
  margin: 15px;
`



const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`



export const CreateTripPage = () => {
  const [form, onChangeInput] = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    duration: ''
  })

  /* const [date, setDate] = useState(new Date()) */

  const create = (event) => {
    event.preventDefault()
    console.log(form)

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.duration
  }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipecarvalho/trips', body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((res) => {
      console.log(res)
    })
  }

  

  return (
    <div>
      <Header />
      <ContainerForm >
        <div>
         <Title>Criar</Title>
        </div>
        <FormCreate onSubmit={create}>
          <InputContainer 
            placeholder="Nome" 
            type="text" 
            onChange={onChangeInput}
            name={'name'}
            value={form['name']}
          />
          <InputContainer 
            placeholder="Escolha um Planeta" 
            type="text" 
            onChange={onChangeInput}
            name={'planet'}
            value={form['planet']}
          />
          <InputContainer 
            placeholder="dd/mm/aaaa" 
            type="date" 
            onChange={onChangeInput}
            name={'date'}
            value={form['date']}
          />
          <InputContainer 
            placeholder="Descrição" 
            type="text" 
            onChange={onChangeInput}
            name={'description'}
            value={form['description']}
          />
          <InputContainer 
            placeholder="Duração em dias" 
            type="number" 
            onChange={onChangeInput}
            min={50}
            name={'duration'}
            value={form['duration']}
          />
          <ButtonContainer>
            <button>Criar</button>
          </ButtonContainer>     
        </FormCreate>
      </ContainerForm>
    </div>
  );
}

