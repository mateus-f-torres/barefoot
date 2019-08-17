import React from 'react'
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {render} from '@testing-library/react'

export function setupRenderWithReduxAndSaga(rootReducer, initialState = {}) {
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

export function mockFetch(data) {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json() {
        return data
      },
    })
  })
}
