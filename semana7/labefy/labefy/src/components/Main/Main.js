import React from 'react';
import CreatePlaylistCard from '../CreatePlaylistCard/CreatePlaylistCard';
import PlaylistCard from '../PlaylistsCard/PlaylistsCard';
import styled from 'styled-components'
import axios from 'axios';

const MainContainer = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e3f5ff;
    width: 100%;
`

const MenuContainer = styled.div` 
  background-color: #ffff;
  border-right: 1px solid #9796c4;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const ButtonMenu = styled.button` 
  background-color: #ffff ;
  color: #68658d; 
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
        console.log(res.data.result.list)
        this.setState({playlistLists: res.data.result.list})
      })
      .catch((err) => {
        console.log(err.data)
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
  

  render() {

    let renderComponent;
    switch (this.state.render) {
      case "Playlists": 
        renderComponent = 
          <PlaylistCard 
            playlistLists = {this.state.playlistLists}
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
            <h2>Menu</h2>
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
