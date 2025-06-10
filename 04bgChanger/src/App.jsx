import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
     style = {{backgroundColor: color }} 
     >
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">test
     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">test2</div>
     <button
           onClick={() => setColor("red")}
           className="px-4 py-2 bg-white rounded shadow"
         >
           Red
        </button>
     <button
           onClick={() => setColor("green")}
           className="px-4 py-2 bg-white rounded shadow"
         >
           Green
        </button>
     <button
           onClick={() => setColor("blue")}
           className="px-4 py-2 bg-white rounded shadow"
         >
           Blue
        </button>
     </div>
     </div>
  )
}

export default App


// import { useState } from "react";

// function App() {
//   const [color, setColor] = useState("olive");

//   return (
//     <div
//       className="min-h-screen w-full duration-200 flex items-center justify-center"
//       style={{ backgroundColor: color }}
//     >
//       {/* Color Buttons Bar Fixed at Bottom */}
//       <div className="fixed flex flex-wrap justify-center gap-4 bottom-12 inset-x-0 px-4">
//         <button
//           onClick={() => setColor("red")}
//           className="px-4 py-2 bg-white rounded shadow"
//         >
//           Red
//         </button>
//         <button
//           onClick={() => setColor("blue")}
//           className="px-4 py-2 bg-white rounded shadow"
//         >
//           Blue
//         </button>
//         <button
//           onClick={() => setColor("green")}
//           className="px-4 py-2 bg-white rounded shadow"
//         >
//           Green
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

