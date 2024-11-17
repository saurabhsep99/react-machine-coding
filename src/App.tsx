import { useState } from 'react'
import './App.css'
import NestedComponents from './components/nested-comments'
import FormWithValidation from './components/form-with-validation'
import TransferableLlist from './components/transferable-list'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      {/* <h1>Nested Comments</h1>
      <NestedComponents/> */}

      {/* <h1>Form With Validation</h1>
        <FormWithValidation/>
     </div> */}

<h1>Transferable List</h1>
        <TransferableLlist/>
     </div>
    </>
  )
}

export default App
