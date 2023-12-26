import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import { ToastContainer } from 'react-toastify'
import Home from './components/Home';
import Pnf from './components/Pnf';
import Update from './components/Update';
import Create from './components/Create';


const App = () => {
  return (
    <BrowserRouter>
      <Menu/>
      <ToastContainer autoClose={3000} position={'top-right'}/>
      <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/create`} element={<Create/>}/>
        <Route path={`/update/:id`} element={<Update/>}/>
        <Route path={`/*`} element={<Pnf/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App