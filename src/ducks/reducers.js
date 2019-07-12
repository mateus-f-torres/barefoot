import {combineReducers} from 'redux'

import todos from 'ducks/todos'

const reducers = {
  todos,
}

export default combineReducers(reducers)
