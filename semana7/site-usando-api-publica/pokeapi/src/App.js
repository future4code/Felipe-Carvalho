import React from 'react';
import axios from 'axios';
import CardPokemon from './components/PokemonsList/CardPokemon'
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'


const GlobalStyle = createGlobalStyle `
  body{
      background: #354a4d;
    }
    h1{
      color: #f9de00;
      font-size: 48px;
    }
  
`
const MainContainer = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
`  

export default class App extends React.Component {
  state = {
    pokemons: [],
    
  }

  componentDidMount() {
    this.getPokemonApi()
  }

  getPokemonApi = async () => {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
      )
      this.setState({pokemons: response.data.results})
  }

  
  render(){
    
    return (
      <MainContainer >
        <GlobalStyle />
        <h1>Pokemons</h1>
        <br />
        <CardPokemon 
          pokemons = { this.state.pokemons }
        />
      </MainContainer>
    );
  }
}

 
