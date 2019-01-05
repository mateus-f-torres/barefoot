//@flow
import {connect} from 'react-redux';
import {addTodo, toggleTodo, removeTodo} from 'Stores/todos/actions';
import type {State} from 'Types/state';

import TodoList from './TodoList';

function mapStateToProps(state: State) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch: *) {
  return {
    addTodo(text) {
      dispatch(addTodo(text));
    },
    toggleTodo(id) {
      dispatch(toggleTodo(id));
    },
    removeTodo(id) {
      dispatch(removeTodo(id));
    },
  };
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
