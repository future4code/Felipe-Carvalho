import React from "react";
import styled from "styled-components";
import ImagemPessoa from "../../img/imagemPessoa.png"
import LikeImagem from "../../img/love.png"
import Dislike from "../../img/dislike.png"

const ContainerPeople = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
` 

const ContainerDescription = styled.div`
    background-color: #240f32;
    width: 90%;
    border-radius: 15px;
`

const ImagePhoto = styled.img` 
    border-radius: 15px 15px 0 0;
    width: 100%;    
    height: 210px;
`
const NomePessoa = styled.h3` 
    display: inline;
`
const TextDescription = styled.div`
    padding: 10px;
`

const BottonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
 `

 const ButtonsActionLike = styled.div`
    background-color: #260941;
    padding: 10px;
    height: 60px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #37aa9a;
    img{
        width: 60%;
    }
    transition: 0.7s;
    &:hover{
        background-color: #99F7EB;
        border: 1px solid #37aa9a;
    }
 `
 const ButtonsActionDislike = styled.div`
 background-color: #260941;
 padding: 10px;
 height: 60px;
 border-radius: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 border: 1px solid #AF005B;
 img{
     width: 60%;
 }
 transition: 0.7s;
 &:hover{
     background-color: #FC4CA7;
 }
`

const PeopleMatchs = (props) => {
    return (
        <>
        <ContainerPeople>
            <ContainerDescription>
                <ImagePhoto src={props.people.photo} alt="imagemPessoa" />
                <TextDescription>
                    <NomePessoa>{props.people.name}</NomePessoa> <span>, {props.people.age}</span>
                    <p>{props.people.bio}</p>
                </TextDescription>
            </ContainerDescription>
        </ContainerPeople>
        <BottonContainer>
            <ButtonsActionDislike onClick={() => props.choosePeople(false) }><img src={Dislike} alt="Dislike" /></ButtonsActionDislike>
            <ButtonsActionLike onClick={() => props.choosePeople(true) }><img src={LikeImagem} alt="Like"  /></ButtonsActionLike>
        </BottonContainer>
        </>
    )
}

export default PeopleMatchs;