// import React, {useState, useContext} from "react";
// import UserContext from "../Context/UserContext";

// function Login(){
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const {setUser} = useContext(UserContext)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setUser({username,password})
//      }
//     return(

//         <div>
//         <h2 > Login </h2>
//         <input 
//         type="text"
//         value={username} 
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="username"
//         />
//         <input 
//         type='password' 
//         value={password} 
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="password"
//         />
//         <button onClick={handleSubmit}>Submit</button>
//         </div>
//     );
// }
// export default Login


import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-white to-blue-100 bg-cover bg-fixed"
    style={{ backgroundImage: `url("https://images.pexels.com/photos/32262818/pexels-photo-32262818/free-photo-of-stylish-individual-leaning-against-dark-wall.jpeg")`, backgroundPosition: '60% 30%'  
    }}
    >
      <div className="w-full max-w-4xl p-8 bg-white rounded shadow-lg flex flex-col md:flex-row items-center">
        {/* Left Info Box */}
        <div className="md:w-1/2 p-6 bg-red-800 text-white rounded mb-6 md:mb-0 md:mr-4">
          <h2 className="text-2xl font-bold mb-4">Thapar Institute–Learning Management System</h2>
          <p className="text-sm">
            ⚠️ Cookies must be enabled in your browser<br /><br />
            <strong>Is this your first time here?</strong><br />
            TIET has already emailed username and password to your @thapar.edu email.
            If you face issues, contact support at <br />
            <a href="https://eticket.thapar.edu" className="underline text-blue-200">eticket.thapar.edu</a>
            with your registered email.<br /><br />
            Stay Safe and Stay Healthy.
          </p>
        </div>

        {/* Right Login Form */}
        <div className="md:w-1/2 p-6">
          <h3 className="text-xl font-semibold mb-4">Already have an account?</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="px-4 py-2 border rounded"
              required
             /> {"   "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="px-4 py-2 border rounded"
              required
            />
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="accent-red-800" />
              <span>Remember username</span>
            </label>
            <button
              type="submit"
              className="bg-red-800 text-white py-2 rounded hover:bg-red-700 transition"
            >
              Log in
            </button>
            <a href="#" className="text-sm text-red-800 underline text-center">Forgotten your username or password?</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
