OKay starting react again
2nd video of react aur code
vite is a bundler
for mobile appli - react native
for web - react dom
to install node packets we have npm npde packet manager
later we got npx to directly execute

sabse pehle package.json is the entry point 
start from here
react and react dom are two main libraries
if u see your package.json
u can run your start script
 // npm run start
 //npm run build
for it you get a build folder

ham vite ke through react ka ek project bnayenge
 //npm create vite@latest
 to run scripts
 we use 
  // npm run ..
we dont have node modules folder in viteReact whereas in basicReact we do
for that
 // npm install
to download all the missing folders - >node modules
then
 // npm run dev

delete faaltu ki files for now
setupTests.js
reportVitals.js
logo.svg
app test.js
app.css
index.css
just for now

now remove from src
assests
app.css
index.css
here we have library which is more flexible in terms of naming wheras framework is not
npm run dev in vite2react

now we also know how to clean the project
*****************************------------------------------------------***********
VIDEO-3

whenever js works it works alone
it is always called into html
you need to call the scripts by using script tag in html page to call the scripts from js
manifest file in src is useful when appli. is opened in mobiles
robots.txt is for our search engine

index.html is the only page that is loaded 
thats why its called a single page application

inside src folder our main entry point is 
index.js
react creates its own virtual dom which is then compared to the original dom
to know whats missing
its basical;y a data structure
DOM - Document object model
tree structure on your webpage
for JS-
Your HTML page is like a Lego model. The DOM is a JavaScript representation of that model, where:
Each HTML element (like <p>, <div>, <button>) is a node in the tree.
You can use JavaScript to see, change, add, or remove these elements.

In React, there's a special version of the DOM called the:
virtual dom
It’s a copy of the real DOM kept in memory.
React updates this virtual DOM first, then efficiently updates only the changed parts in the real DOM.
Directly updating the real DOM is slow 🐢
React's virtual DOM lets it figure out what exactly changed and update only that 🏎️

here we are able to render app tag
so in a way we can create our own custom tags
react gives you way to render html
toh ham apni js ke through html likh paa rhe hai

basic react me scripts ke through js load ho rhi thi index.html me
vite reacts me script tag ke through ho rhi hai load

vite kehti hai ki aap jab bhi koi component bnao toh uska naam jsx se rkho
you cant use chai.js
you have to use chai.jsx
function ka naam capital letter se shuru hona chahiye
import bhi function karte hai from file
aap jsx me bas ek element import kr skte ho

now ab basicreact me ham chai.js hi rkh skte hai file ka naam
yaha pe function ka first letter capital hi rhega
file ka kaise bhi rkh skte ho aap

ye chai.js in basic react ek COMPONENT HAI
ye jo functions aap import kr rhe hai ye COMPONENTS hi hai
good practice would also ki aap file ke naam ka pehla letter capitalize kr do

kuch lib aapko force karengi ki unka naam jsx rkhoo just like vite react
ham ek basic convention follow karte hai ki agar kuch html bhi return ho rha hai toh ham uska naam 
jsx me rakhte hai varna sirf js me rakhte hai

single page applli isliye bhi kehte hai kyuki ek hi div hai hamare paas aur 
ham isi page me cheezein insert kar rhe hai aur nikal rhe hai
*****************************------------------------------------------***********
VIDEO 4
we will create our own custom react
for that we create customreact.js
and index.html
in customreact.js
we firsst create maincontainer 
ham apne root ke andr kuch methods ya elements insert krna chahte hai

for that we create a method call customrender(reactelement,maincontainer)
we inject reactelement in main container
ab method jis function ko call karega vo bhi bna lete hai
function customrender(reactelement, container){

    <!-- in this we first create a dom element which will create an element through
    reactelement though it can also create directly
     so we first asks its type 
     reactelement.type
     we then set the innnerHTML Of domelement to children of reactelement
     domelement ka setattribute ham reactelement.props.href rakhenge
     aur uskaek aur attribute ham reactelement.props.target rakhenge
     aakhri me 
     conatainer.appendChild(domelement)
      -->
      ab isko thoda modular bnaate hai
      const domelement = document.createElement(reactElement.type)
      domelelement.innerHTML = reactelememt.children
      for (const prop in reactelement.props){
        if(prop === 'children' ) continue
        domelement.setAttribute(prop, reactelement.props[prop])
      }
      container.appendChild(domelement)
} 


ham main.jsx in vite react me directly koi function likh ke bhi chala skte hai

har react ek bundler use krta hai jaise vite vgera
react ko html vaala syntax nhi smjh aata isliye ham use krte hai jsx
 toh jo normal html vaala syntax hota hai uski hoti hai parsing to be converted into
  toh jo hamara reactelement hai agar ham usko direct root pe daalde toh compiler ka ham ek step bacha lenge
  kyuki agar kuch html me hoga toh voh ultimately parse ho rha hoga
  toh ham likhte hai
 
 // reactelement() -> it does not work
 // Reactelement() -> it does not work still
 // Reactelement -> as it is an ibject not an function we need to write it this way
 but still no result

 ab ham dekhenge ki app.jsx me variables kaise insert karenge
 we will by using curly brackets and putting the variable in them

 suppose in app function we define 
 const username as username ="chai aur google aur ojas"
 so we can put it in inside like
 <h1>{username}</h1>
 like this

 {username} isko ham bolte hai evaluative expression
 iska matlab hai mai yaha pe final outcome likhunga
 jo bhi evaluation ka kaam hai vo aap sab baahr karo

 ham apne main container me root ko query karke utha lo
  fir hame chahiye ek render method jo elements le aur usko container ke andar daalde

  babel ki inject karta hai jo ki ek transpiler hai yeh react me elements inject krta hai
