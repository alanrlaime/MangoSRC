import { useState } from 'react'
import './App.css'
import Head from './Components/Head/HeadApp'
import LoginApp from './Components/LoginApp'
import CartApp from './Components/CartApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head />

      <main>
      <h1 className='gatos'>Otro tipo de gatos Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dicta maxime. Commodi libero fugit dignissimos iure labore sit est. Dolorum saepe consequuntur ducimus, beatae tenetur voluptates. Dicta nostrum eum culpa.</h1>
      <LoginApp />
      <CartApp />
      </main>
    </>
  )
}

export default App
