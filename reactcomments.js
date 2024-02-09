//1
//React is javascript library for building user interfaces,its a frondend framework
//Here we create components,we can customize these components with different pieces of data 
//React combines small amounts of html,css,js into a single component 
//This is what makes the twitter website to load the feed screen without the rest of the page visibly updating 
/*In olden days we had to refresh the web page to see any changes,but these days we have each component listening for changes in
the server and updating itself and its own appereance and data and being able to talk to the server independently*/
/*For ex if there is any new comment on a fb post,the post can update itself without effecting the rest of the website*/
/*React is able to re-render these changes really efficiently and it does this by comparing changes,what we call diffing*/
/*Whenever a change happens it compares the new version of the DOM tree that u want to be rendered with the old the version thats
already showing up,and it re-renders the only sub component that has changes*/


//2
//Introduction to the code sandbox(browser based development enviroment),It allows u to build and deploy within the same application

//3
//Introduction to JSX and Babel
/*In index.html file,by convention we always create a div with id=root,which is the root of our react application,
everything we have create using react will be inserted inside this div*/
/*Just above the </body> we will have a script src tag that links to the index.js file*/
/*Infact we never touch this index.html file ever again*/
/*We write all our code in index.js file*/
//install react,react-dom dependencies
//require them
var React=require('react');
var ReactDOM=require('react-dom');
//ReactDOM.render(what to show,where to show,callback fun to tell us when that render fun has completed);
ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root'));

/*Here we are able to write plain html inside a js file,hows this possible?,this is what JSX does,react works by creating these
jsx files,files where we have got html right in the body of js file*/
/*In behind the scenes our html picked by a compiler and is compiled down to actual javascript,and the compiler comes from the 
react dependency we have required*/
/*Inside the react module there is something called Babel*/
/*Babel is js compiler,its converts next gen js like ES 6,7,8 and compile it down to a version that every browser can understand*/
/*And this incules compiling jsx into plain old js even internet explorer can understand*/
var h1=document.createElement("h1");
h1.innerHTML="Hello World";
document.getElementById("root").appendChild(h1);

/*import keyword is one of the latest features of js as part of ES6*/
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);


//4
//JSX code practice
ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);

//5
//Javascript Expressions in JSX and ES6 template literals
/*JSX not only allows u to use html inside js but it also allows to to use js inside html*/
/*u just need enclose that js variable inside a curly braces*/
let name = "Nakka Nithish";
let luckyNum = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>your lucky number is {luckyNum}</p>
  </div>,
  document.getElementById("root")
);
/*Not only js variables,u can add any js expression inside this curly brace*/
//ex:3+5,Math.floor(Math.random()*10)
//u cant write js statements inside {}
ex:if(){return 7}else if(){return 12}
/*An expression will be evaluated to a value,but statement is like asking computer to do some work*/
    <h1>Hello {fName + " " + lName}!</h1>
    <h1>Hello {fName} {lName}!</h1>
    <h1>Hello {`${fName} ${lName}`}!</h1>


//6
//Js expressions in JSX practice
let name = "Nakka Nithish";
let date = new Date();
let year = date.getFullYear();
ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);


//7
//JSX Attributes and Styling React Elements
/*The html we use inside JSX file is actually converted into js,so we should use js properties as its attributes 
instead of html attributes,remember that js properties  are in camelcasing
ex:className="heading" instead of class="heading"
   contentEditable="true"*/
//html global attributes are attributes that we can use on any html element
<script src="../src/index.js" type="text/JSX"></script>

//We can get random images form lorem picsum
let img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <img src={img+"?grayscale"} />
  </div>,
  document.getElementById("root")
);


//8
//Inline styling for React Elements
In html the inline styling style="color:red",here the style attribute taking a string value
/*But in jsx the html code we are writing is not actually html,so for inline style we should assign a js object to 
style attribute*/
//since the value of style is a js object we should enclose it in {}
ReactDOM.render(<h1 style={{color:"red"}}>Hello World!</h1>, document.getElementById("root"));

let customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
customStyle.color = "blue";
ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);


//9
//React Styling Practice
let date = new Date(2023, 1, 1, 19);
let time = date.getHours();
let customStyle = {
  color: null
};
let greet = null;
if (time < 12) {
  greet = "Good Morning";
  customStyle.color = "red";
} else if (time < 18) {
  greet = "Good Afternoon";
  customStyle.color = "green";
} else if (time < 24) {
  greet = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greet}
  </h1>,
  document.getElementById("root")
);


