import React from "react";
import styled from 'styled-components'
import useProtectedPage from "../hooks/UseProtectedPage";
import { Header } from "../components/Header";
import { useHistory } from "react-router-dom";
import { useTripsList } from "../hooks/useTripsList";


const AdminHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const ButtonChange = styled.button`
margin: 10px;
`



const ListCardsContainer = styled.button`

display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
color: black;
border: 1px solid #619eff;
border-radius: 15px;
padding: 25px;
width: 400px;
&:hover{
  background-color: #619eff;
}
`

export const AdminHomePage = () => {
  const history = useHistory()
  const trips = useTripsList()

  useProtectedPage() 

  const goToCreateTripPage = () => {
    history.push("/admin/trips/create")
  }

  const goToTripsDetailsPage = (trips) => {
    history.push(`/admin/trips/${trips.id}`)
  }
 
  return (
    <div>
        <Header />
        <AdminHomeContainer>
          <h2>Painel Administrativo</h2>
          <div>
            <ButtonChange onClick={goToCreateTripPage}>Criar Viagem</ButtonChange>
          </div>
          {trips.map((trip) => {
          return <div>
                    <ListCardsContainer 
                      onClick={() => {goToTripsDetailsPage(trip)}}
                      key={trip.key}
                    >
                      <p><b>Viagem:  </b>{trip.name}</p>
                    </ListCardsContainer>
                  </div>
                  
      })}
        </AdminHomeContainer>
    </div>
  );
}

export default AdminHomePage;