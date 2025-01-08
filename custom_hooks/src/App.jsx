
//use swr created by versel 
// use debounce to delay data fetch from backend ie amazon search bar
import { useEffect, useState } from 'react'
import './App.css'

function useTodos(){
  const [todo, settodo] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(()=>{
    axis.get("")
  .then(res=>{
    settodo(res.data.todo);
    setloading(false)
  })
  },[])

  return {todo, loading};

}

function App() {
  const [todo, loading] = useTodos();

  if(loading){
    return <div> loading .. </div>
  }

  return (
    <>
    Hey i am back again
    </>
  )
}

export default App
