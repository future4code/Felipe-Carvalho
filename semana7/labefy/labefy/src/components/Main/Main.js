import React from 'react';
import CreatePlaylistCard from '../CreatePlaylistCard/CreatePlaylistCard';
import PlaylistCard from '../PlaylistsCard/PlaylistsCard';
import styled from 'styled-components'
import axios from 'axios';

const MainContainer = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0a0b1b;
    width: 100%;
`

const MenuContainer = styled.div` 
  background-color: #0a0b1b;
  border-right: 1px solid #6fa8d6;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`



const ButtonMenu = styled.button` 
  background-color: #0a0b1b ;
  color: #6fa8d6; 
  border: none;
  height: 10%;
  width: 80%;
  border-radius: 10px;
  margin: 5px;
`

export default class Main extends React.Component {
  state = {
    render: "Playlists",
    playlistLists:  [],
    inputPlaylist: ""
  }

  componentDidMount() {
    this.getPlaylistList()
  }

  onChangeInputPlaylist = (event) => {
    this.setState({inputPlaylist: event.target.value})
  }

  changeRender = (event) => {
    this.setState({render: event.target.value})
    this.getPlaylistList()
  }

  getPlaylistList = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const headers = {
      headers: {
        Authorization: "felipe-sou-molina"
      }
    }
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({playlistLists: res.data.result.list})
      })
      .catch(() => {
        alert("erro")
      })
  }

  postPlaylist = () => {
    const body = {
      name: this.state.inputPlaylist
    };
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const headers = {
      headers: {
        Authorization: "felipe-sou-molina"
      }
    }
    axios
      .post(url, body, headers)
      .then(() => {
        alert("Playlist criada com sucesso")
        this.postPlaylist()
        this.setState({inputPlaylist: ""})
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }


  deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    const headers = {
      headers: {
        Authorization: "felipe-sou-molina"
      }
    }
    axios
    .delete(url, headers)
    .then((res) => {
      alert("Playlist Deletada com sucesso")
      this.getPlaylistList()
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  

  
  render() {

    let renderComponent;
    switch (this.state.render) {
      case "Playlists": 
        renderComponent = 
            <PlaylistCard 
              playlistLists = {this.state.playlistLists}
              deletePlaylist = {this.deletePlaylist}
            />      
        break;
      case "NewPlaylists":
        renderComponent = 
          <CreatePlaylistCard 
            postPlaylist = {this.postPlaylist}
            inputPlaylist = {this.state.inputPlaylist}
            onChangeInputPlaylist = {this.onChangeInputPlaylist}
          />
        break;
      default:
        <p>ocorreu um erro</p>
    }

    return (
      <>
        <MenuContainer >
            <h3>Playlists</h3>
            <ButtonMenu
              value= "Playlists"
              onClick= {this.changeRender}
            >
              Visualizar Playlists
            </ButtonMenu>
            <ButtonMenu
              value= "NewPlaylists"
              onClick= {this.changeRender}
            >
              Crie sua playlist
            </ButtonMenu>
        </MenuContainer>
        <MainContainer >
          {renderComponent}
          
        </MainContainer>
      </>
      
    );
  }
  
}
