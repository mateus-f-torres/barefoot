import {all} from 'redux-saga/effects'
import {watchRequestRandomAnswer} from './question/question'

export default function* rootSaga() {
  yield all([watchRequestRandomAnswer()])
}
