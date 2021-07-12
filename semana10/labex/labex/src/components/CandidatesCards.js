import React from "react";
import styled from 'styled-components'
import Like from '../img/like.png'
import Dislike from '../img/dislike.png'
import axios from "axios";


const ListCardsContainer = styled.div`

display: flex;
flex-direction: column;

background-color: white;
color: black;
border: 1px solid #619eff;
border-radius: 15px;
padding: 25px;
width: 400px;
height: 250px;
margin: 5% ;
`

const CandidateCard = styled.div`
  display: flex;
`

const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ButtonCandidate = styled.button`
  background-color: white;
  color: black;
  margin-left: 40px;
`



export const CandidatesCards = (props) => {
  const decideCandidate = (approve) => {
    const body = {
      approve: approve
    }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipecarvalho/trips/${props.tripId}/candidates/${props.candidates.id}/decide`, body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    })
  }


  const aproveCandidate = () => {
    console.log('APROVA')
    decideCandidate(true)
  }

  const rejectCandidate = () => {
    console.log('REJECT')
    decideCandidate(false)
  }


  return (
    <ListCardsContainer>
      {props.candidates.map(candidate => {
        return (
        <CandidateCard key={candidate.id}>
          <h3>{candidate.name}</h3>
          <ContainerButton>
            <ButtonCandidate
              onClick={aproveCandidate}
            >
              <img src={Like} alt="" />
            </ButtonCandidate>
            <ButtonCandidate
              onClick={rejectCandidate}  
            >
              <img src={Dislike} alt="" />
            </ButtonCandidate>
          </ContainerButton>
        </CandidateCard>      
        )
      })}
    </ListCardsContainer>
  );
}

