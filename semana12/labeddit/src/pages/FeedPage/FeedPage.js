import React from 'react'
import styled from 'styled-components'
import PostCard from '../../components/PostCard'
import {  secundaryColor, tertiaryColor } from '../../constantes/colors'


const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InputLogin = styled.input`
  background-color: ${secundaryColor};
  border: none;
  margin: 10px;
  height: 50px;
  width: 50%;
  border: 1px solid ${tertiaryColor};
  border-radius: 5px;
  text-align: center;  
`


const FeedPage = () => {
  return (
    <FeedContainer >
      <InputLogin type='email' placeholder='Criar seu post:'/>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </FeedContainer>
  );
}

export default FeedPage;
