import React from "react";
import styled from 'styled-components'

const ContainerHeader = styled.div`
    display: grid;
    grid-template-columns: 10% 1fr 10% 10% 10%;
    height: 70px;
    align-items: center;
`
const LogoContainer = styled.div`
    grid-column: 2;
`
const BottonTravel = styled.div`
    grid-column: 3;
`

export const Header = () => {
  return (
    <ContainerHeader >
        <LogoContainer>
            <h1><a href="#">Labex</a> </h1>
        </LogoContainer>
        <BottonTravel>
            <button><a href="#">Viagens</a> </button>
        </BottonTravel>
        <div>
            <button><a href="#">Postar uma viagem</a> </button>
        </div>
    </ContainerHeader>
  );
}

