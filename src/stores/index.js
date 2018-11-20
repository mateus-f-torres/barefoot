//@flow
import {combineReducers} from 'redux';

import todos from './todos/reducer';

const rootReducer = {
  todos,
};

export type Reducer = typeof rootReducer;

export default combineReducers(rootReducer);
