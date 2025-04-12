import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'
import ArticulosApp from './Pages/ArticulosApp.tsx'
import NoticiasApp from './Pages/NoticiasApp.tsx'
import RegistroApp from './Pages/RegistroApp.tsx'
import HeadApp from './Components/Head/HeadApp.tsx'
import NavApp from './Components/Head/NavApp.tsx'

import {Routes, Route} from "react-router";
import InicioApp from './Pages/InicioApp.tsx'

function App() {
  const location = useLocation(); 
  const getLocal = () => {
    switch (location.pathname) {
      case "/":
        return "inicio";
      case "/articulos":
        return "ArticuloApp";
      case "/noticias":
        return "noticia";
      case "/iniciarsesion":
        return "iniciarsecion";
      default:
        return "inicio";
    }};
  return (
    <>
      <NavApp />
      <HeadApp promp={getLocal()}/>
      <main>
      <Routes>
        <Route path="/" element={<InicioApp /> } />
        <Route path="/articulos" element={<ArticulosApp />} />
        <Route path="/noticias" element={<NoticiasApp />} />
        <Route path="/iniciarsesion" element={<RegistroApp />} />
      </Routes>
      </main>
    </>
  )
}

export default App
