import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

import LogoImagem from './img/pp.75fb10d7.jpeg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Felipe'}
          fotoUsuario={LogoImagem}
          fotoPost={'https://picsum.photos/200/148'}
        />
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/49'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Tanna'}
          fotoUsuario={'https://picsum.photos/50/48'}
          fotoPost={'https://picsum.photos/200/149'}
        />
      </MainContainer>
    );
  }
}

export default App;
