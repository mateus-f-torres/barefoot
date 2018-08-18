import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import VisibleTodoList from '../../src/containers/VisibleTodoList.js';

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

  const container = shallow(<VisibleTodoList />, {context: {store}});
  // console.log(container.debug()); for more info

  describe('Unit Test', () => {
    test('render TodoList component', () => {
      expect(typeof container.find('TodoList')).toBe('object');
    });

    test('receive store.todos', () => {
      expect(container.find('TodoList')
        .prop('todos')).toEqual(mockState.todos);
    });

    test('render all todos', () => {
      expect(container.dive().find('[data-test="todo-list"]')
        .children().length).toEqual(mockState.todos.length);
    });

    test('dispatch correct addTodo', () => {
      const mockEvent = {
        preventDefault() {},
        stopPropagation() {},
        currentTarget: {childNodes: [{value: 'Hello World'}]},
      };

      const expectedActions = [
        {
          'type': 'ADD_TODO',
          'payload': 'Hello World',
        },
      ];

      container.dive().find('[data-test="todo-submit"]')
        .simulate('submit', mockEvent);

      expect(store.getActions()).toEqual(expectedActions);
    });

    test('dont dispatch addTodo without value', () => {
      const mockEvent = {
        preventDefault() {},
        stopPropagation() {},
        currentTarget: {childNodes: [{value: '    '}]},
      };

      container.dive().find('[data-test="todo-submit"]')
        .simulate('submit', mockEvent);

      expect(store.getActions()).toEqual([]);
    });

    test('dont dispatch addTodo without currentTarget', () => {
      const mockEvent = {
        preventDefault() {},
        stopPropagation() {},
      };

      container.dive().find('[data-test="todo-submit"]')
        .simulate('submit', mockEvent);

      expect(store.getActions()).toEqual([]);
    });

    test('reset input value after addTodo', () => {
      const mockEvent = {
        preventDefault() {},
        stopPropagation() {},
        currentTarget: {childNodes: [{value: 'Hello World'}]},
      };

      container.dive().find('[data-test="todo-submit"]')
        .simulate('submit', mockEvent);

      expect(mockEvent.currentTarget.childNodes[0].value).toBe('');
    });

    test('dispatch correct toggleTodo', () => {
      const mockEvent = {
        preventDefault() {},
        stopPropagation() {},
        currentTarget: {parentNode: {id: '1'}},
      };

      const expectedActions = [
        {
          'type': 'TOGGLE_TODO',
          'payload': 1,
        },
      ];

      container.dive().find('[data-test="todo-list"]')
        .childAt(1).dive().find('p').simulate('click', mockEvent);

      expect(store.getActions()).toEqual(expectedActions);
    });

    test('dispatch correct removeTodo', () => {
      const mockEvent = {
        preventDefault() {},
        stopPropagation() {},
        currentTarget: {parentNode: {id: '2'}},
      };

      const expectedActions = [
        {
          'type': 'REMOVE_TODO',
          'payload': 2,
        },
      ];

      container.dive().find('[data-test="todo-list"]')
        .childAt(1).dive().find('button').simulate('click', mockEvent);

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Snapshot Test', () => {
    test('matches current production snapshot', () => {
      expect(container).toMatchSnapshot();
    });
  });
});
