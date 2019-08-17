import React from 'react'
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {render} from '@testing-library/react'

function setupRenderWithReduxAndSaga(rootReducer, initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()
  const root = combineReducers(rootReducer)
  const store = createStore(root, initialState, applyMiddleware(sagaMiddleware))

  return {
    saga: sagaMiddleware,
    render(ui) {
      return {...render(<Provider store={store}>{ui}</Provider>)}
    },
  }
}

export default setupRenderWithReduxAndSaga
