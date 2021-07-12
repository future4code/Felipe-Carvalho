import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import useProtectedPage from '../hooks/UseProtectedPage'
import {TripInfoCard}  from '../components/TripInfoCard'
import { CandidatesCards } from "../components/CandidatesCards";
import styled from "styled-components";

const ContainerTrips = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const TripDetailsPage = () => {
  
  const [ trip, setTrip] = useState()
  const params = useParams()

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipecarvalho/trip/${params.tripId}`, {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      setTrip(res.data.trip)
      
    })
    .catch((err) => {
      alert("Erro:", err.response.data.message )
    })
  },[])

  


  return (
    <div>
        <Header />
        <ContainerTrips>
        {trip ?
        <>
          <div>
            <h1>Detalhes da Viagem</h1>
            <TripInfoCard info={trip}/>
          </div>
           <div>
            
            <h1>Candidatos</h1>
            <CandidatesCards candidates={trip.candidates} tripId={params.tripId}/>
          </div>
        </>  
           : 
        <div>Carregando</div>
          }
          
        </ContainerTrips>    
    </div>
  );
}

