import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import './service-worker.js'

import App from './components/App/App'

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(<App />, root)
}
