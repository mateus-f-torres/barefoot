import {all} from 'redux-saga/effects'
import {watchRequestRandomActivity} from 'ducks/todos'

export default function * rootSaga() {
  yield all([
    watchRequestRandomActivity(),
  ])
}
