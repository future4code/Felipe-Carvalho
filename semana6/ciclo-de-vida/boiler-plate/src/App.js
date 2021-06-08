import React from 'react'
import styled from 'styled-components'
import './styles.css'
import GlobalStyle from './globalStyles'

const AppContainer = styled.div`
  background-color: #150c42;
`

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;

`

const Tarefa = styled.li`
  color: white;
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px; 
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefasSalvas = localStorage.getItem('tarefas')
    const arrayTarefas = JSON.parse(tarefasSalvas)

    this.setState({tarefas: arrayTarefas})
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novaListaTarefa = [novaTarefa,... this.state.tarefas];

    this.setState({tarefas: novaListaTarefa})
  }

  selectTarefa = (id) => {
    const newListaTarefa = this.state.tarefas.map((mudaTarefa) => {
      if(id === mudaTarefa.id) {
        const novaListaMudaTarefa = {
          ...mudaTarefa,
          completa: !mudaTarefa.completa
        }
        return novaListaMudaTarefa;
      }else {
        return mudaTarefa;
      }
    })

    this.setState({tarefas: newListaTarefa})
  }

  onChangeFilter = (event) => {
    this.setState ({filtro: event.target.value})
  } 

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <AppContainer className="App">
        <GlobalStyle />
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </AppContainer>
    )
  }
}

export default App
