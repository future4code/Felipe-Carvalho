import React from "react"
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Final from "./components/Final"
import styled from 'styled-components'
import GlobalStyle from './globalStyles';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #150c42;
`



export class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {

    switch (this.state.etapa) {
      case 1 :
        return <Etapa1 />;
      case 2 :
        return <Etapa2 />;
      case 3 :
        return <Etapa3 />;
      case 4 :
        return <Final />;
      default:
        console.log("Erro inesperado")      
    }
  }

  irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa +1})
    return 
  }

  render() {
    return(
      <AppContainer >
        <GlobalStyle />
        {this.renderizaEtapa()}

        {this.state.etapa < 4 ? 
        <button 
        type="button" 
        onClick={this.irParaProximaEtapa}
        >
          Próxima etapa
        </button> 
        :
         ""
      }  
        
      </AppContainer>
    )
  }
}

export default App;
