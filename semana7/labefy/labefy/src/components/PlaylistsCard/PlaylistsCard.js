import React from 'react';
import styled from 'styled-components';

const PlaylistContainer = styled.div` 
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0.5em 0.8em 1em #3d5682;
    border-radius: 10px;
    padding: 15px;
   
`
const ComponentsPlaylistDiv = styled.div` 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`

const ButtonPlaylist = styled.button` 
  width: 7em;
  height: 7em;
  background-color: #22bfbc;
  border: none;
  border-radius: 30px;
  color: white;
  box-shadow: 0.3em 0.3em 0.3em #3d5682;
  
  &:hover{
    background: #356DA4;
  }
`


export default class PlaylistCard extends React.Component {
  render() {
       
       const componentPlaylist = this.props.playlistLists.map((playlist) => {
        return (         
            <ButtonPlaylist key={playlist.id}>{playlist.name}</ButtonPlaylist>          
        )
      })
      
      
    return (
        <div>
            <h3>Playlist</h3>
            <PlaylistContainer > 
                <h2>Visualize as playlists</h2>
                <ComponentsPlaylistDiv>
                  {componentPlaylist}
                </ComponentsPlaylistDiv>
            </PlaylistContainer>
        </div>
      
    );
  }
}
