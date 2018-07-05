//@flow
import * as React from 'react';
import Todo from './Todo.jsx';
import 'Styles/TodoList.scss';

type Props = {
  todos: Array<{
    id: number,
    completed: boolean,
    text: string
  }>,
  toggleTodo: (number) => number
};

class TodoList extends React.Component {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let text = e.target[0].value;
    if(!text.trim()) return;
    this.props.addTodo(text);
    e.target[0].value = '';
  }

  toggleTodo(e) {
    let id = e.target.id;
    id = Number.parseInt(id);
    this.props.toggleTodo(id);
  }

  deleteTodo(e) {
    e.preventDefault();
    e.stopPropagation();
    let id = e.target.parentNode.id;
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
              <Todo
                key={todo.id}
                toggleTodo={this.toggleTodo}
                deleteTodo={this.deleteTodo}
                {...todo}
              />
            ))
          }
        </ul>
      </form>
    )
  }
}

export default TodoList;

