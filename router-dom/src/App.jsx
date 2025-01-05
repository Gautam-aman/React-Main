import { BrowserRouter, Route , Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Suspense } from 'react'
import { lazy } from 'react';
const Dash = lazy(()=> import('./component/dash'))


function App() {
 return (
  <>
  <BrowserRouter>
  <Appbar/>
  <Routes>
    <Route path='/dashboard'  element={<Suspense fallback={"Loading..."}> <Dash/></Suspense>}></Route>

  </Routes>
  </BrowserRouter>

  </>
 )
}

function Appbar(){
  const navigate = useNavigate();
  return (
    <button onClick={()=>{
      navigate("/dashboard")
    }}>Dashboard</button>
  )

}

export default App
