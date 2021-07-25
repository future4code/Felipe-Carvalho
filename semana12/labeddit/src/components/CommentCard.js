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

const ButtonContainer = styled.div`

`


const PostCard = (props) => {
  console.log(props)
  return (
    <PostContainer>
      <h3>{props.comments.username}</h3>
      <ParagraphContainer>
        <p>
        {props.comments.body}
        </p>
      </ParagraphContainer>   
      <ButtonContainer>
          <button>Like</button>
          <button>Dislike</button>
      </ButtonContainer>   
    </PostContainer>
  );
}

export default PostCard;
