
// import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from "./components/Login"
import Profile from "./components/Profile"



function App() {
  return (
    <UserContextProvider>
      <h1>There's no-one coming to save you, you gotta do it on your own.</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
    // <h1 className='text-black py-3 px-10 shadow-lg shadow-gray-600'>Ojas are u there?</h1>
  );
}

export default App;
