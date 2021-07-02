import React,  {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';

const ContainerCard = styled.button`
    display: flex;
    align-items: center;
    padding: 20px;
    width: 100%;
    background-color: #1c0629;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: #5E3575;
    }
`

const ImagemMatch = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 20px;
    padding: 1px;
    border: 3px solid #d7005c;
    margin-right: 25px;
`

const CardMatchs = () => {
    const [ matches, setMatches ] = useState([])

    const getMatches = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe/matches")
        .then((res)=>{
          setMatches(res.data.matches)
        })
        .catch((err) => {
            alert(err.res)
        })
    }

    useEffect(() => {
        getMatches()
    },[]) 
    

    const renderCards = matches.map((match) => {
        return(
            <ContainerCard key={match.id}>
                <ImagemMatch src={match.photo} alt="Imagem pessoa" />
                <p>{match.name}</p>
            </ContainerCard>
        )
    })

    return(
        <div>
            {renderCards}
        </div>
    )

}

export default CardMatchs;