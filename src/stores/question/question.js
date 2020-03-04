import {call, put, takeLatest} from 'redux-saga/effects'
import request from '../../utils/request'
import {RANDOM_ANSWER} from '../../utils/urls'

// NOTE: action types
const ANSWER_YES = 'barefoot/answer/ANSWER_YES'
const ANSWER_NO = 'barefoot/answer/ANSWER_NO'
const FETCH_RANDOM_ANSWER = 'barefoot/answer/FETCH_RANDOM_ANSWER'

// NOTE: default reducer state
const defaultState = Object.assign(Object.create(null), {
  yes: false,
  no: false,
})

// NOTE: reducer definition
function question(state = defaultState, action) {
  switch (action.type) {
    case ANSWER_YES:
      return changeAnswerToYes()

    case ANSWER_NO:
      return changeAnswerToNo()

    default:
      return state
  }
}

// NOTE: sync reducer functions
function changeAnswerToYes() {
  return {yes: true, no: false}
}

function changeAnswerToNo() {
  return {yes: false, no: true}
}

// NOTE: async saga workers
export function* requestRandomAnswer() {
  try {
    const res = yield call(request, RANDOM_ANSWER)
    res.answer == 'yes'
      ? yield put({type: ANSWER_YES})
      : yield put({type: ANSWER_NO})
  } catch (e) {
    // TODO: add global error handling
    throw new Error(e)
  }
}

// NOTE: action creators
export function answerYes() {
  return {
    type: ANSWER_YES,
  }
}

export function answerNo() {
  return {
    type: ANSWER_NO,
  }
}

export function getRandomAnswer() {
  return {
    type: FETCH_RANDOM_ANSWER,
  }
}

// NOTE: saga watchers
export function* watchRequestRandomAnswer() {
  yield takeLatest(FETCH_RANDOM_ANSWER, requestRandomAnswer)
}

export default question
