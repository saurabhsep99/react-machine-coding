import { useState } from 'react'
import './App.css'
import NestedComponents from './components/nested-comments'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>Nested Comments</h1>
      <NestedComponents/>
     </div>
    </>
  )
}

export default App
