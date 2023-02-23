import React, {useState} from 'react'
import ToDoItem from './ToDoItem'

const toDoBase = [
    {
        _id: 1,
        name: 'macbook',
        isChecked: true,
    },
    {
        _id: 2,
        name: 'lenovo',
        isChecked: false,
    },
    {
        _id: 3,
        name: 'hp',
        isChecked: false,
    },
    {
        _id: 4,
        name: 'asus',
        isChecked: true,
    },
]

const ToDo = () => {

  const [name,setName] = useState('')

  return (
    <div>
        <h1>ToDo App</h1>
        {toDoBase.map((todo) => (
            <ToDoItem key={`_todo-${todo._id}`} 
            name={todo.name} 
            isChecked={todo.isChecked}
            />
         ))}

        <input 
            type='text' 
            value={name} 
            onChange={(event)=>setName(event.target.value)} 
            placeholder='Введите имя новой модели'
        />

    </div>
    )
}

export default ToDo
