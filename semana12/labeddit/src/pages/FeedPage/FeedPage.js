import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import PostCard from '../../components/PostCard'
import {  secundaryColor, tertiaryColor } from '../../constantes/colors'
import useProtectedPage from '../../hooks/useProtectedPage'
import { getFeed } from '../../services/posts'

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InputPost = styled.input`
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
  useProtectedPage()
  const [ feeds, setFeeds] = useState([])
  const [ isLoading, setIsloading ] = useState(false)

  useEffect(() => {
    getFeed(setFeeds, setIsloading)

  },[])
  console.log(feeds)

  const renderFeeds = feeds.map((feed)=> {
    return(
      <PostCard key={feed.id} feed={feed}/>
    )
  })

  return (
    <FeedContainer >
      <InputPost type='email' placeholder='Criar seu post:'/>
      {isLoading && <div>carregando</div>}
      {renderFeeds}
    </FeedContainer>
  );
}

export default FeedPage;
