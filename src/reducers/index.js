//@flow
import {combineReducers} from 'redux';

import todos from './todos';

const reducers = {
  todos,
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);
