import React from 'react'

import './TodoListItem.css'
import Button from '../shared/Button'
import trash from '../../assets/images/trash.png'

function TodoItem(props) {
  const onClick = () => props.toggleTodo(props.id)
  const className = `todo__list__item__text ${props.completed ? '-done' : ''}`

  return (
    <li className="todo__list__item">
      <p className={className} onClick={onClick}>
        {props.text}
      </p>
      <Button onClick={() => props.deleteTodo(props.id)}>
        <img className="todo__list__item__img" src={trash} />
      </Button>
    </li>
  )
}

export default TodoItem
