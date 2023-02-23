import React from 'react'

const ToDoItem = ({ name, isChecked }) => {
  return (
    <div>
      <input type='checkbox' checked={isChecked} />
      <span className='name'>{name}</span>
    </div>
  )
}

export default ToDoItem
