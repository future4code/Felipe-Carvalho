import React  from "react";
import styled from 'styled-components'
import { Header } from "../components/Header";
import { useHistory } from "react-router-dom";
import { useTripsList } from "../hooks/useTripsList";
import SpaceShip from '../img/rocket-launch.png'


const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`

const ContainerTitleButtons = styled.div`
  display: flex;
`

const ButtonsContainer = styled.div`
  margin-left: 200px;
`

const ButtonChange = styled.button`
  margin: 10px;
 `

const ListCardsContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
color: black;
border: 1px solid #619eff;
border-radius: 15px;
padding: 25px;
width: 600px;
height: 230px;
`

const ContainerDescriptions = styled.div`
    display: flex;
    align-items: center;
`

const SpaceShipImg = styled.img`
    margin-right: 5px;
    width: 18px;
    padding: 10px;
    
`


export const ListTripsPage = () => {
  const trips = useTripsList() 
  
  
  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  const goToApplicationFormPage = () => {
    history.push("/trips/application")
  }

  
    

  return (
    <div>
      <Header />
      <ListContainer>
        <ContainerTitleButtons> 
          <h1>Lista de viagens</h1>
          <ButtonsContainer>
            <ButtonChange onClick={goToHomePage}> voltar </ButtonChange>
            <ButtonChange onClick={goToApplicationFormPage}>Increver-se</ButtonChange>
          </ButtonsContainer>
        </ContainerTitleButtons>
        {trips.map((trip) => {
          return <div>
                  <ListCardsContainer key={trip.key}>
                    <ContainerDescriptions>
                        <SpaceShipImg src={SpaceShip} alt="" />
                        <p><b>Nome:  </b>{trip.name}</p>
                    </ContainerDescriptions>
                    <ContainerDescriptions>  
                      <SpaceShipImg src={SpaceShip} alt="" />
                      <p><b>Planeta:  </b>{trip.planet}</p> 
                    </ContainerDescriptions> 
                    <ContainerDescriptions>
                        <SpaceShipImg src={SpaceShip} alt="" />
                        <p><b>Data:  </b>{trip.date}</p>
                    </ContainerDescriptions>
                    <ContainerDescriptions>
                    <SpaceShipImg src={SpaceShip} alt="" />
                    <p><b>Descrição:  </b>{trip.description}</p>
                    </ContainerDescriptions>
                    <ContainerDescriptions>
                        <SpaceShipImg src={SpaceShip} alt="" />
                        <p><b>Duração em dias:  </b>{trip.durationInDays}</p>
                    </ContainerDescriptions>
                </ListCardsContainer>
              </div>
                  
      })}
        
      </ListContainer>
    </div>
  );
}

