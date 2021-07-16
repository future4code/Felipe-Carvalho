import React from "react";
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

const ContainerHeader = styled.div`
    display: grid;
    grid-template-columns: 10% 120px 1fr 120px 120px 120px 10%;
    height: 100px;
    align-items: center;
`

const LogoContainer = styled.div`
    grid-column: 2;
`

const ButtonHome = styled.div`
    grid-column: 4;
`


export const Header = () => {


  return (
    <ContainerHeader >
        <LogoContainer>
           <a href='/'><h1>Labex</h1></a>
        </LogoContainer>
        <ButtonHome>
        <NavLink to="/"><button>Home</button></NavLink>
        </ButtonHome>
        <NavLink to="/trips/list"><button >Viagens</button></NavLink>
        <NavLink to="/admin/trips/list"><button >Area Admin</button></NavLink> 
    </ContainerHeader>
  );
}

