import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import VisibleTodoList from '../../src/containers/VisibleTodoList.js';
import TodoList from '../../src/components/TodoList.jsx';

const mockState = {
  todos: [
    {
      id: 0,
      text: 'mock1',
      completed: false,
    },
    {
      id: 1,
      text: 'mock2',
      completed: true,
    },
    {
      id: 2,
      text: 'mock3',
      completed: false,
    },
  ],
};

const mockStore = configureStore();
const store = mockStore(mockState);

describe('VisibleTodoList', () => {
  beforeEach(() => {
    store.clearActions();
  });

  const container = mount(
    <Provider store={store}>
      <VisibleTodoList />
    </Provider>
  );
  // console.log(container.debug()); for more info

  describe('Unit Test', () => {
    test('render TodoList component', () => {
      expect(container.containsMatchingElement(<TodoList />)).toBe(true);
    });

    test('receive store.todos', () => {
      expect(container.find('TodoList')
        .prop('todos')).toEqual(mockState.todos);
    });

    test('render all todos', () => {
      expect(container.find('TodoList').find('[data-test="todo-list"]')
        .children().length).toEqual(mockState.todos.length);
    });

    test('dispatch correct addTodo', () => {
      const expectedActions = [
        {
          'type': 'ADD_TODO',
          'payload': 'Hello World',
        },
      ];

      container.find('TodoList').find('[data-test="todo-input"]')
        .instance().value = 'Hello World';

      container.find('TodoList').find('[data-test="todo-submit"]')
        .simulate('submit');

      expect(store.getActions()).toEqual(expectedActions);
    });

    test('dont dispatch addTodo without value', () => {
      container.find('TodoList').find('[data-test="todo-input"]')
        .instance().value = '    ';

      container.find('TodoList').find('[data-test="todo-submit"]')
        .simulate('submit');

      expect(store.getActions()).toEqual([]);
    });

    test('reset input value after addTodo', () => {
      let mockInput = container.find('TodoList')
        .find('[data-test="todo-input"]')
        .instance();
      mockInput.value = 'Hello World';

      container.find('TodoList').find('[data-test="todo-submit"]')
        .simulate('submit');

      expect(mockInput.value).toBe('');
    });

    test('dispatch correct toggleTodo', () => {
      const expectedActions = [
        {
          'type': 'TOGGLE_TODO',
          'payload': 1,
        },
      ];

      container.find('TodoList').find('[data-test="todo-list"]')
        .childAt(1).find('p').simulate('click');

      expect(store.getActions()).toEqual(expectedActions);
    });

    test('dispatch correct removeTodo', () => {
      const expectedActions = [
        {
          'type': 'REMOVE_TODO',
          'payload': 2,
        },
      ];

      container.find('TodoList').find('[data-test="todo-list"]')
        .childAt(2).find('button').simulate('click');

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Snapshot Test', () => {
    test('matches current production snapshot', () => {
      expect(container).toMatchSnapshot();
    });
  });
});
