import { useState } from 'react'
import reactLogo from './assets/react.svg'
import fbLogo from '/facebook-48.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={fbLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Week-4 Assignment4</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          More {count}
        </button>
      </div>
    </>
  )
}

export default App
