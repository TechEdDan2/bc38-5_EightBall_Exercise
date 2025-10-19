import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EightBall from './components/EightBall.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Vite + React Eight Ball</h1>

      <EightBall />

      <p className="read-the-docs">
        Ask your Question and Click on the Ball
      </p>
    </>
  )
}

export default App