//10
//React Components
/*Split website into smaller components*/
/*Its React convention to give ur components a name that is in pascal case(first letter is captilized),and this allows to 
differentiate between custom components that were building vs the html elements*/
/*Create a heading component as a separate file in src folder Heading.jsx*/

//In Heading.jsx file
import React from "react";
function Heading() {
  return <h1>My Favourite Foods</h1>;
}

export default Heading; //Here we are exporting Heading component as default export

//In List.jsx file
import React from "react";
function List() {
  return (
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  );
}

export default List;

//In index.js file
import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";
//Here the extension jsx/js is optional ES6
//./ means relative path, means in the same folder and I think ../ means in the root folder
ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);

/*Normally in index.js files of a lot of React apps we dont have any html elements, we just have a custom component called
<App/>*/
 
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));

/*Normally in react apps we will have a lot of components,so lets create a components folder inside src folder*/
/*We can even create subfolders ex:login screen components,register screen components etc*/

//11
//Reacts Components practice
function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

function App() {
  return <Heading />;
} //The app component returns only components

//12
/*Javascript ES6-Import,Export and Modules*/
math.js module
let pi = 3.1415962;
function doublePi() {
  return pi * 2;
}
function triplePi() {
  return pi * 3;
}
export default pi;  //We can have only one default export per module and it can be imported by any name
export { doublePi, triplePi }; /*We can export anything as a js object as a non default export and they must be imported
with the same name*/

index.js module
import React from "react";
import ReactDOM from "react-dom";
import Pi, { doublePi, triplePi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{Pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>,
  document.getElementById("root")
);

var React =require("react"); //this require() fun comes from nodejs and not from js
import React from "react"; //import,export comes from EcmaScript6(ES6)

/*The browser penetration of ES6 is like 80% at the moment,here we using ES6 everywhere in our app only because 
we are using Babel*/
/*We can also import using the wild card astrix(*)*/
import * as pi from "./math.js";
console.log(pi);
{doublePi: ƒ doublePi(), triplePi: ƒ triplePi(), default: 3.1415962}

/*We can use the imports as*/
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
/*But the wildcard import is discouraged in many style guides,because we lose the benefit of using single default export,and
our code will be also unclear*/


//13
/*4 steps for creating react app*/
//1)Check node is up to date
//2)Install vs>vscode-language-babel extension
//3)Create React App
npx create-react-app my-app
//4)Run App
cd my-app
npm start

/*react-scrips are the scripts which are required to make the react app run locally*/


//14
//React Props
/*We have already passing custom pieces of information to html elements via attributes*/
ex:    <input id="fName" placeholder="Enter your first name" value="Nakka" />
    	var input=document.getElementById("fName"); 
	input.id,input.placeholder 	
/*these attributes of html elements are predefined*/
/*Since react components are like userdefined/custom html elements ,we can have custom attributes*/
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt={props.alt} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

<Card
      name="Jack Bauer"
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_img"
      tel="+987 654 321"
      email="jack@nowhere.com"
    />

/*forEach() method wont returns anything,map() method returns an array of elements*/


//15
//React DevTools
/*While passing props from one component to another componet,we can see the props of a particular component in React dev tools*/
//Download React developer tools extension from chrome web store
//Pass props from high level to low level

/*We just need the component and its necessery props(Which we can see in react devtools) to render it anywhere*/

//16
//Mapping Data to Components
/*For every single component that is rendered using a loop such as the map() fun,we will have to give those components a property
called key and its value should be unique among all the other similar components*/
/*This key prop is necessary to render components in order and we cant use this as props.key*/
function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}  //here the map returns a array of card elements taking an array of contacts
    </div>
  );
}

<dl>    //description list
  <dt></dt>  //description term
  <dd></dd>  //description detail
</dl>


//17
/*js E56 map,filter,reduce,find,findIndex*/
/*These are some fun that help us deal with arrays*/
//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array,and the loop stops as soon as it finds that item

//FindIndex - find the index of the first item that matches,and the loop stops

