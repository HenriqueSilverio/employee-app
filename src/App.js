import React, { Component } from 'react'
import Form from './components/Form'
import Report from './components/Report'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      employees: [],
      hasError: false,
      hasSuccess: false,
      doingSave: false,
      formData: {
        firstName: '',
        lastName: '',
        participation: ''
      }
    }

    this.handleSubmit              = this.handleSubmit.bind(this)
    this.handleFirstNameChange     = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange      = this.handleLastNameChange.bind(this)
    this.handleParticipationChange = this.handleParticipationChange.bind(this)
  }

  componentDidMount() {
    const url = this.props.endpoint

    fetch(url)
      .then(response => response.json())
      .then((json) => {
        const employees = json.data.map(employee => ({
          firstName: employee.firstName,
          lastName: employee.lastName,
          participation: employee.participation
        }))

        this.setState({ employees })
      })
      .catch(error => console.log(error))
  }

  handleSubmit(event) {
    event.preventDefault()
  
    this.setState({ 
      doingSave: true,
      hasError: false,
      hasSuccess: false
    })

    const url      = this.props.endpoint
    const formData = Object.values(this.state.formData);
    const hasEmpty = formData.some((value) => '' === value)

    if (hasEmpty) {
      this.setState({ 
        doingSave: false,
        hasError: true,
        hasSuccess: false
      })

      return
    }

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.formData)
    })
      .then(response => response.json())
      .then((json) => {
        if (false === json.success) {
          this.setState({ 
            doingSave: false,
            hasError: true,
            hasSuccess: false
          })

          return
        }

        const employees = this.state.employees.slice()

        const formData = {
          firstName: '',
          lastName: '',
          participation: ''
        }

        const employeeData = {
          firstName: json.data.firstName,
          lastName: json.data.lastName,
          participation: json.data.participation
        }

        employees.push(employeeData)

        this.setState({ 
          doingSave: false,
          hasError: false,
          hasSuccess: true,
          employees,
          formData
        })
      })
      .catch((error) => {
        console.log(error)

        this.setState({ 
          doingSave: false,
          hasError: false,
          hasSuccess: false
        })
      })
  }

  handleFirstNameChange(event) {
    const formData = { ...this.state.formData }

    formData.firstName = event.target.value

    this.setState({ formData })
  }

  handleLastNameChange(event) {
    const formData = { ...this.state.formData }

    formData.lastName = event.target.value

    this.setState({ formData })
  }

  handleParticipationChange(event) {
    const formData = { ...this.state.formData }

    formData.participation = event.target.value

    this.setState({ formData })
  }

  render() {
    return (
      <div>
        <header className="header">
          <Form 
            hasError={this.state.hasError}
            hasSuccess={this.state.hasSuccess}
            isDisabled={this.state.doingSave}
            firstName={this.state.formData.firstName}
            lastName={this.state.formData.lastName}
            participation={this.state.formData.participation}
            handleSubmit={this.handleSubmit} 
            handleFirstNameChange={this.handleFirstNameChange}
            handleLastNameChange={this.handleLastNameChange}
            handleParticipationChange={this.handleParticipationChange}
          />
        </header>
        {!!this.state.employees.length &&
          <main className="main">
            <Report employees={this.state.employees} />
          </main>
        }
      </div>
    )
  }
}

export default App
