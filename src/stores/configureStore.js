//@flow
import {createStore} from 'redux';
import type {Store} from 'Types/store';
import rootReducer from './index';

export default function configureStore(): Store {
  return createStore(rootReducer);
}
