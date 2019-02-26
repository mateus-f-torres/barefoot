// @flow
import {combineReducers} from 'redux';

import todos from 'ducks/todos';

const reducers = {
  todos,
};

export type Reducer = typeof rootReducer;
export default combineReducers(reducers);
