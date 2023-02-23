import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../components/Main'
import AllToDos from '../components/todos/AllToDos'
import SingleToDoPage from "../pages/SignleToDoPage";

const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/todos' element={<AllToDos />}/>
            <Route path='/todos/:id' element={<SingleToDoPage />}/>
        </Routes>
    </BrowserRouter>
  )
}




export default AllRoutes
