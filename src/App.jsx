import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import './App.css'
import Login from './Components/Login/Login';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element = {<Login/>}/>
    </Routes>
    </>
  )
}

export default App