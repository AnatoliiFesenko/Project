import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Main'
import AllToDos from './AllToDos'
import OnePage from './OnePage'

const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/all' element={<AllToDos />}/>
            <Route path='/todos' element={<OnePage/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}




export default AllRoutes
