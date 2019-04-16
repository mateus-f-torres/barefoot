import * as React from 'react';
import styled from 'styled-components';

import {Button} from 'components/shared';
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

function TodoItem({id, completed, text, toggleTodo, deleteTodo}) {
  return (
    <ListItem>
      <ListItemText done={completed ? true : false} onClick={() => toggleTodo(id)}>
        {text}
      </ListItemText>
      <Button data-test="todo-delete" onClick={() => deleteTodo(id)}>
        <ListItemIcon src={trash} />
      </Button>
    </ListItem>
  );
}

export default TodoItem;
