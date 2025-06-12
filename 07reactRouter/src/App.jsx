import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

// import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Header/>
    <Footer/>
    <Home/>
    </div>
    </>
  )
}

export default App
