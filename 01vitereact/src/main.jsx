import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'




function App(){
  return (
    <div>
      <h1>my custom app</h1>
    </div>
  )
}




// const ReactElement = {
//   type: 'a',
//   props: { 
//       href: "https://google.com",
//       target : "_blank"
//   },
//   children : "click me to visit google"
// }

// ye kyu nhi chal rha hai
// kyuki is custom react ke liye hamne custom render bhi likha tha par yha pe ham custom render ka code nhi likh rhe hai
// kyuki iska syntax shi nhi hai 



const anotherElement= (
  <a href="https://google.com" target= "_blank">Visit Google</a>
)


const anotheruser = "chai aur ojas"
const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google' // children to be inserted
  anotheruser //evaluated expression
)


// object ke andar aap if else vgera thodi na lgaate ho

createRoot(document.getElementById('root')).render(
    // myApp() run toh ye aese bhi hoga kyuki end of day react js hi hai
    // <ReactElement/> will not work too 
    // anotherElement // this will work
    //  <myApp/>
    // ReactElement
    <App/>

)


//agar app ek funtion hai toh kya mai function yahi oe declare kr skta hu
 
