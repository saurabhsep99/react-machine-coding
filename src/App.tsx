import { useState } from 'react'
import './App.css'
import NestedComponents from './components/nested-comments'
import FormWithValidation from './components/form-with-validation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      {/* <h1>Nested Comments</h1>
      <NestedComponents/> */}

      <h1>Form With Validation</h1>
        <FormWithValidation/>
     </div>
    </>
  )
}

export default App
