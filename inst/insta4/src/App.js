import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

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
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Ketryn'}
          fotoUsuario={'https://picsum.photos/200/300?random=1'}
          fotoPost={'https://picsum.photos/200/300.jpg'}
        />
        <Post
          nomeUsuario={'Rodrigo'}
          fotoUsuario={'https://picsum.photos/200/300?random=2'}
          fotoPost={'https://picsum.photos/id/237/200/300'}
        />
        <Post
          nomeUsuario={'Maria'}
          fotoUsuario={'https://picsum.photos/200/300?random=3'}
          fotoPost={'https://picsum.photos/200/300.webp'}
        />
      </MainContainer>
    );
  }
}

export default App;
