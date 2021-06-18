import React from 'react';
import CreatePlaylistCard from '../CreatePlaylistCard/CreatePlaylistCard';
import PlaylistCard from '../PlaylistsCard/PlaylistsCard';
import styled from 'styled-components'
import axios from 'axios';

const MainContainer = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;

`

const MenuContainer = styled.div` 
  border-right: 1px solid #80cad0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonMenu = styled.button` 
  background-color: #1c1543;
  color: white; 
  border: 1px solid #b5d7ce;
  height: 10%;
  width: 80%;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
`

export default class Main extends React.Component {
  state = {
    render: "Playlists",
    playlistLists:  []
  }

  componentDidMount() {
    this.getPlaylistList()
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
    axios.get(url, headers)
      .then((res) => {
        this.setState({playlistLists: res.data.result})
      })
      .catch((err) => {
        console.log(err.data)
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
          <CreatePlaylistCard />
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
