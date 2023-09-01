import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import './App.css'
import BarraDeNavegacion from './Components/BarraDeNavegacion/BarraDeNavegacion';
import Login from './Components/BarraDeNavegacion/login/Login';

function App() {

  return (
    <>
    <BarraDeNavegacion />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/login' element = {<Login/>}/>
    </Routes>
    </>
  )
}

export default App