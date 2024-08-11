import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  
  const [counter , setCounter] = useState(10);

  const addvalue = () => {
  if(counter == 20){
    setCounter(counter);
    console.log( "max value" , counter);
  }else{
    setCounter(counter + 1)
    console.log( "Current counter ",counter)
  }
} 

const removeValue = () => {
  if(counter <= 0){
    setCounter(counter)
    console.log( "min value" , counter);
    
  }else{
    setCounter(counter - 1)
    console.log( "Current counter ",counter)
  }
}


  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick = {addvalue}
      >Add value {counter}
      </button>
      <br />
      <button onClick={removeValue}
      >Remove value {counter}
      </button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
