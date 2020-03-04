import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers'
import sagas from './sagas'

const composeEnhancers = composeWithDevTools({})
const sagaMiddleware = createSagaMiddleware()

export default function createRootStore(initialState = {}) {
  const middleware = applyMiddleware(sagaMiddleware)
  const rootStore = createStore(
    reducers,
    initialState,
    composeEnhancers(middleware),
  )
  sagaMiddleware.run(sagas)

  return rootStore
}
