import React from "react";
import styled from "styled-components"
import CardMatches from "../CardMatches/CardMatches";

const ContainerListMatch = styled.div`
    overflow-y: auto;
    height: 80%;
    width: 97%;
    padding-left: 10px;
    
`

const ListMatches = (props) => {
    return(
        <ContainerListMatch>
            <CardMatches matches = {props.matches}/>
        </ContainerListMatch>
    )

}

export default ListMatches;