import React from "react";
import styled from "styled-components"
import CardMatchs from "../CardMatchs/CardMatchs";

const ContainerListMatch = styled.div`
    overflow-y: auto;
    height: 84%;
    width: 97%;
    padding-left: 10px;
    
`

const ListMatchs = (props) => {
    return(
        <ContainerListMatch>
            <CardMatchs matches = {props.matches}/>
        </ContainerListMatch>
    )

}

export default ListMatchs;