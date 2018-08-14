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
  constructor(props: Props) {
    super(props);
    (this: any).handleSubmit = this.handleSubmit.bind(this);
    (this: any).toggleTodo = this.toggleTodo.bind(this);
    (this: any).deleteTodo = this.deleteTodo.bind(this);
  }

  handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget[0]) {
      // $FlowFixMe
      let text = e.currentTarget[0].value;
      if (!text.trim()) return;
      this.props.addTodo(text);
      // $FlowFixMe
      e.currentTarget[0].value = '';
    }
  }

  toggleTodo(e: SyntheticEvent<HTMLUListElement>) {
    e.preventDefault();
    e.stopPropagation();
    let id = e.currentTarget.id;
    id = Number.parseInt(id);
    this.props.toggleTodo(id);
  }

  deleteTodo(e: SyntheticEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    // $FlowFixMe
    let id = e.currentTarget.parentNode.id;
    id = Number.parseInt(id);
    this.props.removeTodo(id);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add todo" />
        <button type="submit" />
        <ul>
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

