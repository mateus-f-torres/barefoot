//@flow
import * as React from 'react';
import type {Todo} from '../types/props.js';

type Props = Todo & {
  toggleTodo: (SyntheticEvent<HTMLUListElement>) => void,
  deleteTodo: (SyntheticEvent<HTMLButtonElement>) => void,
};

const TodoItem = (props: Props) => (
  <li id={props.id} onClick={props.toggleTodo}
    style={
      {textDecoration: props.completed ? 'line-through' : 'none'}
    }>
    {props.text}
    <button onClick={props.deleteTodo}>delete</button>
  </li>
);

export default TodoItem;
