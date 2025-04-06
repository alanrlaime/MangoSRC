import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ArticulosApp from './Pages/ArticulosApp.tsx'
import NoticiasApp from './Pages/NoticiasApp.tsx'
import RegistroApp from './Pages/RegistroApp.tsx'
import NavApp from './Components/Head/NavApp.tsx'

import { BrowserRouter, Routes, Route } from "react-router";


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <NavApp />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/articulos" element={<ArticulosApp />} />
      <Route path="/noticias" element={<NoticiasApp />} />
      <Route path="/iniciarsesion" element={<RegistroApp />} />
    </Routes>
  </BrowserRouter>,
)
