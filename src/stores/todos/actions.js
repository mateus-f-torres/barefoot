//@flow
import type {Action} from 'Types/actions';

export function addTodo(text: string): Action {
  return ({
    type: 'ADD_TODO',
    payload: text,
  })
}

export function toggleTodo(id: number): Action {
  return ({
    type: 'TOGGLE_TODO',
    payload: id,
  });
}

export function removeTodo(id: number): Action {
  return ({
    type: 'REMOVE_TODO',
    payload: id,
  });
}
