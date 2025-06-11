import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
   // useref hook
   const passwordRef = useRef(null) // abhi koi reference nhi hai

  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [characterAllow, setCharacterAllow,] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(() => {
 
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) string +="123456789"
    if (characterAllow) string +="~!@#$%^&*(){}[]_-=+"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor((Math.random() * string.length + 1))
      pass  +=  string.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllow, characterAllow, setPassword])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select() 
    passwordRef.current?.setSelectionRange(1,6)
    window.navigator.clipboard.writeText(password)}, [password])
  useEffect( () => {passwordGenerator()}, [length, numberAllow, characterAllow, passwordGenerator]  )
  return (
    <> 
    <div className='w-full max-w-md mx-auto shadow-mg rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'> Password Generator</h1>
      <div className='className= " flex shadow rounded-lg overflow-hidden mb-4"'>
        <input 
        type= "text"
        value = {password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        {/* <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>Copy</button> */}
        <button
  onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 active:bg-blue-900 transition-all duration-150 text-white px-3 py-0.5 shrink-0 rounded'
>
  Copy
</button>

      </div>
      <div className= 'flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type='range'
          min={6}
          max={100}
          value = {length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input 
          type='checkbox'
          defaultChecked={numberAllow}
          id='numberInput'
          onChange={(e) => setNumberAllow((prev) => !prev )}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input 
          type='checkbox'
          defaultChecked={characterAllow}
          id='characterInput'
          onChange={(e) => setCharacterAllow((prev) => !prev )}
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
