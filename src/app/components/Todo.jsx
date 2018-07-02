//@flow
import * as React from 'react';
import 'Styles/Todo.scss';

type Props = {
  onClick: () => mixed,
  completed: boolean,
  text: string
};

const Todo = (props: Props) => (
  <li onClick={props.onClick} style={
    {textDecoration: props.completed ? 'line-through' : 'none'}
  }>
  {props.text}
  </li>
)

export default Todo;