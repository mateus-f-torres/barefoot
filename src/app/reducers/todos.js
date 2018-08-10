let nextID = 3;

const defaultState = [
  {
    id: 0,
    text: 'Buy bread',
    completed: false,
  },
  {
    id: 1,
    text: 'Take the dog for a walk',
    completed: true,
  },
  {
    id: 2,
    text: 'Run a marathon',
    completed: false,
  },
];


const todos = (state = defaultState, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return [
      ...state,
      {
        id: nextID++,
        text: action.text,
        completed: false,
      },
    ];
  case 'TOGGLE_TODO':
    return state.map((todo) => (todo.id === action.id)
      ? {...todo, completed: !todo.completed}
      : todo
    );
  case 'REMOVE_TODO':
    return state.filter((todo) => todo.id !== action.id);
  default:
    return state;
  }
};

export default todos;
