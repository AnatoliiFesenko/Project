import React, { useState, useEffect } from "react";

export const ToDoItems = () => {
  const [todos, setTodos] = useState([]);

  React.useEffect(() => {
    const getToDoData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setTodos(data);
      } catch (e) {
        console.log(e);
      }
    };
    getToDoData();
  }, []);

  todos.map((todo) => {
    todo.link = `http://localhost:3000/todos/${todo.id}`;
  });

  let newTodos = [];
  newTodos = todos.map((todo) => {
    return {
      title: todo.title,
      completed: todo.completed,
      id: todo.id,
      link: todo.link,
    };
  });

  return newTodos;
};
