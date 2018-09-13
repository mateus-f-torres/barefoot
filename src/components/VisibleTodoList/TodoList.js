//@flow
import * as React from 'react';
import styled from 'styled-components';
import type {Todo} from 'Types/props.js';
import TodoItem from './TodoItem.js';
import Button from 'Components/common/Button';

const MAIN_TEXT= '#1b1b1e';
const HEADER_BACK= '#1b3039';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 18px;
  color: ${MAIN_TEXT};
  background-color: #f7f7f7;
  width: 100%;
  padding: 13px 13px 13px 20px;
  box-sizing: border-box;
  border: 3px solid rgba(0,0,0,0);
  &:focus {
    border: 3px solid ${HEADER_BACK};
    outline: none;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

type Props = {
  todos: Array<Todo>,
  addTodo: (string) => void,
  toggleTodo: (number) => number,
  removeTodo: (number) => number,
};

class TodoList extends React.Component<Props> {
  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget) {
      // $FlowFixMe, 'maybe-there' flow error
      let text = e.currentTarget.childNodes[0].value;
      if (!text.trim()) return;
      this.props.addTodo(text);
      // $FlowFixMe, 'maybe-there' flow error
      e.currentTarget.childNodes[0].value = '';
    }
  }

  toggleTodo = (e: SyntheticEvent<HTMLParagraphElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // $FlowFixMe, 'maybe-there' flow error
    let id = e.currentTarget.parentNode.id;
    id = Number.parseInt(id);
    this.props.toggleTodo(id);
  }

  deleteTodo = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // $FlowFixMe, 'maybe-there' flow error
    let id = e.currentTarget.parentNode.id;
    id = Number.parseInt(id);
    this.props.removeTodo(id);
  }

  render() {
    return (
      <Form
        data-test="todo-submit"
        onSubmit={this.handleSubmit}>
        <Input
          data-test="todo-input"
          type="text"
          placeholder="Add todo" />
        <Button type="submit" />
        <List data-test="todo-list">
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
        </List>
      </Form>
    );
  }
}

export default TodoList;

