import React from 'react'

import './TodoList.css'
import TodoListItem from './TodoListItem'
import Button from '../shared/Button'

function TodoList(props) {
  const inputRef = React.useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    const text = inputRef.current.value
    if (text.trim()) {
      props.addTodo(text)
      inputRef.current.value = ''
    }
  }

  return (
    <form className="todo" onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        className="todo__submit"
        placeholder="Add todo"
      />
      <Button type="submit" />
      <ul className="todo__list">
        {Object.entries(props.todos).map(([key, value]) => (
          <TodoListItem
            key={key}
            id={key}
            text={value.text}
            completed={value.completed}
            toggleTodo={(id) => props.toggleTodo(id)}
            deleteTodo={(id) => props.removeTodo(id)}
          />
        ))}
      </ul>
    </form>
  )
}

export default TodoList
