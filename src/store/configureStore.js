//@flow
import {createStore} from 'redux';
import rootReducer from '../reducers/index.js';
import type {Store} from '../types/store.js';

export default function configureStore(): Store {
  return createStore(rootReducer);
}
