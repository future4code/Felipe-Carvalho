import React , { useState, useEffect } from "react";
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';
import PeopleMatches from "./container/PeopleMatches/PeopleMatches";
import LogoMatch from "./img/tinder.png"
import Seta from "./img/seta-esquerda.png"
import ListMatches from "./container/ListMatches/ListMatches";
import axios from 'axios'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    color: white;
  }

  h2{
    color: white;
  }
`
const TitleGreen = styled.span`
  color: #37aa9a;
 `

const Container = styled.div` 
  background-color: silver;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
` 

const MainContainer = styled.div`
    background-color: #1c0629;
    width: 350px;
    height: 500px;
    border-radius: 30px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 12%;
  `

const IconImage = styled.img`
  width: 70%;
`

const BottonMatch = styled.button`
  background-color: #1c0629;
  margin-left: 50px;
  background-color: #260941;
  width: 40px;
  height: 40px;
  border: 1px solid #d500e3;
  border-radius: 50%;
  &:hover{
    background-color: #FC4CA7;
  }
`

const ClearContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 

 `

const ButtonClear = styled.button`
  background-color: #2e0042;
  border-radius: 10px;
  padding: 5px;
  margin: 2px;
  border: none ;
 `


const App = () => {
const [ page, setPage ] = useState("PeopleMatches");
const [ people, setPeople ] = useState([])


const changePage = () => {
  setPage("ListMatches")
}

const changePagePeople = () => {
  setPage("PeopleMatches")
}

const RenderPage = () => {
  switch (page) {
    case "PeopleMatches":
      return (
        <PeopleMatches 
          people = {people} 
          choosePeople={choosePeople}
        />
      );
    case "ListMatches":
      return (
        <ListMatches/>
      );
    default:
      return alert("Página não encontrada!")
  }
}

const renderIcon = () => {
  switch (page) {
    case "PeopleMatches":
      return (
        <IconImage 
          src={LogoMatch} 
          alt="logomatch"
          onClick={changePage}  
        /> 
      );
    case "ListMatches":
      return (
        <IconImage 
          src={Seta} 
          alt="logomatch"
          onClick={changePagePeople}  
        /> 
      );
    default:
      return alert("Página não encontrada!")
  }
}



const getPeople = () => {
  axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe/person")
  .then((res) => {
    setPeople(res.data.profile)
    console.log(people)
  })
  .catch((err) => {
    console.log("deu ruim")
  })
}

useEffect(() => {
  getPeople()
}, [])

const choosePeople = (choose) =>{
  const body = {
    id: people.id,
    choice: choose
  }

  axios
  .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe/choose-person", body)
  .then(() =>{
    getPeople()
  })
  .catch((err) =>{
    alert(err.res)
  })
}


   

const CLear = () => {
  axios
  .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe/clear")
  .then(() => {
    alert("Seus matches foram limpos")

  })
  .catch((err) => {
    alert(err.res)
  })
}


  return (
    <div>
      <GlobalStyle /> 
      <Container >
        <MainContainer>
          <Header>
            <h2>Astro<TitleGreen>Match</TitleGreen></h2>
            <BottonMatch>
              {renderIcon()}
            </BottonMatch>
          </Header>  
          {RenderPage()}   
          <ClearContainer>
          <ButtonClear
            onClick={CLear}
          >
             Limpar matches
          </ButtonClear>
        </ClearContainer>  
        </MainContainer>    
        
      </Container>
    </div>  
  );
}

export default App;
