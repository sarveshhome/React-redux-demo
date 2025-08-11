import { useState } from 'react'
import { React } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from './components/ParentComponent'
import ParentComp from './components/CP/ParentComp'
import PaginationExample from './components/pagination/PaginationExample'
import Paginationwithmultioption from './components/pagination/Paginationwithmultioption'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      {/* <ParentComponent /> */}
      {/* <ParentComp></ParentComp> */}
      {/* <PaginationExample></PaginationExample> */}
      <Paginationwithmultioption></Paginationwithmultioption>
     </div>
    </>
  )
}

export default App
