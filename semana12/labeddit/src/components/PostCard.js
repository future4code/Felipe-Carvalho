import React from 'react'
import styled from 'styled-components'
import {  secundaryColor, tertiaryColor } from '../constantes/colors'




const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background-color: ${secundaryColor};
  width: 50%;
  margin: 15px;
  transition: 0.5s;
  &:hover{
    border: 1px solid ${tertiaryColor};
  }
`

const ParagraphContainer = styled.div`
  width: 80%;
  margin-top: 5px;
  margin-bottom: 5px;
`

const ButtonContainer = styled.button`

`


const PostCard = () => {
  return (
    <PostContainer>
      <h3>Nome do usuario</h3>
      <ParagraphContainer>
        <p>
        is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a
        </p>
      </ParagraphContainer>   
      <ButtonContainer>
          <button>Comentario</button>
          <button>Like</button>
          <button>Dislike</button>
      </ButtonContainer>   
    </PostContainer>
  );
}

export default PostCard;
