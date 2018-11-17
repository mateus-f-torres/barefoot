//@flow
import {createStore} from 'redux';
import rootReducer from './index.js';
import type {Store} from 'Types/store.js';

export default function configureStore(): Store {
  return createStore(rootReducer);
}