//18
//Javascript ES6 arrow functions or fat arrow
{emojipedia.map((emojiTerm) => 
          <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
          />
        )}   //Mapping each element of the array to a Entry component using arrow function


//19
//React Conditional rendering with the terenary operator
/*We are going to create a login flow*/
/*Sometimes we want to show different components on the screen based on different conditions,
ex:user not logged in,then we will show him login screen
   else we will show him diff component like hello user */

//One way to do it
let isLoggedIn = false;
function renderConditionally() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}
/*But we are doing it in a lot of lines of code and its not elegant*/
/*We can only use expressions inside jsx html,we cant use statements which have keywords in them like if,else,swith,for etc
unlike statements which have only symbols +,-,?,: etc*/

//Best way to do it is using terenary operator
let isLoggedIn = false;

function App() {
  return <div className="container">{
    isLoggedIn?<h1>Hello</h1>:<Login />
  }</div>;
}

//Sometimes we dont want to render anything if the condition is false then in that case we can do it like this
currentTime>12?<h1>Why are you still working</h1>:null 
//But there is actually even easier way ,can do it using && operator
currentTime>12 &&  <h1>Why are you still working</h1>  /*They r just trying to render something*/
//Here if first cond is false ,it wont even bother to check the other cond


//20
/*Conditional Rendering practice*/
var userIsRegistered = false; /*We can send this from App.jsx to Form.jsx component and get the component render in a different way 
using terenary operator*/

App.jsx
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

Form.jsx

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isRegistered === false && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

/*props.isRegistered === false,instead of this we can simply use !props.isRegistered*/

//21
/*State in React-Declarative vs Imperative programming*/
/*How do we make our app more interactive,for that we need to understand State,this is really central concept to how React
does things*/
//UI=f(State) 
/*Ice and water is the same component ,based on the state of temperature the form of component changes*/
//Ice  - UI=f(-10degcel)
//Water- UI=f(60degcel)
/*User interface is reflecting the changes in state variable*/

function App(){
	var isDone=true;
	const strikeThrough={textDecoration: "line-through"}
	return <p style={isDone&&strikeThrough}> Buy Milk </p>; /*Here the component look is dependent on the state variable isDone*/
}

/*This type of programming is called Declarative programming,cuz we are declaring how our component looks using terenary op*/
//Imperative Programming
document.getElementById("root").style.textDecoration="line-through";

/*In order for this code to work they had to be rerenderd each time,and to do that we have to learn hooks*/
var isDone = false;

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

/*Hooks allows us to modify,read,hook into the state variable*/

/*In the next lesson we will see one of the most commonly used React hooks which is the useState hook*/


//22
//React Hooks -useState

//This is inefficient,and repitive
import React from "react";
import ReactDOM from "react-dom";

let count=0;
function increase(){
  count++;
  ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>,
    document.getElementById("root")
  );
}
ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
  </div>,
  document.getElementById("root")
);

//We solve this problem using useState hook
//One of the rules for using hooks is that u must use a hook inside a functioal component
import React from "react";
let state=React.useState(34);  //one way to use useState

import React,{useState} from "react";
  let state=useState(3424);   //We are providing initial state value
console.log(state)  //output - [stateVariable value, ƒ bound dispatchAction()]

////////////////Example////////////////
import React,{useState} from "react";

