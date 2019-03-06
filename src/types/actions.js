//@flow
type addTodo = {
  type: 'ADD_TODO',
  payload: string,
};

type toggleTodo = {
  type: 'TOGGLE_TODO',
  payload: number,
};

type removeTodo = {
  type: 'REMOVE_TODO',
  payload: number,
};

export type ReduxAction =
  | addTodo
  | toggleTodo
  | removeTodo;
