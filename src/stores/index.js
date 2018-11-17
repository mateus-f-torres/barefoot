//@flow
import {combineReducers} from 'redux';

import todos from './todos/reducer.js';

const rootReducer = {
  todos,
};

export type Reducer = typeof rootReducer;

export default combineReducers(rootReducer);