*****************************------------------------------------------***********

//video 5

// npm create vite@latest
 

 let counter =15
const addValue = () => {
  console.log('clicked', counter)
  counter = counter + 1 
}

}
 <button onClick={addValue}>Add value</button>
 <button></button> 


 ab value updated kyu nhi show ho rhi 
 problem aati hai ui updation me

 "ek variable update hote hi har jagah react krti hai"

 agar hame har cheez ko js me update krna pade toh refernces ekaathe hojaate bohot saare
 yehi kaam react aasani se kr deta hai
 agar ui me update hoga toh i will control the game - REACT

 react-dom me bohot saare hooks hote hai
 har ek hook ka ek kaam hai, ki voh itna hi krega


 toh ab hame upar vaali problem me karna padega hook ka use
 hook aata kaha se hai ---- import {useState} from React se aata hai
hame pure app.jsx me khi bhi react import krne ki zarurat nhi pdi because babel usko already inject kr deta hai

so now we use usestate hook 
- responsible to change the state 
change ka matlab ye nhi ki update krna
change ko propogate kiya jaata hai aapke ui ke andar


useState(here we give the default value here for example 15)
useState se aapko do cheezein milti hai array ke format me
const [first place pe jo cheez milti hai COUNTER, doosri place pe jo cheez milti hai vo hota hai ek function jisko ham
usually setCounter bolte hai]
so basically setcounter ek method hai jo ki control krega counter variable jo ab iska naam kuch bhi ho skta hai

function App(){
  let [counter, setCounter] = useState(15)
  const addValue = () => {
    console.log("clicked", counter)
    counter = counter + 1
    setcounter(counter)
  }
}
aur haanji const ki jagah let likhiye hook me varna there will be errors

u can also write 
counter = counter + 1
setcounter(counter)
as
setCounter(counter + 1)
*****************************------------------------------------------***********
# video-6
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
 *****************************------------------------------------------***********
# video-7
hamesha project create krke uske andar jaake do // npm i
tailwind is available on tailwind css.com

tailwind akele nhi chalta hai usko lgti hai thodi dependencies
for that 
// npm install -D tailwindcss postcss autoprefixer
-D for dependencies
// npx tailwindcss init -p
generates a new file tailwind.config.js
tailwind ke content ko change krdo
content ka jo array hai yeh contet ko search kr rha hai index me bhi aur .src me bhi

uske baad aap apni index.css ki file me jao
usme yeh 3 cheezein add kro
// @tailwind base
// @tailwind components
// @tailwind utilities

uske baad  // npm run dev
jsx me aap class nhi likhte ho aap className likhte ho
className ='bg-green-40 text-black rounded-xl'
jsx me aap ek hi element return kr skte ho
empty tags - fragments
isme har ek tag closing tag hona chahihe 
toh yaha img tag ko bhi close krdo and everything will be fine
tailwind is responsive too

yaha se kahani shuru hogyi hai propss ki 
props components ko bnata hai reusbale
React follows the mindset that dont segregate things based on technologies 
but segregate it based on its purpose/usage

for this good practice would be ki
src me -> create folder named components 
here for example create a file named card.jsx
following th ebasic structure
//
import
function(HERE WRITE props or u can also {username}){

}
export
//
toh aap Card.jsx me apna div load kro purana htake
aur fir Card.jsx ko import karo App.jsx me
 now use car as
 <Card/>
 inside the App function

 toh maanlo aap bohot saare cards use kar rhe ho
 aur unme saare names jo show ho rhe ho vo same ho
 here comes PROPS

in main App function
<Card channel='ojas aur code' /> aap yaha se jo bhi value paas krdoge vohi value show hojayegi props me
pehle props object tha jo ki khaali tha, ab props ko value mil gyi hai channel='ojas aur code'
now you cant pass array inside it or object
what youb can do is
function App() ke andar take 
const myObj ={
  name:'ojas',
  age:21
}
now inside the card tag write it as <Card channel='ojas aur code' someObj={myObj}/>
we can do the same for array

if u use {username} in Card.jsx function
and in App.jsx function
you use
<Card username='ojas' /> on console ojas will be given

agar aap isme additonal properties bhi paas karoge toh kya vo reflect hogi
---nope
aapka kaam sirf properties paas krna hi nhi hai aapka kaam
properties update krna bhi hai
<Card username='ojas' btnText='click me'/>
iske liye
function Card({username, btnText})
now it will work
now in card function where the console log is implemented
what will happen if no one is passing btnText
for that write it as
{btnText || "visit me"}
or you can do something better you can give the default value itself in the beginning
as
function Card({username, btnText = "visit me"})
*****************************------------------------------------------***********#
 video-8
 if you get
 setCounter(counter + 1)
 setCounter(counter + 1)
 setCounter(counter + 1)
 setCounter(counter + 1)

 ---> the value will be update by 1 overall

 but what if you want the value to be updated what it is trying to implement
 for that
 setCounter has a callback function write it as
 setCounter((prevCounter) => prevCounter + 1) the parenthesis inside are not necessary
 setCounter((prevCounter) => prevCounter + 1)
 setCounter((prevCounter) => prevCounter + 1)
 setCounter((prevCounter) => prevCounter + 1)
 now when you click the counter value would be 19
 