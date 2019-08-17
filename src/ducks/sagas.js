import {all} from 'redux-saga/effects'
import {watchRequestRandomActivity} from './todos'

export default function* rootSaga() {
  yield all([watchRequestRandomActivity()])
}
