//in this project we will create  a currency converter
we will also learn to create our own custom hooks

1. sabse pehle ham apne src ke andar custom hook bnayenge
   toh basically theres nothing that difficult in creating custom hooks
   you are basically creating a function
   and agar vo jsx return nhi kar rha hai i.e if it also does'nt
   have html tags in it then it is only returning js so name it js
   aapke user-built hooks in-built hooks ko bhi access kr skte hai
   we will use useEffect and useState 
   api mai direct fetch se bhi call kr skta hu
   lekin mai yaha chahta hu ki jab ye hook load hoga ya isko koi
   use karega tab mai is hook ko call karu
   toh automatically in situations me fetch ko call krne ke liye
   we use useEffect
   isme hoti hai do cheezein ek function jo ki ham callback funtion ki trh
   lete hai aur dusri hoti hai dependencies, jin me jab bhi change hoga 
   tab mai api call karunga
   aapko jabhi json file se data milta hai vo json format me hota hai 
   par asal me vo string hota hai
   fetch me aap .then lga skte ho jitni marzi chahe aur hame .then
   me bhi callback milta hai
   agar mai fetch ka response ek normal variable me store krwa-lunga
   toh yeh problem hogi ki voh kbhi update nhi hoga
   ham object ko square brackets se bhi access kar skte hai in 
   addition to .
   toh yaha tak hamne custom hooks bna liye hai apne
2. now we create reusable components by creating a new folder in src
   saare componenets ko capital first letter se shuru karna
   and use in jsx
   agar aapko perfromance laani hai loop ke andar toh aakoi key use krni hi chahiye
3. now you can directly export but to optimize it you create another file say input.js 
   toh aapke jo bhi components hai aap unko yaha laate hai for isko import krte hai
   now in App.jsx you dont need to call index.js file as it is imported by default
   currencyInfo holds the values
   