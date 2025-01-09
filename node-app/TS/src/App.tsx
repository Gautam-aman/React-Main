
import './App.css'

interface Todos{
  props: {
    title: string,
    items: string[]
  }
}

function Todos({props}: Todos){
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  

  return (
    <>
     <Todos {}/>
    </>
  )
}

export default App
