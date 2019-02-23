//@flow
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import type {Store} from 'types/store';

import reducers from 'ducks/reducers';
import sagas from 'ducks/sagas';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();

export default function createRootStore(initialState = {}): Store {
  const middlewares = applyMiddlewares(sagaMiddleware);
  const rootStore = createStore(reducers, initialState, composeEnhancers(middlewares))
  sagaMiddleware.run(saga);

  return rootStore;
}
