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

const TodoList = (props: Props) => (
  <ul>
    {props.todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => props.toggleTodo(todo.id)} />
      )
    )}
  </ul>
)

export default TodoList;