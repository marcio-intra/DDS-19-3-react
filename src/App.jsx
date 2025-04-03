import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return(
    <>
      <NavBar />
      <Outlet /> 
      {/* //Renderiza os elementos em MyRouter dinamicamente */}
    </>
  )
}

export default App;