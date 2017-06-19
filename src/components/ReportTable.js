import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <div className="report-grid__column">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Participação</th>
            </tr>
          </thead>
          <tbody>
            {this.props.employees.map((employee, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{`${employee.participation}%`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table
