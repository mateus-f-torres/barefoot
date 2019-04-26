import React from 'react';
import styled from 'styled-components';

import {Button} from 'components/shared';
import {TodoListItem} from 'components/todolist';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 18px;
  color: #1b1b1e;
  background-color: #f7f7f7;
  width: 100%;
  padding: 13px 13px 13px 20px;
  box-sizing: border-box;
  border: 3px solid rgba(0,0,0,0);
  &:focus {
    outline: none;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

class TodoList extends React.Component {
  // TODO: change to hooked fn component
  // TODO: make arrow fn too
  // TODO: get value from input tag without using event
  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let text = e.currentTarget.childNodes[0].value;
    if (!text.trim()) return;
    this.props.addTodo(text);
    e.currentTarget.childNodes[0].value = '';
  }

  toggleTodo = (id) => {
    this.props.toggleTodo(id);
  }

  deleteTodo = (id) => {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <Form data-test="todo-submit" onSubmit={this.handleSubmit}>
        <Input data-test="todo-input" type="text" placeholder="Add todo" />
        <Button type="submit" />
        <List data-test="todo-list">
          {
            Object.entries(this.props.todos).map(([key, value]) => (
              <TodoListItem
                key={key}
                id={key}
                text={value.text}
                completed={value.completed}
                toggleTodo={this.toggleTodo}
                deleteTodo={this.deleteTodo}
              />
            ))
          }
        </List>
      </Form>
    );
  }
}

export default TodoList;
