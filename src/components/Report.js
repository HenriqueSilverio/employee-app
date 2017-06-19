import React, { Component } from 'react'
import ReportTable from './ReportTable'
import ReportChart from './ReportChart'

class Report extends Component {
  render() {
    return (
      <div>
        <h2 className="title">
          Dados
        </h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
        <div className="report-grid">
          <ReportTable employees={this.props.employees} />
          <ReportChart employees={this.props.employees} />
        </div>
      </div>
    )
  }
}

export default Report
