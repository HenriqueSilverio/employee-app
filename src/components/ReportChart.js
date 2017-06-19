import React, { Component } from 'react'
import Chart from 'chart.js'

class ReportChart extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.employees.length !== this.props.employees.length
  }

  componentDidUpdate(nextProps) {
    this.employeeChart.data = this.getChartData()
    this.employeeChart.update()
  }

  componentDidMount() {
    const context   = this.chartCanvas
    const chartData = this.getChartData()

    this.employeeChart = new Chart(context, {
      type: 'doughnut',
      data: chartData
    })
  }

  getChartData() {
    const employees = this.props.employees
    
    const names     = employees.map(employee => `${employee.firstName} ${employee.lastName}`)
    const values    = employees.map(employee => employee.participation)
    const colors    = employees.map(employee => this.getRandomColor())

    const chartData = {
      labels: names,
      datasets: [{
        data: values,
        backgroundColor: colors
      }]
    }

    return chartData
  }

  getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }

  render() {
    return (
      <div className="report-grid__column">
        <canvas className="chart-canvas" ref={canvas => this.chartCanvas = canvas} />
      </div>
    )
  }
}

export default ReportChart
