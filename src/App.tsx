import { useState } from 'react'
import './App.css'
import NestedComponents from './components/nested-comments'
import FormWithValidation from './components/form-with-validation'
import TransferableLlist from './components/transferable-list'
import ProgressBar from './components/progerss-bar'
import CustomTabs from './components/custom-tabs'
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

      {/* <h1>Progress Bar</h1>
        <ProgressBar/> */}

{/* <h1>Transferable List</h1>
        <TransferableLlist/> */}

<h1>Custom Tabs</h1>
        <CustomTabs/>

     </div>
    </>
  )
}

export default App
