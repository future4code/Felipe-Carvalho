import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {  secundaryColor } from '../constantes/colors'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import acess from '../assets/entrar.png'



const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background-color: ${secundaryColor};
  width: 50%;
  margin: 15px;
`

const ParagraphContainer = styled.div`
  width: 80%;
  margin-top: 5px;
  margin-bottom: 5px;
`

const ButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
`
const LikeButton = styled.button`
  margin-right: 15px;
  margin-bottom: 5px;
  background-color: transparent;
`

const CommentButton = styled.button`
  margin-right: 15px;
  margin-bottom: 5px;
  background-color: transparent;
`

const PostCard = (props) => {
  const history = useHistory()

  const handleGoToPost = () => {
    history.push(`/postpage/${props.feed.id}`)
  }

  const handleUpVote = () => {
    props.handleVotePost(props.feed.id, 1)
  }
  const handleDownVote = () => {
    props.handleVotePost(props.feed.id, -1)
  }

  return (
    <PostContainer>
      <h3>{props.feed.title}</h3>
      <i>{props.feed.username}</i>
      <ParagraphContainer>
        <p>{props.feed.body}</p>
      </ParagraphContainer>   
      <ButtonContainer>      
          <LikeButton onClick={handleUpVote}><img src={like} width="25px" alt="like" /></LikeButton>
          <LikeButton >{props.feed.voteSum}</LikeButton>
          <LikeButton onClick={handleDownVote}><img src={dislike} width="25px" alt="dislike" /></LikeButton>
          {!props.hideComment && (
          <CommentButton 
          onClick={handleGoToPost}
          >
            <img src={acess} alt="acess" width="43px"/>
          </CommentButton>
        )}
      </ButtonContainer>   
    </PostContainer>
  );
}

export default PostCard;
