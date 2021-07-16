import React from "react";
import astronautImg from '../img/astronautaviagem.png'
import styled from "styled-components";

const HomePageContainer = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    margin-left: 300px;
`

const ImageAstronaut = styled.img`
    width: 50%;
`


export const HomePage = () => {
  return (  
    <HomePageContainer >
        <div>
            <h1>Labex</h1>
            <p>Sua viagem espacial</p>
        </div>
        <div>
            <ImageAstronaut src={astronautImg} alt="AstronautaViagem" />
        </div>
    </HomePageContainer>
  );
}

