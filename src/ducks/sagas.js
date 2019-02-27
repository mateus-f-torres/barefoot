// @flow
import {all} from 'redux-saga/effects';
import {watchCallFetchRandomActivity} from 'ducks/todos';

export default function* rootSaga() {
  yield all([
    watchCallFetchRandomActivity(),
  ])
}
