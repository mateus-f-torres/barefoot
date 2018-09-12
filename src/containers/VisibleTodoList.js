//@flow
import {connect} from 'react-redux';
import {addTodo, toggleTodo, removeTodo} from '../actions';
import TodoList from '../components/TodoList.js';
import type {State} from '../types/state.js';

const mapStateToProps = (state: State) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch: *) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text));
    },
    toggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
    removeTodo: (id) => {
      dispatch(removeTodo(id));
    },
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
