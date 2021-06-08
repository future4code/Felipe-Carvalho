import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import LogoFelipe from './components/images/pp.jpeg'
import LogoEmail from './components/images/email.svg'
import LogoEndereco from './components/images/address.svg'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

const AppContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`
const TextMain = styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
` 


function App() {
  return (
    <AppContainer>
      <GlobalStyle/>
      <PageSectionContainer>
        <TextMain>Dados pessoais</TextMain>
        <CardGrande 
          imagem= {LogoFelipe}
          nome="Felipe Souto de Carvalho" 
          descricao="Oi, eu sou o Felipe. Sou de goiania. Estudante full stack na Labenu e analise e desenvolvimento de sistemas na estacio."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          informacoes= "felipexsou@gmail.com" 
          logoinformacoes = {LogoEmail}
        />

        <CardPequeno
          informacoes= "Goiania"
          logoinformacoes = {LogoEndereco}
        />

      </PageSectionContainer>

      <PageSectionContainer>
        <TextMain>Experiências profissionais</TextMain>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <TextMain>Minhas redes sociais</TextMain>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </AppContainer>
  );
}

export default App;
