import React from "react";
import styled from 'styled-components'
import SpaceShip from '../img/rocket-launch.png'

const ListCardsContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
color: black;
border: 1px solid #619eff;
border-radius: 15px;
padding: 25px;
width: 400px;
height: 250px;
margin: 5% ;
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

export const TripInfoCard = (props) => {
    const {name, planet, description, date, durationInDays} = props.info

  return (
    <ListCardsContainer>
        <ContainerDescriptions>
            <SpaceShipImg src={SpaceShip} alt="" />
            <p><b>Nome:  </b>{name}</p>
        </ContainerDescriptions>
        <ContainerDescriptions>  
           <SpaceShipImg src={SpaceShip} alt="" />
           <p><b>Planeta:  </b>{planet}</p> 
        </ContainerDescriptions> 
        <ContainerDescriptions>
            <SpaceShipImg src={SpaceShip} alt="" />
             <p><b>Data:  </b>{date}</p>
        </ContainerDescriptions>
        <ContainerDescriptions>
        <SpaceShipImg src={SpaceShip} alt="" />
        <p><b>Descrição:  </b>{description}</p>
        </ContainerDescriptions>
        <ContainerDescriptions>
            <SpaceShipImg src={SpaceShip} alt="" />
            <p><b>Duração em dias:  </b>{durationInDays}</p>
        </ContainerDescriptions>
    </ListCardsContainer>
  );
}

