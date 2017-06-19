import React, { Component } from 'react'

class Alert extends Component {
  render() {
    const type      = this.props.type
    const typeClass = 'error' === type ? 'alert--danger' : 'alert--success'

    return (
      <div className={`alert ${typeClass}`}>
        {this.props.message}
      </div>
    )
  }
}

export default Alert
