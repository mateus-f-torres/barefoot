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

const todos = (state: State = defaultState, action: Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodoToList(state, action.payload);
      /*
      return [
        ...state,
        {
          id: ID++,
          text: action.payload,
          completed: false,
        },
      ];
      */

    case 'TOGGLE_TODO':
      // $FlowFixMe
      return toggleTodoCompletion(state, action.payload);
      /*
      return state.map((todo) => {
        return todo.id === action.payload
          ? {...todo, completed: !todo.completed}
          : todo;
      });
      */

    case 'REMOVE_TODO':
      // $FlowFixMe
      return removeTodoFromList(state, action.payload);
      /*
      return state.filter((todo) => todo.id !== action.payload);
      */

    default:
      return state;
  }
};

let nextID = 3;

function addTodoToList(state: State, todo: string) {
  return [...state, {id: nextID++, text: todo, completed: false}];
}

function toggleTodoCompletion() {}

function removeTodoFromList() {}

export default todos;
