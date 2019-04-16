import {call, put, takeEvery} from 'redux-saga/effects';
import request from 'utils/request';
import {RANDOM_ACTIVITY} from 'utils/urls';

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

// NOTE: actions
const ADD_TODO = 'barefoot/todos/ADD_TODO';
const TOGGLE_TODO = 'barefoot/todos/TOGGLE_TODO';
const REMOVE_TODO = 'barefoot/todos/REMOVE_TODO';
const FETCH_RANDOM_ACTIVITY = 'barefoot/todos/FETCH_RANDOM_ACTIVITY';

// NOTE: reducer definition
function todos(state = defaultMemoizedState, action) {
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

// NOTE: sync action creators
export function addTodo(text) {
  return ({
    type: ADD_TODO,
    payload: text,
  })
}

export function toggleTodo(id) {
  return ({
    type: TOGGLE_TODO,
    payload: id,
  });
}

export function removeTodo(id) {
  return ({
    type: REMOVE_TODO,
    payload: id,
  });
}

// NOTE: async action creators
export function fetchRandomActivity() {
  return {
    type: FETCH_RANDOM_ACTIVITY,
  }
}


// NOTE: reducer functions
function addTodoToList(state, todo) {
  return {...state, [randomHexId()]: {text: todo, completed: false}};
}

function toggleTodoCompletion(state, id) {
  const oldTodo = {...state[id]};
  return {...state, [id]: {...oldTodo, completed: !oldTodo.completed}};
}

function removeTodoFromList(oldState, id) {
  const newState = Object.create(null);
  for (const [key, value] of Object.entries(oldState)) {
    if (key != id) newState[key] = {...value};
  }
  return newState;
}

// NOTE: saga watchers
export function* watchRequestRandomActivity() {
  yield takeEvery(FETCH_RANDOM_ACTIVITY, requestRandomActivity);
}

// NOTE: saga workers
export function* requestRandomActivity() {
  try {
    const res = yield call(request, RANDOM_ACTIVITY);
    yield put({type: ADD_TODO, payload: res.activity})
    
  } catch(e) {
    // TODO: add global error handling
    throw new Error(e);
  }
}

export default todos;
