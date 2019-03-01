//@flow
import {connect} from 'react-redux';

import {
  addTodoAction,
  toggleTodoAction,
  removeTodoAction,
} from 'ducks/todos';

import type {State} from 'types/state';

import TodoList from 'components/todolist';

function mapStateToProps(state: State) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch: *) {
  return {
    addTodo(text) {
      dispatch(addTodoAction(text));
    },
    toggleTodo(id) {
      dispatch(toggleTodoAction(id));
    },
    removeTodo(id) {
      dispatch(removeTodoAction(id));
    },
  };
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
