//@flow
import {call, put, takeEvery} from 'redux-saga/effects';
import request from 'utils/request';
import {RANDOM_ACTIVITY_URL} from 'utils/urls';

import type {Action} from 'types/actions';
import type {Todo} from 'types/props';

type State = Array<Todo>;

// TODO: use Math.random for id
// TODO: memoize
const defaultState = [
  {
    id: 0,
    text: 'Buy bread',
    completed: false,
  },
  {
    id: 1,
    text: 'Take dog for a walk',
    completed: true,
  },
  {
    id: 2,
    text: 'Comment codebase',
    completed: false,
  },
];

const ADD_TODO = 'barefoot/todos/ADD_TODO';
const TOGGLE_TODO = 'barefoot/todos/TOGGLE_TODO';
const REMOVE_TODO = 'barefoot/todos/REMOVE_TODO';
const CALL_FETCH_RANDOM_ACTIVITY = 'barefoot/todos/CALL_FETCH_RANDOM_ACTIVITY';

function todos(state: State = defaultState, action: Action) {
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

let nextID = 3;

function addTodoToList(state: State, todo: string) {
  return [...state, {id: nextID++, text: todo, completed: false}];
}

function toggleTodoCompletion(state: State, id: number): State {
  const mapped = state.map((todo) => todo.id == id
      ? {...todo, completed: !todo.completed}
      : todo
  )
  return mapped;
}

function removeTodoFromList(state: Array<Todo>, id: number): State {
  const filtered =  state.filter((todo) => todo.id != id);
  return filtered;
}

export function addTodoAction(text: string): Action {
  return ({
    type: ADD_TODO,
    payload: text,
  })
}

export function toggleTodoAction(id: number): Action {
  return ({
    type: TOGGLE_TODO,
    payload: id,
  });
}

export function removeTodoAction(id: number): Action {
  return ({
    type: REMOVE_TODO,
    payload: id,
  });
}

// TODO: move dispatch to App -> Header -> Icon
export function callFetchRandomActivityAction(): Action {
  return {
    type: CALL_FETCH_RANDOM_ACTIVITY,
  }
}

export function* watchCallFetchRandomActivity() {
  yield takeEvery(CALL_FETCH_RANDOM_ACTIVITY, callFetchRandomActivity);
}

function* callFetchRandomActivity() {
  try {
    const res = yield call(request, RANDOM_ACTIVITY_URL);
    yield put({type: ADD_TODO, payload: res.activity})
    
  } catch(e) {
    // TODO: add global error handling
    throw new Error(e);
  }
}

export default todos;