function App() {
//Destructuring tha array
  let [count,setCount]=useState(0);   //We use this count(state variable) to use inside a component
function increase(){
  setCount(count+1);                  //setCount fun to change that state variable
}
function decrease(){
  setCount(count-1);
}
  return (
    <div className="container">
      <h1>{count}</h1>		//this h1 of this component is keeping track of the state variable
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}


//23
//useState() hook practice
function App() {
  let [time, setTime] = React.useState(new Date().toLocaleTimeString());
  function currentTime() {
    setTime(new Date().toLocaleTimeString());
  }
  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(updateTime, 1000); //Calls updateTime() after every second
  return (
    <div className="container">
      <h2>{time}</h2>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

//24
//Javascript ES6 Object & Array Destructuring
//Destrcturing an Array
const animals = [
  { name: "cat", sound: "meow" },
  { name: "dog", sound: "woof" }
];
let [cat,dog]=animals; //We are using an array to destructure an array,here the names can be anything

//Destructuring an object
let {name,sound}=cat; //using an obj to destructure an obj,the names must equal to the key names
//Inorder to give custom names 
let {name: catName,sound: catSound}=cat;
//Inorder to give default values
let {name="fluffy",sound="furr"}=cat; /*If the name,sound fields in cat obj has no values,then instead of undefined they will
have the default values we provided*/

//Destructuring a Nested object
let cat={ name: "cat", sound: "meow" ,feedingRequirements:{food:3,water:4}}
let {name,sound,feedingRequirements:{food,water}}=cat
//Now we can directly access food
console.log(food);
let {feedingRequirements:{food,water}}=cat 

//Challenge
const tesla={
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2
    }
  }
let {coloursByPopularity:[teslaTopColour],speedStats:{topSpeed:teslaTopSpeed}}=tesla
//here teslaTopColour is red,teslaTopSpeed is 150


//25
//Event Handling in React
/*How u can detect when a user interacts with ur component,and render diff things bases on those events*/
function App() {
  let [headingText, setHeadingText] = useState("Hello");
  let [isMousedOver, setMouseOver] = useState(false); //initially isMousedOver is false
  function handleClick() {
    setHeadingText("Submitted");
  }
  function handleOnMouseOver() {
    setMouseOver(true);
  }
  function handelOnMouseOut(){
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver?"black":"white" }}  
        onMouseOver={handleOnMouseOver}
        onMouseOut={handelOnMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}
/*We can use terenary op inside js object*/

//26
//React Forms
/*Events that arise within a form*/

//Just like for button we have onClick,for input element we have onChange attribute
<input onChange={handleOnChange} type="text" placeholder="What's your name?" />
function handleOnChange(event)
    console.log(event.target.placeholder);  //here event.target is the element that triggered the event
    console.log(event.target.type);
    console.log(event.target.value)
  }

/////////Example///////////////
function App() {
  const [name, setName] = useState("");

  function handleOnChange(event) {
    setName(event.target.value);
  }
  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="What's your name?"
        value={name}  //Controlled component,we are keeping the single source of truth
      />
      <button>Submit</button>
    </div>
  );
}

/*If we enclose the above component inside a form component,then when we click the button it refreshes the page even if we
dont add type="submit" to button,this is the default behaviour of the form*/
/*The reason of this is happening is in form element we have onSubmit="" attribute*/
/*To prevent the page refresh*/
function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleOnChange(event) {
    setName(event.target.value);
  }
  function handleOnclick(event) {
    setSubmittedName(name);
    event.preventDefault();  //3)preventing the default behaviour which is the page refresh
  }
  return (
    <div className="container">
      <h1>Hello {submittedName}</h1>
      <form onSubmit={handleOnclick} action=""> //2)On submit triggers handleOnClick()
        <input
          onChange={handleOnChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button >Submit</button> //1)clicking this inside a form triggers Submit
      </form>
    </div>
  );
}


//27
/*Class Components vs Functional Components*/
//Hooks vs Classes
/*There were two ways of adding state into a React App*/
/*One way is using functional components*/
/*Theres also another way to create React components,which is using classes*/
//Hook
import React from 'react';
function App(){
return <h1>Hello</h1>;
}
export default App;
//Class
import React from 'react';
class App extends React.Component{
render(){
return <h1>Hello</h1>
}
}
export default App;

/*It the past why people converted their functional components into class components was because it was required in order to
have state*/
/*What does managing state using classes look like?,its difficult to read*/
/*Using hooks is much easier way to manage state and code is much clearer*/

