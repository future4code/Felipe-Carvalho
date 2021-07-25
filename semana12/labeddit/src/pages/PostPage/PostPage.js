import React from 'react'
import styled from 'styled-components'
import { BASE_URL } from '../../constantes/urls'
import PostCard from '../../components/PostCard'
import CommentCard from '../../components/CommentCard'
import {  secundaryColor, tertiaryColor } from '../../constantes/colors'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


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
  useProtectedPage()
  const [ postDetails, setPostDetails ] = useState([]);
  const history = useHistory()
  const params = useParams()

  useEffect(()=> {
    if(!params.postId){
      history.push('/')
    }
  }, [])

  useEffect(() => {
    const axiosConfig = {
      headers: {
          Authorization: localStorage.getItem("token")
      }
    }
    axios
    .get(`${BASE_URL}/posts/${params.postId}/comments`, axiosConfig)
    .then((res) => {
      setPostDetails(res.data)
    })
    .catch((err) => {
      console.log(err.data)
    })
  }, []) 

  const renderComments = postDetails.map((comments)=> {
    return(
      <CommentCard key={comments.id} comments={comments}/>
    )
  })

  return (
    <PostContainer >
      
      {/* <PostCard /> */}
      <InputComment type='email' placeholder='Comentar:'/>
      {renderComments}
    </PostContainer>
  );
}

export default PostPage;
