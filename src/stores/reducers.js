import {combineReducers} from 'redux'

import question from './question/question'

const reducers = {
  question: question,
}

export default combineReducers(reducers)
