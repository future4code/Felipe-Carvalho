import React from 'react'
import styled from 'styled-components'
import {  secundaryColor, tertiaryColor } from '../constantes/colors'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'



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
  display: flex;
  align-self: flex-end; 
`

const CommentButton = styled.button`
  margin-right: 15px;
  margin-bottom: 5px;
  background-color: transparent;
`

const CommentVotes = styled.span`
  margin-right: 15px;
  margin-bottom: 5px;
  background-color: transparent;
`


const PostCard = (props) => {

  const handleUpVote = () => {
    props.handleCommentVote(props.comments.id, 1)
  }

  const handleDownVote = () => {
    props.handleCommentVote(props.comments.id, -1)
  }

  return (
    <PostContainer>
      <h3>{props.comments.username}</h3>
      <ParagraphContainer>
        <p>
        {props.comments.body}
        </p>
      </ParagraphContainer>   
      <ButtonContainer>
          <CommentButton onClick={handleUpVote}><img src={like} width="25px" alt="like" /></CommentButton>
          <CommentVotes>{props.comments.voteSum}</CommentVotes>
          <CommentButton onClick={handleDownVote}><img src={dislike} width="25px" alt="dislike" /></CommentButton>
      </ButtonContainer>   
    </PostContainer>
  );
}

export default PostCard;
