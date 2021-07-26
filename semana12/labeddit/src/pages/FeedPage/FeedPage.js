import axios from 'axios'
import { animationControls } from 'framer-motion'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import PostCard from '../../components/PostCard'
import {  primaryColor, secundaryColor, tertiaryColor } from '../../constantes/colors'
import useProtectedPage from '../../hooks/useProtectedPage'
import { getFeed } from '../../services/posts'
import { BASE_URL } from '../../constantes/urls'
import send from '../../assets/paper-plane.png'


const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InputDiv = styled.div`
  display: flex;
  width: 80%;
`

const InputPost = styled.input`
  background-color: ${secundaryColor};
  border: none;
  margin: 10px;
  height: 30px;
  width: 45%;
  border: 1px solid ${tertiaryColor};
  border-radius: 5px;
  text-align: center;  
`




const FeedPage = ({feeds , setFeeds}) => {
  useProtectedPage()
  const [ isLoading, setIsloading ] = useState(false)
  const [ title, setTitle ] = useState('')
  const [ text, setText ] = useState('')

  useEffect(() => {
    getFeed(setFeeds, setIsloading)

  },[])

  const handleVotePost = (postId, direction) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    const body = {
      direction: direction
    }

    axios.post(`${BASE_URL}/posts/${postId}/votes`, body, axiosConfig)
    .then(() => {
      getFeed(setFeeds, setIsloading)
    })
    .catch(() =>{
      alert("Não foi possivel votar tente novamente")
    })
  }

  const handleCreatePost = () => {
    const axiosConfig = {
      headers: {
          Authorization: localStorage.getItem("token")
      }
    }
    const body = {
      title: title,
      body: text
    }
    setIsloading(true)
    axios
    .post(`${BASE_URL}/posts`, body, axiosConfig)
    .then((res) => {
      getFeed(setFeeds, setIsloading)
      setIsloading(false)
      alert(res.data)
    })
    .catch(() => {
      alert("Não foi pssivel criar o post tente novamente")
    })
  }


  const renderFeeds = feeds.map((feed)=> {
    return(
      <PostCard key={feed.id} feed={feed} handleVotePost={handleVotePost}/>
    )
  })

  return (
    <FeedContainer >
      <h2>Feed</h2>
      <InputDiv>
        <InputPost  
          placeholder='Titulo:'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <InputPost  
          placeholder='Criar seu post:'
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <button
          onClick={handleCreatePost}
        >
          <img src={send} alt="send" />
        </button>
      </InputDiv>
      {isLoading && <div>carregando</div>}
      {renderFeeds}
    </FeedContainer>
  );
}

export default FeedPage;
