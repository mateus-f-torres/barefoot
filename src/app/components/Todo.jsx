//@flow
import * as React from 'react';

type Props = {
  onClick: () => mixed,
  completed: boolean,
  text: string
};

const Todo = (props: Props) => (
  <li
    id={props.id}
    style={
    {textDecoration: props.completed ? 'line-through' : 'none'}
    }
    onClick={props.toggleTodo}
  >
  {props.text}
  <button onClick={props.deleteTodo}>delete</button>
  </li>
)

export default Todo;
