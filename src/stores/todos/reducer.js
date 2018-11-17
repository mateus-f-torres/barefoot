//@flow
import type {Todo} from 'Types/props.js';
import type {Action} from 'Types/actions.js';

type State = Array<Todo>;

let ID = 3;

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
    return addTodoToState(state, action.payload);
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
    return state.map((todo) => {
      return todo.id === action.payload
        ? {...todo, completed: !todo.completed}
        : todo;
    });

  case 'REMOVE_TODO':
    return state.filter((todo) => todo.id !== action.payload);

  default:
    return state;
  }
};

function addTodoToState(state: State, todo: string) {
  return [...state, {id: ID++, text: todo, completed: false}];
}

export default todos;
