import React from 'react';
import styled from 'styled-components';

const PlaylistContainer = styled.div` 
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0.5em 0.8em 1em #3d5682;
    border-radius: 10px;
    width: 60%;
    height: 40%;
`
const PlaylisCardLabel = styled.label`
    padding: 10px;
`


export default class CreatePlaylistCard extends React.Component {
  render() {
    return (
        <>  
            <h3>Playlist</h3>
            <PlaylistContainer > 
                <h2>Crie sua Playlist</h2>
                <PlaylisCardLabel >
                    Escolha o nome da sua Playlist: 
                    <input 
                        value={this.props.inputPlaylist}
                        onChange = {this.props.onChangeInputPlaylist}
                    />
                </PlaylisCardLabel>
                <button 
                    onClick= {this.props.postPlaylist}
                >
                    Criar
                </button>
            </PlaylistContainer>
        </>
      
    );
  }
}
