//@flow
import {call, put, takeEvery} from 'redux-saga/effects';
import request from 'utils/request';
import {RANDOM_ACTIVITY_URL} from 'utils/urls';

import type {ReduxAction} from 'types/actions';
import type {Todo} from 'types/props';

type State = Array<Todo>;

const randomHexId = () => Math.random().toString(16).slice(2, 8);
const defaultMemoizedState = Object.assign(Object.create(null), {
  [randomHexId()]: {
    text: 'Buy bread',
    completed: false,
  },
  [randomHexId()]: {
    text: 'Take dog for a walk',
    completed: true,
  },
  [randomHexId()]: {
    text: 'Comment codebase',
    completed: false,
  },
});

// NOTE: constants
const ADD_TODO = 'barefoot/todos/ADD_TODO';
const TOGGLE_TODO = 'barefoot/todos/TOGGLE_TODO';
const REMOVE_TODO = 'barefoot/todos/REMOVE_TODO';
const CALL_FETCH_RANDOM_ACTIVITY = 'barefoot/todos/CALL_FETCH_RANDOM_ACTIVITY';

// NOTE: reducer
function todos(state: State = defaultMemoizedState, action: ReduxAction) {
  switch (action.type) {
    case ADD_TODO:
      return addTodoToList(state, action.payload);

    case TOGGLE_TODO:
      return toggleTodoCompletion(state, action.payload);

    case REMOVE_TODO:
      return removeTodoFromList(state, action.payload);

    default:
      return state;
  }
}

// NOTE: sync functions
function addTodoToList(state: State, todo: string) {
  return {...state, [randomHexId()]: {text: todo, completed: false}};
}

function toggleTodoCompletion(state: State, id: number): State {
  const oldTodo = {...state[id]};
  return {...state, [id]: {...oldTodo, completed: !oldTodo.completed}};
}

function removeTodoFromList(oldState: Array<Todo>, id: number): State {
  const newState = Object.create(null);
  for (const [key, value] of Object.entries(oldState)) {
    if (key != id) newState[key] = {...value};
  }
  return newState;
}

// NOTE: sync actions
export function addTodoAction(text: string): ReduxAction {
  return ({
    type: ADD_TODO,
    payload: text,
  })
}

export function toggleTodoAction(id: number): ReduxAction {
  return ({
    type: TOGGLE_TODO,
    payload: id,
  });
}

export function removeTodoAction(id: number): ReduxAction {
  return ({
    type: REMOVE_TODO,
    payload: id,
  });
}

// NOTE: async actions
export function callFetchRandomActivityAction(): ReduxAction {
  return {
    type: CALL_FETCH_RANDOM_ACTIVITY,
  }
}

// NOTE: watchers
export function* watchCallFetchRandomActivity() {
  yield takeEvery(CALL_FETCH_RANDOM_ACTIVITY, callFetchRandomActivity);
}

// NOTE: async functions
export function* callFetchRandomActivity() {
  try {
    const res = yield call([request, 'get'], RANDOM_ACTIVITY_URL);
    yield put({type: ADD_TODO, payload: res.activity})
    
  } catch(e) {
    // TODO: add global error handling
    throw new Error(e);
  }
}

export default todos;
