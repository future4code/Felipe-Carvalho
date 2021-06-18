import React from 'react';
import styled from 'styled-components';

const PlaylistContainer = styled.div` 
    background-color: #80cad0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #3d5682;
    border-radius: 10px;
    width: 60%;
    height: 40%;
    color: white;
    
    h2{
        color:white
    }
`
const PlaylisCardLabel = styled.label`
    padding: 10px;
`


export default class CreatePlaylistCard extends React.Component {
  render() {
    return (
        <>
            <h1>Playlist</h1>
            <PlaylistContainer > 
                <h2>Crie sua Playlist</h2>
                <PlaylisCardLabel >
                    Escolha o nome da sua Playlist: 
                    <input type="text" />
                </PlaylisCardLabel>
                <button>Criar</button>
            </PlaylistContainer>
        </>
      
    );
  }
}
