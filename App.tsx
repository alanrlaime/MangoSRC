import { useState } from 'react'
import './App.css'
import ArticulosApp from './Pages/ArticulosApp.tsx'
import NoticiasApp from './Pages/NoticiasApp.tsx'
import RegistroApp from './Pages/RegistroApp.tsx'
import HeadApp from './Components/Head/HeadApp.tsx'
import NavApp from './Components/Head/NavApp.tsx'

import { BrowserRouter, Routes, Route, RouterProvider } from "react-router";
import InicioApp from './Pages/InicioApp.tsx'

function App() {
  const [act, setAct] = useState("inicio")

  return (
    <>
      <NavApp />
      <HeadApp promp={Route.name}/>
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
