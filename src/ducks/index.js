//@flow
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from 'ducks/reducers';
import sagas from 'ducks/sagas';

import type {Store} from 'types/store';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();

export default function createRootStore(initialState = {}): Store {
  const middlewares = applyMiddleware(sagaMiddleware);
  const rootStore = createStore(reducers, initialState, composeEnhancers(middlewares))
  sagaMiddleware.run(sagas);

  return rootStore;
}
