import {combineReducers} from 'redux'

import todos from './todos'

const reducers = {
  todos,
}

export default combineReducers(reducers)
