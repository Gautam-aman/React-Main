
import { useContext, useState } from 'react'
import './App.css'
import { countContext } from './context';

function App() {

  const [count , setCount] = useState(0);
  

  return (
    <>
     <countContext.Provider value = {count}>
      <Count setCount={setCount}/>
     </countContext.Provider>
    </>
  )
}

function CountRender(){
  const count = useContext(countContext);
  return <div>
    {count}
  </div>
}

function Count({setCount}){
  return <div>
    <CountRender/>
    <Buttons setCount={setCount}/>
  </div>
}

function Buttons({setCount}){
  const count = useContext(countContext);
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  </div>
}

export default App
