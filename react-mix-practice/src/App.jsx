import { useState, Suspense, lazy } from 'react'
import { React } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'

// Lazy load all components
const ParentComponent = lazy(() => import('./components/ParentComponent'))
const ParentComp = lazy(() => import('./components/CP/ParentComp'))
const PaginationExample = lazy(() => import('./components/pagination/PaginationExample'))
const Paginationwithmultioption = lazy(() => import('./components/pagination/Paginationwithmultioption'))
const LoginDemoForUseActionState = lazy(() => import('./components/useActionState/LoginDemoForUseActionState'))

// Loading component
const LoadingFallback = () => (
  <div className="loading-state">
    <p>Loading...</p>
  </div>
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <nav style={{display:"flex", gap: "1em"}}>
      
          <Link to="/parrentComponent">ParentComponent</Link>
          <Link to="/pagination">Pagination</Link>
          <Link to="/paginationwithmultioption">Paginationwithmultioption</Link>
          <Link to="/paginationexample">PaginationExample</Link>
          <Link to="/logindemoforUseActionState">Login Demo for use Action state</Link>
        </nav>

        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/parrentComponent" element={<ParentComponent />} />
            <Route path="/pagination" element={<PaginationExample />} />
            <Route path="/paginationwithmultioption" element={<Paginationwithmultioption />} />
            <Route path="/paginationexample" element={<PaginationExample />} />
            <Route path="/LoginDemoForUseActionState" element={<LoginDemoForUseActionState />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
