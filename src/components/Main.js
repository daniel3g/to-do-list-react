import React, { Component } from 'react';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
  state = {
      novaTarefa: '',
      tarefas: []
    };

    handleSubmite = (e) => {
      e.preventDefault();
      const { tarefas } = this.state;
      let { novaTarefa } = this.state;
      novaTarefa = novaTarefa.trim();

      if(tarefas.indexOf(novaTarefa) != -1) return;

      const novasTarefas = [...tarefas];

      this.setState({
        tarefas: [...novasTarefas, novaTarefa]
      })
    }

    handleChange = (e) => {
      this.setState({
        novaTarefa: e.target.value,
      })
    }

    handleDelete = (e, index) => {
      
        const { tarefas } = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);

        this.setState({
          tarefas: [...novasTarefas]
        })
    
    }

    handleEdit = (e, index) => {
      
    }
  
  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className='main'>
        <h1>Lista To Do</h1>

        <form onSubmit={this.handleSubmite} action="#" className='form'>
          <input 
            onChange={this.handleChange} 
            type="text" 
            value={novaTarefa}
            />
          <button type='submite'>
            <FaPlus />
          </button>
        </form>

        <ul className='tarefas'>
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}

              <div>
                <FaEdit onClick={(e) => this.handleEdit(e, index)} className='edit' />
                <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className='delete' />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}