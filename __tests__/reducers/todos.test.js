import todosReducer from '../../src/reducers/todos.js';

describe('Todos Reducer', () => {
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

  describe('Unit Test', () => {
    describe('DEFAULT_STATE', () => {
      test('is correct', () => {
        const action = {type: 'dummy_action'};

        expect(todosReducer(undefined, action)).toEqual(defaultState);
      });
    });

    describe('ADD_TODO', () => {
      test('return correct state', () => {
        const action = {type: 'ADD_TODO', payload: 'test reducer'};
        const expectedState = [
          ...defaultState,
          {id: 3, text: 'test reducer', completed: false},
        ];

        expect(todosReducer(undefined, action)).toEqual(expectedState);
      });
    });

    describe('TOGGLE_TODO', () => {
      test('return correct state', () => {
        const action = {type: 'TOGGLE_TODO', payload: 2};
        const expectedItem = {
          id: 2, text: 'Comment codebase', completed: true,
        };

        expect(todosReducer(undefined, action)[2]).toEqual(expectedItem);
      });
    });

    describe('REMOVE_TODO', () => {
      test('return correct state', () => {
        const action = {type: 'REMOVE_TODO', payload: 2};

        expect(todosReducer(undefined, action).length).toEqual(2);
      });
    });
  });

  describe('Snapshot Test', () => {
    describe('INITIAL STATE', () => {
      test('matches current production snapshot', () => {
        const action = {type: 'dummy_action'};

        expect(todosReducer(undefined, action)).toMatchSnapshot();
      });
    });

    describe('ADD_TODO', () => {
      test('matches current production snapshot', () => {
        const action = {type: 'ADD_TODO', payload: 'snapshot test reducer'};

        expect(todosReducer(undefined, action)).toMatchSnapshot();
      });
    });

    describe('TOGGLE_TODO', () => {
      test('matches current production snapshot', () => {
        const action = {type: 'TOGGLE_TODO', payload: 2};

        expect(todosReducer(undefined, action)).toMatchSnapshot();
      });
    });

    describe('REMOVE_TODO', () => {
      test('matches current production snapshot', () => {
        const action = {type: 'REMOVE_TODO', payload: 2};

        expect(todosReducer(undefined, action)).toMatchSnapshot();
      });
    });
  });
});
