import React from 'react'

import './TodoList.css'
import TodoListItem from './TodoListItem'
import Button from 'components/shared/Button'

class TodoList extends React.Component {
  // TODO: change to hooked fn component
  // TODO: make arrow fn too
  // TODO: get value from input tag without using event
  handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const text = e.currentTarget.childNodes[0].value
    if (!text.trim()) return
    this.props.addTodo(text)
    e.currentTarget.childNodes[0].value = ''
  }

  toggleTodo = (id) => {
    this.props.toggleTodo(id)
  }

  deleteTodo = (id) => {
    this.props.removeTodo(id)
  }

  render() {
    return (
      <form className="todo" onSubmit={this.handleSubmit}>
        <input className="todo__submit" type="text" placeholder="Add todo" />
        <Button type="enter" />
        <ul className="todo__list">
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
        </ul>
      </form>
    )
  }
}

export default TodoList
