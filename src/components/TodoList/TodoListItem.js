import React from 'react'

import './TodoListItem.css'
import trash from 'assets/images/trash.png'
import Button from 'components/shared/Button'

function TodoItem({id, completed, text, toggleTodo, deleteTodo}) {
  const onClick = () => toggleTodo(id)
  const className = `todo__list__item__text ${completed ? '-done' : ''}`

  return (
    <li className="todo__list__item">
      <p className={className} onClick={onClick}>
        {text}
      </p>
      <Button onClick={() => deleteTodo(id)}>
        <img className="todo__list__item__img" src={trash} />
      </Button>
    </li>
  )
}

export default TodoItem
