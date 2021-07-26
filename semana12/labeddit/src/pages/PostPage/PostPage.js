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
import send from '../../assets/paper-plane.png'


const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CommentConatiner = styled.div`
  background-color: ${secundaryColor};
  border: 1px solid ${tertiaryColor};
  width: 50vw;
`

const InputComment = styled.input`
  background-color: ${secundaryColor};
  border: none;
  margin: 10px;
  height: 30px;
  min-width: 45vw;
  border-radius: 5px;
  text-align: center;  
  
`

const ImgImput = styled.img`
  padding-top: 15px ;
`

const ButtonSend = styled.button`
  background-color: ${secundaryColor};
`



const PostPage = ({feeds}) => {
  useProtectedPage()
  const [ newComment ,setNewComment] = useState("")
  const [ postDetails, setPostDetails ] = useState([])
  const [ selectedPost ,setSelectedPost] = useState([])
  const history = useHistory()
  const params = useParams()
  

  const onChangeComment = (event) => {
    setNewComment(event.target.value)
  }

  useEffect(()=> {
    if(!params.postId){
      history.push('/')
    }else if(!selectedPost){
      history.push('/')
    }
  }, [selectedPost])


  useEffect(() => {
    const currentPost = feeds.find((item) => {return item.id === params.postId})
    setSelectedPost(currentPost)
  },[])

  useEffect(() => {
    getComments()
  }, []) 

  const getComments = () => {
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
  }

  const handleCreateComment = () => {
    const axiosConfig ={
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
    const body = {
      body: newComment
    }

    axios
    .post(`${BASE_URL}/posts/${params.postId}/comments`, body, axiosConfig)
    .then(() => {
      setNewComment("")
      getComments()
    })
    .catch((err) => {
      alert("Não foi possivel comentar tente novamente")
      console.log(err)
    })
  }

  const handleCommentVote = (commentId, direction) => {
    const axiosConfig = {
      headers: {
          Authorization: localStorage.getItem("token")
      }
    }
    const body = {
      direction: direction
    }

    axios
    .post(`${BASE_URL}/comments/${commentId}/votes`, body, axiosConfig)
    .then(() => {
      getComments()
    })
    .catch(() => {
      alert('Nao foi pssivel votar no comentario tente novamente')
    })
  }

  const renderComments = postDetails.map((comments)=> {
    return(
      <CommentCard key={comments.id} comments={comments} handleCommentVote={handleCommentVote}/>
    )
  })


  return (
    <PostContainer >
      <h2>Post e comentários</h2>
      {selectedPost && <PostCard feed={selectedPost} hideComment/>}
      <CommentConatiner>
          <InputComment 
              placeholder='Comentar:'
              value={newComment}
              onChange={onChangeComment}
          ></InputComment>
          <ButtonSend onClick={handleCreateComment}><ImgImput src={send} alt="send" /></ButtonSend>
      </CommentConatiner>
      {renderComments}
    </PostContainer>
  );
}

export default PostPage;
