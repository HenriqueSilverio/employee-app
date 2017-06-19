import React, { Component } from 'react'
import Alert from './Alert'

class Form extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="title title--inverse">
            Cadastre-se
          </h1>
          <p className="description description--inverse">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>

          {!!this.props.hasError &&
            <Alert type="error" message="Preencha todos os campos corretamente." />
          }

          {!!this.props.hasSuccess &&
            <Alert type="success" message="Cadastrado com sucesso!" />
          }
        </div>

        <form className="form-grid" onSubmit={this.props.handleSubmit}>
          <input 
            className="form-control" 
            type="text" 
            placeholder="Nome" 
            onChange={this.props.handleFirstNameChange}
            disabled={this.props.isDisabled}
            value={this.props.firstName}
            required 
          />
          <input 
            className="form-control" 
            type="text" 
            placeholder="Sobrenome" 
            onChange={this.props.handleLastNameChange}
            disabled={this.props.isDisabled}
            value={this.props.lastName}
            required 
          />
          <input 
            className="form-control" 
            type="text" 
            placeholder="Participação" 
            onChange={this.props.handleParticipationChange}
            disabled={this.props.isDisabled}
            value={this.props.participation}
            required 
          />
          <button className="button" disabled={this.props.isDisabled}>Enviar</button>
        </form>
      </div>
    )
  }
}

export default Form