//28
/*Changing Complex State*/
/*Managing the state of Js object where u might have to retrieve the previous value of the object*/
function App() {
  const [fname,setFname]=React.useState("");
  const [lname,setLname]=React.useState("");
  function updateFname(event){
    setFname(event.target.value);
  }
  function updateLname(event){
    setLname(event.target.value);
  }
  return (
    <div className="container">
      <h1>Hello {fname} {lname}</h1>
      <form>
        <input value={fname} onChange={updateFname} name="fName" placeholder="First Name" />
        <input value={lname}onChange={updateLname} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

/*but fname and lname probably belong to the same js object*/
/**/
function App() {
  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: ""
  });  //Initial state is a javascript object

  function updateFullName(event) {
    const { name, value } = event.target; /*destructuring the js obj to get the name,value if the input element that triggered the event*/

    setFullName((preValue) => {   /*We can access previous state inside callback fun of setState function*/
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          value={fullName.fName}     //Making it as a controlled component
          onChange={updateFullName}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={fullName.lName}     //Making it as a controlled component
          onChange={updateFullName}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

/*Dont use event.target inside a setState() fun, it will give error,cuz event is a synthetic event */

//29
//Changing Complex State practice
function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateContact(event){
    const {name,value}=event.target;
    setContact((prevState)=>{
      if(name==="fName"){
        return {
          fName:value,
          lName:prevState.lName,
          email:prevState.email
        }
      }else if(name==="lName"){
        return {
          fName:prevState.fName,
          lName:value,
          email:prevState.email
        }
      }else if(name==="email"){
        return {
          fName:prevState.fName,
          lName:prevState.lName,
          email:value
        }
      }
    })
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input value={contact.fName} onChange={updateContact} name="fName" placeholder="First Name" />
        <input value={contact.lName} onChange={updateContact} name="lName" placeholder="Last Name" />
        <input value={contact.email} onChange={updateContact} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}
//In the next lesson we will learn how to reduce the above code into just two or three lines,using spread operator


//30
//Javascript ES6 Spread Operator
//Spread operator is indicated by ...(three dots)
const citrus=["lime","lemon","orange"]
const fruits=["Apple",...citrus,"Coconut"]
console.log(fruits) //["Apple", "lime", "lemon", "orange", "Coconut"]

//What this spread op does is it takes the array/object values and adds them whereever we want
const fullName={
  fName:"James",
  lName:"Bond"
}
const user={
  ...fullName,   //Here we wont get nested obj,we just get its values
  id:1,
  username:"jamesbond007"
}
console.log(user) //{fName: "James", lName: "Bond", id: 1, username: "jamesbond007"}



function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,		//gives fName: "" ,lName: "" ,email: ""
        [name]: value		//ex:fName:Nakka ,in js objs the just the value of the key updates
      };
    });
  }


//31
//Spread operator practice todo list app
function App() {
  const [itemsArray,setItemsArray]=React.useState([]);
  const [item,setItem]=React.useState("");
  function updateItem(event){   //tracking the input text
    setItem(event.target.value);
    
  }
  function updateItemsArray(event){
    setItemsArray((prevState)=>{ //On button click updating the itemsArray
      return [...prevState,item]
    })
  setItem(""); //Setting the item state to "" to clear the input text
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={item} onChange={updateItem} type="text" />
        <button onClick={updateItemsArray }>
          <span >Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsArray.map((item)=>  //Rendering the itemsArray elements as li elements
            <li>{item}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

/*In next lesson we will learn how to manage a component tree,and how to pass state from child components to parent components*/


//32
/*Managing a component tree*/
//In our todo app
/*we have a app component,and its child component todoitem */
/*The todoitem has state clicked=true/false based on that it has line-through or not*/
/*What if we want to delete the item from the array(which is in parent component) based on its state(dashed/not) which 
is present in child component */
/*Remember we can pass props from parent component to child component*/
/*For that we define a function in parent component(App.jsx) and we pass that function,and a key as a prop while mapping child 
components using the array*/
/*While mapping an array elements to components , it is recommended not to use array index as key,use uuid package to generate 
unique keys */
function deleteItem(id) {
    let newItems = items.filter((item, index) => index !== id);
    setItems(newItems);
  }
{items.map((item, index) => (
            <ToDoItem text={item} id={index} checkedItem={deleteItem}/>
          ))}
/*Now we can access that as props.checkedItem() in child component,onClick={()=>{props.checkedItem(props.id)}},and the id can be accessed in parent component
and the array can be filterd*/
function ToDoItem(props) {
  return <li onClick={()=>{
    props.checkedItem(props.id)
  }}>{props.text}</li>;
}

//33
/*React Dependencies and Styling the Keeper App*/
/*We will be going to use some pre-built components by adding some dependencies*/
/*Add material-ui/core and material-ui/icons as dependencies*/
/*The benefit of using react components over bootstrap or fav icons is that,in react js,html,css pretty much all combined 
into one of the components,we can even add components that have some functionality */
/*material ui docs>material icons*/
//We can have floating action button
/*Transparent textures website*/