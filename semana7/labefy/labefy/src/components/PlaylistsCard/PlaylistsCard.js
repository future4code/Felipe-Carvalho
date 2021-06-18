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


export default class PlaylistCard extends React.Component {
  render() {
       
      console.log(this.props.playlistLists.list)
       const componentesList = this.props.playlistLists.map((playlist) => {
        return (
            <p>{playlist.list.name}</p>
        )
      })
      
      
    return (
        <div>
            <h1>Playlist</h1>
            <PlaylistContainer > 
                <h2>Visualize as playlists</h2>
                
            </PlaylistContainer>
        </div>
      
    );
  }
}
