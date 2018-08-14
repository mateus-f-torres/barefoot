//@flow
import type {Action} from '../types/actions.js';

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
