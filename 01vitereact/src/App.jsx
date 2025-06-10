
import Chai from "./chai"

function App() {
  const username = "chai aur code" 
  return (
    // <h1>Chai Aur React with vite | Ojas </h1> // you cant write this because you can only import one element
    //one thing you can do is encase everything withing inside one other element
    //fraGment empty tag you can also return fragment
    // <div>
    // <Chai/> // ye karega problem kyuki chai ko import kra hi nhi hai
    // <h1>Chai Aur React with vite | Ojas </h1>
    // </div>
    <>
    <Chai/> 
    <h1>Chai Aur React with vite | Ojas {username} </h1>
    <p>test para</p>
    </>
  )
}

export default App

// {username}  --> evaluated expression matlab mai yaha pe final outcome likhunga if check vgera sab mai upar karunga
