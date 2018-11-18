//@flow
import type { Action } from 'Types/actions';

export const addTodo = (text: string): Action => ({
  type: 'ADD_TODO',
  payload: text,
});

export const toggleTodo = (id: number): Action => ({
  type: 'TOGGLE_TODO',
  payload: id,
});

export const removeTodo = (id: number): Action => ({
  type: 'REMOVE_TODO',
  payload: id,
});

export function testFunction(text: string): Action {
  return {
    type: 'ADD_TODO',
    payload: text,
  };
}
