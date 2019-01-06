import React from 'react';
import {shallow} from 'enzyme';
import TodoItem from 'Views/VisibleTodoList/TodoItem.jsx';

describe('<TodoItem />', () => {
  const mockProps = {
    id: 5,
    text: 'Hello World',
    completed: false,
  };

  describe('Unit Test', () => {
    test('render props.text', () => {
      const wrapper = shallow(<TodoItem {...mockProps} />);
      // console.log(wrapper.debug());

      expect(
        wrapper
        // find element matching key-value pair attribute
          .find('[data-test="todo-text"]')
        // dive through styled-component
          .dive()
        // to find real component
          .text()).toMatch(/^Hello\sWorld$/);
    });

    test('li id matches props.id', () => {
      const wrapper = shallow(<TodoItem {...mockProps} />);

      expect(wrapper.prop('id')).toBe(mockProps.id);
    });

    test('done === false if (props.completed === false)', () => {
      const wrapper = shallow(<TodoItem {...mockProps} />);

      expect(wrapper.find('[data-test="todo-text"]')
        .prop('done')).toBe(false);
    });

    test('done === true if (props.completed === true)', () => {
      const mockCompleted = Object.assign({}, mockProps, {completed: true});
      const wrapper = shallow(<TodoItem {...mockCompleted} />);

      expect(wrapper.find('[data-test="todo-text"]')
        .prop('done')).toBe(true);
    });

    it('calls toggleTodo only when p is clicked', () => {
      const mockOnClick = jest.fn();
      const wrapper = shallow(
        <TodoItem toggleTodo={mockOnClick} {...mockProps} />
      );

      wrapper.find('[data-test="todo-text"]').simulate('click');
      wrapper.find('[data-test="todo-delete"]').simulate('click');

      expect(mockOnClick.mock.calls.length).toEqual(1);
    });

    it('calls deleteTodo only when button is clicked', () => {
      const mockOnClick = jest.fn();
      const wrapper = shallow(
        <TodoItem deleteTodo={mockOnClick} {...mockProps} />
      );

      wrapper.find('[data-test="todo-delete"]').simulate('click');
      wrapper.find('[data-test="todo-text"]').simulate('click');

      expect(mockOnClick.mock.calls.length).toEqual(1);
    });
  });

  describe('Snapshot Test', () => {
    it('matches current production snapshot', () => {
      const wrapper = shallow(<TodoItem {...mockProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
