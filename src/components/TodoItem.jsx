//@flow
import * as React from 'react';
import type {Todo} from '../types/props.js';

type Props = Todo & {
  toggleTodo: (SyntheticEvent<HTMLParagraphElement>) => void,
  deleteTodo: (SyntheticEvent<HTMLButtonElement>) => void,
};

const TodoItem = (props: Props) => (
  <li id={props.id}>
    <p data-test="todo-text" onClick={props.toggleTodo}
      className={props.completed ? 'done' : null}>
      {props.text}
    </p>
    <button data-test="todo-delete" onClick={props.deleteTodo}>delete</button>
  </li>
);

export default TodoItem;
