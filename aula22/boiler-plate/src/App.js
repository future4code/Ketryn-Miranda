import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
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
      tarefas: [{
        id: Date.now(),
        texto: 'Texto da primeira tarefa',
        completa: false 
      },
      // {
      //   id: Date.now(), // Explicação abaixo
      //   texto: 'Texto da segunda tarefa',
      //   completa: true 
      // }
      ],
      inputValue: '',
      filtro: 'completas'
    }

  componentDidUpdate() {
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas)) // JSON.stringify converte um array em string
  };

  componentDidMount() {
    const dados = localStorage.getItem('tarefas')
    if(dados){
      this.setState({...this.state, tarefas: JSON.parse(dados)}) // JSON.parse converte uma string em array
    }
  };

  onChangeInput = (event) => {
    this.setState({...this.state, inputValue: event.target.value})
  }

  criaTarefa = () => {
    const tarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false 
    }

    const copiaDoEstado = [...this.state.tarefas, tarefa]
    this.setState({...this.state, tarefas: copiaDoEstado})
  }

  selectTarefa = (id) => {
    const copiaDoEstado = [...this.state.tarefas]

    const arrayModificado = copiaDoEstado.map((item) => {
      return {
        ...item,
        completa: item.id === id ? !item.completa : item.completa,
      }
    })

    this.setState({...this.state, tarefas: arrayModificado})
  }

  onChangeFilter = (event) => {
    this.setState({...this.state, filtro: event.target.value})
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
      <div className="App">
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
      </div>
    )
  }
}

export default App
