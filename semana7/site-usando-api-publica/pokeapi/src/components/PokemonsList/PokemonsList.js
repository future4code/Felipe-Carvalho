import axios from 'axios';
import React from 'react';
import styled from 'styled-components';


const SelecaoPokemon=  styled.option` 
  background-color: #ff0020;
` 
  
const OptionPokemon=  styled.select` 
  background-color: #ff0020;
  border: 2px solid #ff6598;
  border-radius: 30px;
  font-size: 18px;
  color: white;
`

const ImgPokemon = styled.img ` 
  width: 200px;
  height: 250px;
`

export default class PokemonsList extends React.Component {
  state = {
    picture: "",
    type: ""
  }
    
  getPokemonPicture = async (event) => {
    const url = event.target.value;
    const response = await axios.get(`${url}`) 
    this.setState({picture: response.data.sprites.other.dream_world.front_default})
    this.setState({type: response.data.types})
    }

  render(){   
    const pokeList = this.props.pokemons.map((pokemon) => {
      return(
          <SelecaoPokemon key={pokemon.name} value={pokemon.url}>
            {pokemon.name}
          </SelecaoPokemon>
      ) 
    })
    
    return (
      <div >
        <OptionPokemon onChange={this.getPokemonPicture}>{pokeList}</OptionPokemon>   
        <ImgPokemon src={this.state.picture} alt="" />  
      </div>
    );
  }
}

 
