import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../MainPage/Main";
import ToDoList from "../ToDoList/ToDoList";
import ToDo from "../ToDo/ToDo";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todos" element={<ToDoList />} />
        <Route path="/todos/:id" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
