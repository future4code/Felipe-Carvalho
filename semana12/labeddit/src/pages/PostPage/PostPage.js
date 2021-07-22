import React from 'react'
import styled from 'styled-components'
import PostCard from '../../components/PostCard'
import CommentCard from '../../components/CommentCard'
import {  secundaryColor, tertiaryColor } from '../../constantes/colors'


const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InputComment = styled.input`
  background-color: ${secundaryColor};
  border: none;
  margin: 10px;
  height: 50px;
  width: 50%;
  border: 1px solid ${tertiaryColor};
  border-radius: 5px;
  text-align: center;  
`


const PostPage = () => {
  return (
    <PostContainer >
      <PostCard />
      <InputComment type='email' placeholder='Comentar:'/>
      <CommentCard />
    </PostContainer>
  );
}

export default PostPage;
