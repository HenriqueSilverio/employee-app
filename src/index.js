import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(<App endpoint="http://localhost:3000/employees" />, document.getElementById('root'))
registerServiceWorker()
