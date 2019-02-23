//@flow
import * as React from 'react';
import styled from 'styled-components';

import {Button} from 'components/shared';

import type {Todo} from 'types/props';

import trash from 'assets/images/trash.png';

const ListItem = styled.li`
  display: flex;
  background-color: darkgrey;
  color: #1b1b1e;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  line-height: 45px;
  &:nth-child(2n) { 
    background-color: white;
    color: #666;
  }
`;

const ListItemText = styled.p`
  display: inline-block;
  width: 100%;
  padding-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: ${(props) => props.done ? 'line-through' : 'none'};
  &:hover {
    cursor: pointer;
  }
`;

const ListItemIcon = styled.img`
  width: 30px;
  heigth: 30px;
  position: relative;
  bottom: 5px;
`;

type Props = Todo & {
  toggleTodo: (SyntheticEvent<HTMLParagraphElement>) => void,
  deleteTodo: (SyntheticEvent<HTMLButtonElement>) => void,
};

// TODO think about prefer-destructuring
// when copying by value some property
// when copying by refs some method
function TodoItem(props: Props) {
  return (
    <ListItem id={props.id}>
      <ListItemText
        done={props.completed ? true : false}
        data-test="todo-text"
        onClick={props.toggleTodo}
      >
        {props.text}
      </ListItemText>
      <Button
        data-test="todo-delete"
        onClick={props.deleteTodo}
      >
        <ListItemIcon src={trash} />
      </Button>
    </ListItem>
  );
}

export default TodoItem;
