import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Do vizualize as playlists
const PlaylistContainer = styled.div` 
    background-color: #0f203e;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    box-shadow: 0.5em 0.8em 1em #3d5682;
    border-radius: 10px;
    padding: 15px;
    overflow-y: auto;
`

const PlaylistsMusicsContainer = styled.div` 
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10%;
` 

const ComponentsPlaylistDiv = styled.div` 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`

const ButtonPlaylist = styled.button` 
  padding: 25px 5px;
  background-color: #22bfbc;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 1.1em;
  box-shadow: 0.3em 0.3em 0.3em #3d5682;
  
  &:hover{
    background: #356DA4;
  }
`

//Do vizualize as musicas
const MusicContainer = styled.div` 
    background: #0f203e;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0.5em 0.8em 1em #3d5682;
    border-radius: 10px;
    width: 20em;
    max-height: 35em;
`

const TituloDelete = styled.div `
  display: flex;
  align-items: flex-start;
`



const ButtonMusics = styled.button` 

  background-color: #0f203e ;
  border: none;
  border-bottom: 1px solid #3d5682;
  color: white; 
  width: 80%;
  margin: 5px;
`
const ButtonExcluirPlaylist = styled.button` 
    background-color: #3d5682;
    color: red;
    height: 30px;
    width: 30px;
    font-size:1.2em;
&:hover{
  background-color:red;
  color: white;
}
`

export default class PlaylistCard extends React.Component {
  state = {
    playlistsName: "Escolha uma playlist ",
    playlists: [],
    playlistsId: [],
    playlistMusicsName: [],
    renderMusicsPlaylists: []
  }
  

  onChangePlaylistsName = (event) => {
    this.setState(
        {playlistsName: event.target.outerText}
      ) 
  }

  
  onChangePlaylistsId = (event) => {
    this.setState(
        {playlistsId: event.target.value}
      ) 
  }

  
  
  getMusicsPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    const headers = {
      headers: {
        Authorization: "felipe-sou-molina"
      }
    }
    axios
    .get(url, headers)
    .then((res) => {
      this.setState({ 
        playlistMusicsName: res.data.result.tracks, 
        renderMusicsPlaylists:this.state.playlistMusicsName.map((musics) => {
          return (
            <ButtonMusics 
              key={musics.id}
            >
              {musics.name} - {musics.artist}
            </ButtonMusics>
          )
        })
      })
    })
    .catch(() => {
      console.log("erro")
    })
  }

  

  renderMusics() {
    return this.state.renderMusicsPlaylists
    
  } 


  onClickButton = (event) => {
    this.onChangePlaylistsName(event);
    this.onChangePlaylistsId(event)
    this.getMusicsPlaylist(event.target.value)
  }



  render() {

    const forPlaylist = this.props.playlistLists.map((playlist) => {
      return playlist
    })
    const componentPlaylist = forPlaylist.map((playlist) => {
    return (       
        <ButtonPlaylist 
          key={playlist.id}
          onClick= {this.onClickButton}
          value= {playlist.id}
        >
            {playlist.name}
        </ButtonPlaylist>        
      )
    })

  
    

    return (
        <div>
          <h3>Playlists</h3>
          <PlaylistsMusicsContainer>
          <PlaylistContainer > 
              <h2>Visualize as playlists</h2>
              <ComponentsPlaylistDiv>
                {componentPlaylist}
              </ComponentsPlaylistDiv>
          </PlaylistContainer>
            <div>  
              <h3>Musicas</h3>
              <MusicContainer >   
                <TituloDelete>
                  <div>
                    <h2>{this.state.playlistsName} </h2>
                  </div>
                  <div>
                    <ButtonExcluirPlaylist 
                      onClick={() => this.props.deletePlaylist(this.state.playlistsId)} 
                    > 
                      X 
                    </ButtonExcluirPlaylist>
                  </div>
                </TituloDelete>
                {this.state.renderMusicsPlaylists}
                <button onClick={() => this.getMusicsPlaylist(this.state.playlistsId)}>Adcionar música</button>
              </MusicContainer>
            </ div> 
          </ PlaylistsMusicsContainer>
        </div>
      
    );
  }
}
