import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './Pages/Head/HeadApp.tsx'
import LoginApp from './Components/LoginApp.tsx'
import CartApp from './Components/CartApp.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head />

      <main>
      <h1 className='gatos'>Gatos con droga</h1>
      <LoginApp />
      <CartApp />
      </main>
    </>
  )
}

export default App
