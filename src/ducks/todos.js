//@flow
import request from 'utils/request';

import type {Action} from 'types/actions';
import type {Todo} from 'types/props';

type State = Array<Todo>;

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

export function callSetTodoAction(text: string): Action {
  return {
    type: CALL_SET_TODO,
    payload: text,
  }
}

export function* watchCallSetTodo() {
  yield takeEvery(CALL_SET_TODO, callSetTodo);
}

export function* callSetTodo({payload: text}: string) {
  try {
    
  } catch(e) {

  }
}

export default todos;
