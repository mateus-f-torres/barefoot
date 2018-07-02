//@flow
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList.jsx';
import { VisibilityFilters } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
  case VisibilityFilters.SHOW_ALL:
    return todos;
  case VisibilityFilters.SHOW_COMPLETED:
    return todos.filter((t) => t.completed);
  case VisibilityFilters.SHOW_ACTIVE:
    return todos.filter((t) => !t.completed);
  default:
    throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id))
  };
};

/*
container = connect(
  mapStateToProps,
  mapDispatchToProps
)(presentational-component);
*/
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
