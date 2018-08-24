//@flow
import * as React from 'react';
import type {Todo} from '../types/props.js';
import TodoItem from './TodoItem.jsx';
import 'Styles/TodoList.scss';

type Props = {
  todos: Array<Todo>,
  addTodo: (string) => void,
  toggleTodo: (number) => number,
  removeTodo: (number) => number,
};

class TodoList extends React.Component<Props> {
  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget) {
      // $FlowFixMe, 'maybe-there' flow error
      let text = e.currentTarget.childNodes[0].value;
      if (!text.trim()) return;
      this.props.addTodo(text);
      // $FlowFixMe, 'maybe-there' flow error
      e.currentTarget.childNodes[0].value = '';
    }
  }

  toggleTodo = (e: SyntheticEvent<HTMLParagraphElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // $FlowFixMe, 'maybe-there' flow error
    let id = e.currentTarget.parentNode.id;
    id = Number.parseInt(id);
    this.props.toggleTodo(id);
  }

  deleteTodo = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // $FlowFixMe, 'maybe-there' flow error
    let id = e.currentTarget.parentNode.id;
    id = Number.parseInt(id);
    this.props.removeTodo(id);
  }

  render() {
    return (
      <form data-test="todo-submit" onSubmit={this.handleSubmit}>
        <input data-test="todo-input" type="text" placeholder="Add todo" />
        <button type="submit" />
        <ul data-test="todo-list">
          {
            this.props.todos.map((todo) => (
              <TodoItem
                key={todo.id}
                toggleTodo={this.toggleTodo}
                deleteTodo={this.deleteTodo}
                {...todo}
              />
            ))
          }
        </ul>
      </form>
    );
  }
}

export default TodoList;

