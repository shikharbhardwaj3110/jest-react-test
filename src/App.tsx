import { useState } from 'react'
import './App.css'

function App() {
  const a : number = 1
  const b : number = 2;
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Hello world</h1>
      <span title='sum'>{a+b}</span>
    </>
  )
}

export default App
