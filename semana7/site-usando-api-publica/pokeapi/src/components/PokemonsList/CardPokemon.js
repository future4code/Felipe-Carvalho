import React from 'react';
import PokemonsList from "./PokemonsList";

export default class CardPokemon extends React.Component {
    
  render(){
    

    return (
      <div >
        <PokemonsList 
          pokemons = { this.props.pokemons }
        />
      </div>
    );
  }
}

 
