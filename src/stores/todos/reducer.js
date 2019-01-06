//@flow
import type {Todo} from 'Types/props';
import type {Action} from 'Types/actions';

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

function todos(state: State = defaultState, action: Action) {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodoToList(state, action.payload);

    case 'TOGGLE_TODO':
      return toggleTodoCompletion(state, action.payload);

    case 'REMOVE_TODO':
      return removeTodoFromList(state, action.payload);

    default:
      return state;
  }
}

let nextID = 3;

function addTodoToList(state: State, todo: string) {
  return [...state, {id: nextID++, text: todo, completed: false}];
}

function toggleTodoCompletion(state: State, id: number) {
  return state.map((todo) => todo.id == id
      ? {...todo, completed: !todo.completed}
      : todo
  )
}

function removeTodoFromList(state: State, id: number) {
  return state.filter((todo) => todo.id != id);
}

export default todos;
