import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
const [count,setCount] = useState(0);
let myobj= {
  name:"ojass",
  age:21
}
let newarr = [1,2,3]
    
  return (
    <>
    <h1 className='bg-green-400 text-black p-4
    p-4 rounded-xl mb-4 '>Tailwind test</h1>
    <Card channel='chaiaurcode' someobj= {newarr} btntext="click me  "/>
    <Card btntext=" visit me "/>
    <Card/>
    </> 
  ) 
}

//yaha buttons pe value dedi kya ye value reflect hogi web page pe?
// = nhi change hui kyuki sirf props pass karna hi thodi na kaam hai, proper. ko handle bhi toh karna padega 
//first handle it in card.jsx

// par har card apne andar ek alag info lega isko ham karenge props se 
// [[prtotype]] jab bhi square square brackets aaye toh it is hidden scope

export default App
// har image tag k closing bhi bna dena varna there will be errer as we need to return a single element
//tailwind is responsive too 

//devui.io se bhi components utha skte ho
 //margin-bottom  mb-4
 //props 

 //makes componenet reusable
 //ek baar aapne ek card bna liya toh us card ko ek component me rakh diya jaaye taaki it can be used again and again
