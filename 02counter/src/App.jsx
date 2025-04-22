import { useState } from 'react'  // isse hooks aate hai
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setcounter] = useState(15)

  // counter being the variable which will be controlled using setCounter method

  // let counter = 10

  const addValue = () =>{
    console.log("value added",counter) 
    // counter = counter + 1
    setcounter(counter + 1)
 
    //or
    // counter = counter + 1
    // setcounter(counter)
  }

  const removeValue = () => {
    setcounter( counter - 1)
  }

  return (
   <>
   <h1>Chai aur React aur Ojas</h1>
   <h3>counter value : {counter}</h3>
   <button
   onClick = {addValue}>Add value : {counter}</button>
   <br/>
   <button onClick = {removeValue}>Remove value {counter}</button>
   </>
  )
}

export default App

// usestate being a hook isse do cheezein milti hai array ke form me
