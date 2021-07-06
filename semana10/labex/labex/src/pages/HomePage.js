import React from "react";
import astronautImg from '../img/astronautaviagem.png'
import styled from "styled-components";
import { useHistory } from 'react-router-dom'

const HomePageContainer = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    margin-left: 300px;
`

const ButtonsContainer = styled.div`
    display: flex;
    padding: 15px;
`

const ImageAstronaut = styled.img`
    width: 50%;
`

const ButtonTravel = styled.button`
    background-color: white;
    padding: 10px;
    margin: 15px;
    width: 100px;
    border:1px solid  white;
    transition: 0.5s;
    border-radius: 50%;
    height: 90px;
    color: #619eff;
    font-weight: bold;
    font-size: 18px;
    border: 4px solid #619eff;
    &:hover{
        background: #619eff;
        color: white;
        border: 1px solid white;

    }
 `




export const HomePage = () => {
    const history = useHistory();

    const goToPageLoginPage = () => {
        history.push("/login")
    }

    const goToListTripsPage = () => {
        history.push('/trips/list')
    }

  return (  
    <HomePageContainer >
        <div>             
            <h1>Labex</h1>
            <p>Sua viagem espacial com o melhor preço do universo!</p>
            <ButtonsContainer>
                <ButtonTravel onClick={goToListTripsPage}>Viagens</ButtonTravel>
                <ButtonTravel onClick={goToPageLoginPage}>Area Admin</ButtonTravel>
            </ButtonsContainer>
        </div>
        <div>
            <ImageAstronaut src={astronautImg} alt="AstronautaViagem" />
        </div>
    </HomePageContainer>
  );
}

