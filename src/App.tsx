import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

    function maipulateCount(inc: boolean) {
    if (inc) 
      setCount((count) => count + 1);
    else if (count > 0)
      setCount((count) => count - 1);
  }

  return (
    <>
    <h3 className='text-3xl font-bold underline'>Admin Portal</h3>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Under Construction</h1>
      <div className="card">
        <button onClick={() => maipulateCount(true)}>
          Increase
        </button>
        <button onClick={() => maipulateCount(false)}>
          Decrease
        </button>
        <p>
          Count is {count}
        </p>
      </div>
    </>
  )
}

export default App
