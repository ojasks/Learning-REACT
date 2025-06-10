#difference between basic react and vite react
basic react has a folder build created one time
manifest.json mobile devices ke liye kaam aati hai
zyada tar ham src aur public folders me hi kaam karte hai
spa - single page application
whole work will happen on index.html
 

 src me js files hongi
 react ek khud ka bhi dom bnata hai jise ham virtual dom bolte hai
 dom ek tree structure hi tih hota hai

 The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

 sabse badi power react aapko deta hai jsx ki power
 yaani aap js ke through apne html elements ko render kr skte ho 
 aap apne custom tags bna paa rhe ho


 App basically ek function hai jo return karta hai html ko
 basically aap function me html return kr rhe ho
 aur vo html render ho jayega
  

basic questions ?
index.html  ke andar hamne kahi bhi js load kri hai kya?
 -- khi bhi nhi kari
 toh ye index,js apne aap kaise load hogayi
  
  package.json me react scripts hai
  very intelligent
  yehi hai jo chupke se index.html me index.js load krti hai


for proof

go to web page > page source > script defer src =  static bundle 
aur jab aap inspect krke dekhoge toh body me bohot saari cheezein milegi

-------yaha tak basic react ki baat hogayi


--------ab aate hai vite react pe 
isme hame di hai dependencies me sirf react aur react dom
we dont have react scripts
toh hamari html file ke andar react ki main file ya index file hai vo insert kon karega
 
 yaha pe index.html file bahar hi rakh rakhi hai
 inhone direct hi isko load kra diya hai
 they loaded in the basic manner source me jsx load krwa diya
  < script type ='module' src="/src/main.jsx/"> < script/>
  seedha . lga ke render method run kr dete hai
  strict mode aapko chahiye toh rakho varna hata do
   
   jab aap components bna te hai toh file ka naam jsx rkhte hai abhi ke liye js theek hai


   ab aati hai baat framework aur library me
   framework is very strict regarding naming and everything else
   whereas library is not bounded to keep certain names of files and folders

   here in basic react you can keep the file name .js or .jsx
   but in vite  you have to keep the file name as .jsx

now if you run app.jsx with chai after importing and changing name
it still wont run cause the name(of function and not the file name) is chai make it Chai 
the first letter should be capital


you can export only one element in jsx 

basiic react me start chalta hai

functions irrespective of react choose with capital first letter
good convention would also be to rename the file name to start with capital first letter(absence of this does'nt give error)

agar kuch lib se html return horha hai toh unka naam jsx rakho

mobile me use karna hota hai toh react native use krte hai


custom react----------------------
react aap ka jo bhi element hai na usse ek tree bnane ki koshish karta hai

----------------------------------------
vitual dom not used any more
create root function behind the scene creates a dom like structure

aapka browser kya krta hai pura dom remove krta hai aur pure dom ko vaapis se repaint krta hai
isi ko page reload bolte hai
 

read react fiber architecture on github 
so virtual dom hai abhi bhi par usko update krne vaali algorithm hai fiber 
ability to pause abort or reuse work as new updates come in
ability to assign priority to different types of updates

web layout me jab js inject hoti hai toh use hydration bolte hai
 reconciliation - react is an recursive algo which reconsiders ki kisko update karna hai aur kisko nhi
 the algorithm react uses to diff one tree with another

 react is a differentiation algorithm same as git
think of updates as updates = causing entire app to re render

reconciliation is the algo behind virtual dom
 
when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same. The key points are:

Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

The key points are:

In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

pause work and come back to it later.
assign priority to different types of work.
reuse previously completed work.
abort work if it's no longer needed.
In order to do any of this, we first need a way to break work down into units. In one sense, that's what a fiber is. A fiber represents a unit of work.


React Hooks are functions that let functional components use state and other React features, which were previously only available to class components.

// npm install -D tailwindcss postcss autoprefixer
-yeh hai tailwind ki dependencies
  tailwind akele nhi chalta hai usko thoda support lgta hai
  -D dev dependencies
  development ke time kaam aati hai
// npx tailwindcss init -p


main.jsx ko toh chehdenge nhi kyuki app.jsx ke andar saara kaam ho rha hai
 