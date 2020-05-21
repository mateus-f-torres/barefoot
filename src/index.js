import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import './index.css'
import './service-worker.js'

import createStore from './stores'
import AppContainer from './components/App/AppContainer'

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(
    <Provider store={createStore()}>
      <AppContainer />
    </Provider>,
    root,
  )
}
