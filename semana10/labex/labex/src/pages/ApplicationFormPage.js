import axios from "axios";
import React from "react";
import styled from 'styled-components'
import {Header} from '../components/Header'
import {useForm} from "../hooks/useForm";
import { useTripsList } from "../hooks/useTripsList";


const ContainerForm = styled.div`
  background-color: white;
  width: 60%;
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
  padding: 5px;
`

const InputContainer = styled.input`
  width: 300px;
  height: 30px;
  margin: 15px;
`

const SelectContainer =  styled.select`
  width: 300px;
  height: 30px;
  margin: 15px;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
`



export const ApplicationFormPage = () => {
  const trips = useTripsList()
  const [form, onChangeInput] = useForm({
    name: '',
    age: 18,
    applicationText: '',
    profession: '',
    country: '',
    trip: ""
  })

  

  const onSubmitApplication = (event) => {
    event.preventDefault()
    console.log(form)

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipecarvalho/trips/${form.trip.id}/apply`, body)
  }

  const tripsMaped = trips.map((trip) => {
    return <option value={trip.id} key={trip.id}>{trip.name}</option>})


  return (
    <div>
      <Header />
      <ContainerForm >
        <div>
         <Title>Aplicar para viagem</Title>
        </div>
        <FormCreate onSubmit={onSubmitApplication}>
          <LabelContainer > 
            Nome do candidato:
            <InputContainer 
              type="text" 
              onChange={onChangeInput}
              value={form["name"]}
              name={'name'}
            />
          </LabelContainer>
          <LabelContainer>
            Idade:
            <InputContainer 
              type="number"
              onChange={onChangeInput}
              value={form["age"]}
              name={'age'}
              min={18}
            />
          </LabelContainer>
          <LabelContainer>
            Explique por que você é um bom candidato:
            <InputContainer 
              type="text" 
              onChange={onChangeInput}
              value={form["applicationText"]}
              name={'applicationText'}
            />
          </LabelContainer>
          <LabelContainer>
            Profissão
            <InputContainer 
              type="text" 
              onChange={onChangeInput}
              value={form["profession"]}
              name={'profession'}
            />
          </LabelContainer>
          <LabelContainer>
            Informe o país:
            <SelectContainer 
              onChange={onChangeInput}
              value={form['country']}
              name={'country'}
            >
              <option value="" disabled selected></option>  
              <option>Brasil</option>
              <option>EUA</option>
              <option>Inglaterra</option>
            </SelectContainer> 
          </LabelContainer>
          <LabelContainer >
            Selecione a viajem
          </LabelContainer>
            
            <SelectContainer 
              id="select-viagens"
              onChange={onChangeInput}
              value={form['trip']}
              name={'trip'}
            >
              <option value="" disabled selected></option>
              {tripsMaped}
            </SelectContainer>
          
          <ButtonContainer>
            <button type={'submit'}>Inscrever-se</button>
          </ButtonContainer>     
        </FormCreate>
      </ContainerForm>
    </div>
  );
}

/* 

*/