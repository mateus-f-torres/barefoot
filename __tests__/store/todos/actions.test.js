import configureStore from 'redux-mock-store';

import {addTodo, toggleTodo, removeTodo} from 'Store/todos/actions.js';

const mockStore = configureStore();
const store = mockStore();

describe('Test Todo Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('Unit Test', () => {
    test('addTodo, correct action and payload', () => {
      const expectedActions = [
        {
          'type': 'ADD_TODO',
          'payload': 'Hello World',
        },
      ];

      store.dispatch(addTodo('Hello World'));
      expect(store.getActions()).toEqual(expectedActions);
    });

    test('toggleTodo, correct action and payload', () => {
      const expectedActions = [
        {
          'type': 'TOGGLE_TODO',
          'payload': 1,
        },
      ];

      store.dispatch(toggleTodo(1));
      expect(store.getActions()).toEqual(expectedActions);
    });

    test('removeTodo, correct action and payload', () => {
      const expectedActions = [
        {
          'type': 'REMOVE_TODO',
          'payload': 2,
        },
      ];

      store.dispatch(removeTodo(2));
      expect(store.getActions()).toEqual(expectedActions);
    });

    test('3 actions dipatch, correct actions and payload received', () => {
      const expectedActions = [
        {
          'type': 'ADD_TODO',
          'payload': 'Hello World',
        },
        {
          'type': 'TOGGLE_TODO',
          'payload': 1,
        },
        {
          'type': 'REMOVE_TODO',
          'payload': 2,
        },
      ];

      store.dispatch(addTodo('Hello World'));
      store.dispatch(toggleTodo(1));
      store.dispatch(removeTodo(2));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Snapshot Test', () => {
    test('match current production snapshot', () => {
      store.dispatch(addTodo('Hello World'));
      store.dispatch(toggleTodo(1));
      store.dispatch(removeTodo(2));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
