import {connect} from 'react-redux';

import {addTodo, toggleTodo, removeTodo} from 'ducks/todos';
import TodoList from './TodoList';

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
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

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
