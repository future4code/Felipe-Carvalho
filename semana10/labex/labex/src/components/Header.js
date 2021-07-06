import React from "react";
import styled from 'styled-components'
import { useHistory } from "react-router";

const ContainerHeader = styled.div`
    display: grid;
    grid-template-columns: 10% 1fr 120px 120px 10%;
    height: 100px;
    align-items: center;
`

const LogoContainer = styled.div`
    grid-column: 2;
`

const BottonTravel = styled.div`
    grid-column: 3;
`

const BottonMenu = styled.button`
    background-color: #2b0065;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    height: 45px;
    width: 100px;
`


export const Header = () => {
    const history = useHistory();

    const goToPageLoginPage = () => {
        history.push("/login")
    }

    const goToListTripsPage = () => {
        history.push('/trips/list')
    }

  return (
    <ContainerHeader >
        <LogoContainer>
            <h1><a href="#">Labex</a> </h1>
        </LogoContainer>
        <BottonTravel>
            <BottonMenu onClick={goToListTripsPage}>Viagens</BottonMenu>
        </BottonTravel>
        <BottonMenu onClick={goToPageLoginPage}>Area Admin</BottonMenu>
    </ContainerHeader>
  );
}

