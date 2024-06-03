[HTML NOTES](#html-notes)

[CSS NOTES](#css-notes)

[Web Design](#web-design)

[Javascript](#javascript)

[Jquery](#jquery)

[Intro to NODE](#intro-to-node)

[EXPRESS JS](#express-js)

[COMMAND LINE NOTES](#command-line-notes)

[GITHUB NOTES](#github-notes)

[SQL](#sql)

[MONGODB](#mongodb)

[MONGOOSE](#mongoose)

[RESTful API](#restful-api)

[Introduction to Authentication](#introduction-to-authentication)

[REACT JS NOTES](#react-js-notes)

## HTML NOTES 

```html
<!DOCTYPE html> ///* latest version of html ie., html5 */

<meta charset="utf-8"> /* extra data to browser,utf-8(encoding of unicode)includes all international languages&symbols */
<title>Nithish's Personal Site</title> ///* title of the page */

<style>
internal css
</style>

///* We can use inline css using style=" " */

//priority
//inline css > internal css > external css

<img src="Images/nithish-modified.png" alt="Nakka Nithish profile picture"></td>
///* alt text helps for search engine optimization & ranking of website */

```

```html
<table cellspacing='12'>
  /* cellspacing defines space b/n two cells */
  <thead>
    /* head row of the table */
    <th>Year of Study</th> /* th means table head cell */
    <th>Institution</th>
    <th>Course</th>
    <th>Score</th>
  </thead>
  <tbody>
    /* creating head and body separately helps us to target & style them with individually with CSS */
    <tr>
      /* tr means table row */
      <td>July 2021 - December 2023</td> ///* td means table data cell */
      <td> <a href="https://loyoladegreecollegeysrr.ac.in/">Loyola Degree College</a>, <br>Pulivendula</td>
      <td>B.Sc. [M.P.Cs]</td>
      <td>Semester 1 GPA:9.11/10 <br>Semester 2 GPA:9.52/10</td>
    </tr>

  </tbody>
</table>
```
- `border-style:dotted none none;`  // with border gone,height becomes zero

- using html to control the layout is not a good idea 
- tables can have thead,tbody,tfoot, most of table attributes are deprecated 

`&#160;`   space html entity

` </a><a href="contact-me.html">Contact Me</a></h3> /* linking to other insite pages*/`

```html
<form action="mailto:nithishroyal234@gmail.com" method="post" enctype="text/plain" >  /* it opens the mail client,
    method='post' means it makes a post req and autofills the user entered data into mail body,
  enctype='text/plain' means the data entered in the form is encoded in plain text*/
   /* whem action='index.html' ,after clicking the submit button,it takes us to home page */
  <label for="">Your Name:</label>   /* label for the form */
  <input type="text" name="yourName" value=""> <br>
  /*  gives a text box ,we can have color picker,date,radio,range,file picker and so on*/
  /*  yourName=Phani
yourEmail=phani@gmail.com
yourMessage=hello nakka nithish    */
  <label for="">Your Email:</label>
  <input type="email" name="yourEmail"> <br>   /* gives a box to enter our email,and it does some basic validation for our mail */
  <label for="">Your Message:</label> <br>
  <textarea name="yourMessage" rows="10" cols="30"></textarea> /* gives a text area,we can specify the default size of text area */
  <br><input type="submit" name="" >  /*  */
</form>

```



## CSS NOTES
- px is satic size,inorder to make our size dynamic %,rem are recommended */
color: #66BFBF;
- 100%=16px=1rem

### display:block,inline,inline-block,none
- block,blocks other elements from sitting beside it,width can be changed */
- inline-stacks beside each other,width cant be changed ,no content no width and height*/
- inline-block,best of both worlds */
- two ways can hide an element,1)display:none,2)visibility:hidden*/-* content is everything */
- order comes from code */
- children sit on top of parents,leads to concept of z-index; */
- div(block element) and span(inline element) elements are just boxes with no styling */

### position:static,relative,absolute,fixed

-  static,default html flow 
-  relative positioning- the elements gets positioned with respect to its previous position,
*it moves by lefting the ghost of itself behind.
- absolute positioning- the elements gets positioned with respect to the entire body/its parent.
 
- To convert into rem,divide px by 16*/
- To convert into %,divide px by 16 and multiply with 100
- use rem instead of em
- float:left, makes that image float left and the test wraps around it,use float only when you want text wrap aroud a certain element
- clear:left,takes care that nothing present in its left


## Tindog project using Bootstrap

-  Three ways to add bootstrap,1)add bootstrap cdn link,2)use starter template,3)download bootsrap.css and link to it manually 
-  Start by looking at other people websites,www.awwwards.com,ui-patterns.com 
-  wire frame(sneakpeekit.com,balsamiq),mock up  
-  prototypes,www.dribble.com 
-  everything is just a box,adding classes changes the look of the box. Copy code and customize it to your need
-  can add script tag just above </body>  
-  bootstrap  can easily implement grid usig class='col' div inside class='row' div.
    can make layout responsive,ex:col-lg-3,in remaing screens it takes all 12 units. 
-  link your css just after bootstrap css to overwrite bootstrap styles 
-  add padding in % so it changes dynamically 
-  To use font awesome icons we need to include font awesome script ,font awesome icons comes with different sizes
-  default z-index is 0.It can be -,+ and 0 ,
z-index works only if it is absolute/relative positioning,
absolute takes out of the html flow,relative keeps the flow
-  media queries
the css activates only when the conditions are true
 
-  **Code Readability**
Readability,Modularity,Efficiency,Length 
-  always try to give custom classes
you can use advanced css selectors(can combine different css selectors)
try to use combinations,instead of adding new classes 
-  try to find repetive patterns,like white text on coloured background and coloured text on white background  
-  use id's very sparringly,only use it on sections for navigation purposes,to target them in hrefs 
-  dont use inline styles, Readability is more important than shortening the code */

### Web Design 
-  COLOR THEORY

- Differnet colors have different moods,choose wisely.
- We use color palates,
colour wheel
adobe colors
colorhunt.co */
### TYPOGRAPHY
- serif family type face(has little feet,looks serious)
- San-serif (no feet,more readable)
- Try to combine two fonts that have same mood.

### USER INTERFACE DESIGN
- try to highlight the important things with the design using hierarchy.
- In ui design 40 to 60 characters per line is good.
- Reduce the number of alignment lines.
- White space is also important.
- Design the ui for the audience.
 
### UX
- Keep the design simple
- Keep the design consistent through
- Keep reading patterns in mind while designing(try to use F/Z pattern)
- All platform design,make sure our website rearranges itself on differnt screens
- Test by giving to other users
- Daily UI website for 100 days.
Collect UI website.
Canva.com(online graphics editing program).
 

## Bootstrap installation

## Javascript

- github/idiomatic.js(Principles of writing consistent,idiomatic javascript)
- var is function scoped and let is block scoped,let does not allow to redeclare variables,var allows to redeclare variables.
- ctrl+L or console.clear(), clears the console.
- post increment,pre increment
- select text and press ctrl+F then press A to B
- `alert()` is for users but console.log is meant for develovers to debug.
- `parseInt(),Math.floor(),Math.round()`
- DRY-Do Not Repeat Yourself


## DOM
### 1

- Just like css, we have inline javascript(js as a value to html attribute)*/ ex:onload="alert('Hello')",
-  internal javascript(using script tag just like style tag)
`<script type="text/javascript">
  alert("Nithish");
</script>`

-  external javascript using script tag with src
`<script src="index.js" charset="utf-8"></script>`
-  *internal js>external js>inline js(specificity from what I observed)
-  *CSS should load before any content,thats why we put it just after title.
- *Js should load after all the html elements loaded, thats why it is placed at the end just before </body>.
document.querySelector("h1").innerHTML=""
-  html elements are the actors that listen to javascript.

### 2
#### Document Object Model(DOM)

```js
document.firstElementChild //is the html element

document.firstElementChild.firstElementChild //is <head>​…​</head>​

document.firstElementChild.lastElementChild //is <body></body>

var heading=document.firstElementChild.

lastElementChild.firstElementChild;

heading.innerHTML="Nakka Nithish"

document.querySelector("input").click() //clicks the checkbox
//objects in DOM has properties and methods
ex:car.color,car.speed
ex:car.drive(),car.break()

document.querySelector("ul").lastElementChild.innerHTML="Nakka Nithish"

```

### 3

#### Selecting html elements with javascript

```js
document.getElementsByTagName("li") //returns an array of list elements
document.getElementsByTagName("li")[2].style.color="purple"
document.getElementsByClassName("btn")
document.getElementById("title").innerHTML="Nakka Nithish"
document.querySelector("h1")  //by tag
document.querySelector("#title") //by id
document.querySelector(".btn") //by classname
<button class=​"btn" style=​":​active color:​red;​">​Click Me​</button>​
document.querySelector("li a")  //hierarchical Selector
//what if we have many elements with the Selector
document.querySelector("ul .list") //gives only first list element
document.querySelectorAll("ul .list")

```

### 4
#### Changing styles of html elements with javascript

- After selecting an element with js use .style.fontSize,.style.backgroundColor etc.,
-  The main difference b/n css properties and js objecrt properties are
- js follows camel casing unlike actual css properties
- the value is represented as a string in js.
document.querySelector(".btn").style.backgroundColor="yellow"

### 5

- keeping styles inside css file but toggling it on and off inside js file
- classList is a property of every DOM object

```js
document.querySelector("button").classList.add("invisible");  /*in this way we can keep all the styles in css file but we can
toggle it on and off by adding and removing classes to classList of that particular element by using js*/
```
```js
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible"); //add and removes the class
```
- in css file we only focus on look and in js file we only focus on behaviour


### 6

#### TEXT MANUPULATION USING JS

```js
document.querySelector("h1").innerHTML="<em>Hello</em>" //innerHTML gives and takes all the html code inside main tags
document.querySelector("h1").textContent="Nakka Nithish" //textContent only gives and takes the text and not html code
```

### 7
#### MANUPULATING HTML ATTRIBUTES OF ANY ELEMENT USING JS

```js
document.querySelector("a").attributes //gives list of all attributes
document.querySelector("a").getAttribute("href")
document.querySelector("a").setAttribute("href","https://www.bing.com")
```

### 7)Dice game

- name the images as your convinience
- random number and image name are linked,so the image src change based on the random number,thus changing image
- we compare the two random numbers to find the winner

.w {
background-image: url("images/tom1.png");
}

### 8)Drum Kit project

#### 1

#### ADDING EVENT LISTERS TO A BUTTON

- addEventListener(,) takes event type and a lister like a function name as parameters.
-  we can also use anonymous fuc or arrow functions rather than passing fun name.
- we can use loops to add event listeners to all elements with a class using i<querySelectorAll('query').length

### 2
### HIGHER ORDER FUNCTIONS AND PASSING FUNCTIONS AS ARGUMENTS

- How addEventListener function works
- example

```js
function add(num1,num2){
  return num1+num2;
}
function multiply(num1,num2){
  return num1*num2;
}
function calculator(num1,num2,operator){ //passing fun name as parameter
  return operator(num1,num2);     //calling fun
}
```

- debugger;
- functionname(,);       enters debugger mode,then click downarrow to see through steps

### 3
### HOW TO PLAY SOUNDS ON A WEBSITE

```js
HtmlMediaElement.play()
ex:
var audio=new Audio("sounds/tom-1.mp3"); //create an object passing audio file
audio.play();
background-image: url("images/tom1.png");
//this, is the current object/html element that is clicked.
```

### 4
### A DEEPER UNDERSTANDING OF JAVASCRIPT OBJECTS

```js
var houseKeeper1={
  yearsOfExperience:12,
  name:"Jane",
  cleaningDuty:["Bathroom","Lobby","Bedroom"]
} //instead of creating manually

//We can create a constructor function that produce OBJECTS
//ex:
function HouseKeeper(yearsOfExperience,name,cleaningDuty) {
    this.yearsOfExperience=yearsOfExperience;
    this.name=name;
    this.cleaningDuty=cleaningDuty;
    this.clean=function (){
     console.log("Cleaning the Lobby");
}
var houseKeeper2=new HouseKeeper(6,"Jhanu",["Lobby"]);

```

### 5
### SWITCH STATEMENT IN JAVASCRIPT

- instead of using if else we can use switch
- in defalut console.log(expression) so it will be useful in future

- 6
- OBJECTS METHODS AND THEIR DOT NOTATION
`object.method();`

### 7
### ADDING KEYBOARD EVENT LISTERS TO DETECT KEYPRESSES

```js 
addEventListener("keydown",function(event){}) //event is what that triggers the function like which key is pressed,it has many properties we can access,
//event.key is one of them which tells the key that is pressed
```

### 8
### UNDERSTANDING CALLBACKS AND HOW TO RESPOND TO addEventListener

addEventListener(type,function(event){}) can also takes functions with parameters which are called callback functions.

example:
```js
function anotherAddEventListener(typeOfEvent,callback){
    //detect event code
    let eventThatHappened={
        eventType:"keydown",
        key:"p",
        durationOfKeypress:2
    }
if(eventThatHappened.eventType===typeOfEvent){
    callback(eventThatHappened);   //calls our function by passing the object of the event that happened.
}
}

anotherAddEventListener(typeOfEvent,callback(event){
  console.log(event);
}) //just clear that we can use the object of the event that happened

```

### 9
### ADDING ANIMATION TO WEBSITES

- we can easily add animations that works when we click by creating a style in css file,and simply adding that class
- by classList.add("") and removing it by classList.remove("") using a setTimeout function after some milliseconds
```js
setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);   //calls the function after 100 milliseconds
```


### jQuery
### 1

- javascript library,reduces the javascript code
```js
document.querySelector("h1") /*can simply written as*/ jQuery("h1") or $("h1")
```

### 2
### HOW TO INCORPORATE jQuery INTO WEBSITES
- by adding CDN from official jQuery website(google cdn is reccomended cuz of its popularity)
- jQuery cdn must be placed above js script tag,other wise wont work
- if we put both script tags inside head then we need to write
```js
$(document).ready(function() {
  $("h1").css("color", "red");
});
```

### 3
### HOW MINIFICATION WORKS TO REDUCE FILE SIZE

- www.minifier.org
- it removes all the comments and spaced from our code to minify it.
- minified files extension is like .min.js , .min.css like that.

### 4
### SELECTING ELEMENTS WITH JQUERY

```js 
$("h1") or jQuery("h1") //  document.querySelector("h1")
$("button"); //  document.querySelectorAll("h1")
```

### 5
### MANUPULATING STYLES WITH jQuery

```js
$("h1").css("color") //single value means getting the value
rgb(255, 0, 0)
$("h1").css("font-size");
32 px
$("h1").css("color", "red"); //double value means setting the value

$("h1").addClass("big-title"); //adding a class
$("h1").removeClass("big-title");
$("h1").hasClass("big-title");
```

### 6
### MANUPULATING TEXT WITH jquery

```js
$("h1").text("Nakka"); // equal to .textContent  //adding text
$("h1").html("<em><strong>Nakka</strong><em>"); // equal to .innerHtml     //adding html
```

### 7
### MANUPULATING ATTRIBUTES WITH jquery

```js
$("img").attr("src") //getting the value of attribute
$("a").attr("href", "https://www.yahoo.com") //setting the value of attribute
```

### 8
### ADDING EVENT LISTENERS WITH jQuery

```js
for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    document.querySelector("h1").style.color = "purple";
  });
} //is equal to

$("button").click(function() {
  $("h1").css("color", "purple"); //No need of for loop,jQuery adds event listener to all of the buttons
})

$("input").keydown(function(event) {
  console.log(event.key); //here the listener is the input element
})

$(document).keydown(function(event) { //document dont need double codes
  $("h1").text(event.key + " ")
})

$(document).on("keydown", function(event) { //Even more flexible way of adding eventlistener using on()
  $("h1").text(event.key + " ")
})
```

### 9
### ADDING AND REMOVING ELEMENTS WITH jQuery

```js
$("h1").before("<button>Button</button>") //adds button before <h1></h1> element
$("h1").after("<button>Button</button>") //adds button after <h1></h1> element
$("h1").prepend("<button>Button</button>") //adds button like this <h1><button></button> H1 </h1> element
$("h1").append("<button>Button</button>") //adds button like this <h1> H1 <button></button></h1> element

$('button').remove(); //removes all the buttons on the page

```

### 10
### WEBSITE ANIMATIONS WITH jQuery
```js
$("button").click(function() {
  // $("h1").hide();
  // $("h1").show(300);
  // $("h1").fadeOut();
  // $("h1").fadeIn();
  // $("h1").toggle();
  // $("h1").fadeToggle();
  // $("h1").slideUp();
  // $("h1").slideDown();
  // $("h1").slideToggle();
  //  $("h1").animate({opacity:0.5,margin:"20%"});  //we can only add css properties with numeric values, ex:color:red is not possible
  // $("h1").slideUp().slideDown().animate({opacity:0.5});  //chaining multiple animations to single element
})

```
//10)Simon Game project

### Intro to NODE
### 1

- REPL(READ EVALUATION PRINT LOOP)
node //to enter repl mode
- half enter any command and tap tab twice to see all possible commands
- to exit
.exit ctrl+c /*twice*/ 
- ctrl+d
- `clear //clears the console`

### 2
### HOW TO USE NATIVE/INTERNAL NODE MODULES
`const fs = require('node:fs');`

### 3
### THE NPM PACKAGE MANAGER AND INSTALLING EXTERNAL NODE MODULES IN TO OUR PROJECT

- NPM -Node Package Manager
npm init //it will initialize npm and after all the steps it will create package.json file
- go to npmjs.com
- search for a package
- in terminal type, npm install packagename
- then it will add that external package as a dependency into our project.

### EXPRESS JS
- Just how jQuery add extra features and makes it easy to work with javascript
- Express does the same thing to Node,it adds extra features and helps to organize and structure our code,specifically
web applications build with node*/


### 12)My-Express-Server
### 1
```js
//CREATING OUR FIRST SERVER WITH EXPRESS
/*First create a folder,npm init,npm install express*/

const express = require("express"); //getting express module
const app = express();

app.listen(3000) //server is started at port 3000 and is listening
/*in browser search bar type*/
localhost: 3000
/*means now our browser is making a request to the Server
we made*/
```

### 2
### HANDLING REQUESTS AND RESPONSES
```js

//The get request
//In our case localhost:3000 is a home page just like www.google.com that is what we call the root
app.get("/", function(request, response) { //When our server gets a request root that is our home page
  console.log(request);
  response.send("Hello"); //Sends hello to browser
  response.send("<h1>Hello,world</h1>");
})
```
### 3
### UNDERSTANDING AND WORKING WITH ROUTE/ROOT
```js
app.get("/contact", function(req, res) { //when our server gets request to our contact route/page
  res.send("Contact me at nakkanithish143@gmail.com")
})
//In this way we can easily create a multi page website
//Restarting the server everytime we change the code is a pain
/*Nodemon is a utility,once we restart it,it will automatically restarts the server if there are any changes
in the sever code*/
/*To install Nodemon type*/
npm install -g nodemon //In termianl
/*After installing nodemon,run your server with*/ nodemon filename.js /*instead of*/ node filename.js
```

### 13)Calculator
### 1
- MAKING A WEBAPPLICATION(CALCULATOR) WITH A SERVER USING NODE AND EXPRESS.
- Until now we made static websites using html,css,js files which are requested by browser,and all the code
 runs on client browser*/
- In this lesson we make website ,all our code runs on server side and only the outcome sends to browser*/

### 2
//ports 3000,4040,8080,5000

### 3
### RESPONDING TO REQUESTS WITH HTML FILES
```js
__dirname //gives the file/directory path,whereever the file is on the cloud
name="" //in html act as a variable name
res.sendFile(__dirname+"/index.html"); //instead of send relative filepath,we give current file path like this in server
```

### 3
### PROCESSING POST REQUESTS WITH BODY PARSER
  ```js
  <form action="/" method="post"> //means post the data entered in to the inputs of this form to home route
//In network tab you can see all requests
/*We can handle that post using*/
app.post("/",function(req,res){
  res.send("Thanks for posting that")
})
/*We need body-parser package to parse the information that we get
from the post request*/
npm install body-parser
bodyParser.text() //parse all the request into text
bodyParser.json() //looks like that format javascript objects
app.use(bodyParser.urlencoded({extended:true})); /*whenever we grab the information that is posted to our server(in this case calculator.js)
from a html form,we will use urlencoded()*/
//by setting that extended object to true,it allows us to post nested objects
//bodyParser allows us to go into any of the routes,and we can tap into req.body
req.body //is the parsed version of the http request
console.log(req.body); gives { num1: '6', num2: '2', submit: '' }

//My understanding
//When ever a user lands on a page in our website,we should have a app.get("",f(req,res){res.send()}) for that
//We need to have a app.post() to handle the post they did using the html form we send in above step.
```

4
```js
type="submit" //It will trigger post request of the form
```


### 14)WeatherApp
/*We have a normal request*/ app.get()
/*a post request*/ app.post()
1
```js
//Weather API from openwhethermap,facebool API,Financial modeling prep API,PokeAPI
//For every website has certain data that it will allows others to access.
//API is like a contract b/n data provider and developer
//jQuery is also an API that allows us to create software
//In this module we will learn differnt APIs that allows us to interact with external server.
```


### 2
### API presents between our server and someone elses server
### API ENDPOINTS,PATHS AND PARAMETERS
1. Endpoints
2. paths
3. Parameters
4. Authentication

1)ENDPOINTS

```js
//Every API that interacts with an external system/server will have an endpoint.
//Endpoint of kanye.rest api is https://api.kanye.rest
```

2)PATHS AND PARAMENTERS

- Using paths and parameters we can customize the data that we get back
https://sv443.net/jokeapo/v2/joke  //is the endpoint for joke API
- We can add path after joke ex: /dark,/programming_jokes etc.,
- We can also use parameter which is a key value pair that goes at the end of the url after the ? like ?contains=debugging
ex:https://sv443.net/jokeapo/v2/joke/Programming?blacklistFlags=nsfw&contains=debugging
- If we have more than one parameter we separate them with an & symbol

3) API Authentication and Postman
- When it comes to data that is more monitizable or allows devleopers to build more complex appications used by 1000s of people,
then to limit your use to a threshold,they use Authentication with the help of API keys.*/
- we need to buy plans for differnt traffic.
https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=048f6f3572827f100694258d4b7ca5fa(API key)
- the default unit of temp for openweathermap is kelvin,we can change it using units=metric parameter(read API docs)

- For testing APIs we use Postman
//We get the data from the server to frontend in the form of JSON.

### 3
### What is JSON?
- javascript Object Notation
- The data we get back from server in JSON format look like a javascript object.
- JSON is readable by human,and it is also easily collapsable into a single string.
- JSON is not the only format we can get the data from an api,we can also get data in the form of XML/HTML formats.

### 4
### MAKING GET REQUESTS WITH THE NODE HTTPS MODULE
- When the client make a get request to our server,from our server we send a req to someone elses server with required parameters
via their api(its like a menu they provided) to get the data back,and we include that data in our response.*/
```js
const app=express(); //It will initialize a new express app.
```

- Google 5 Ways to Make HTTP Requests in Node.js
- We can use native node module called https to send a request to external server.
```js
const https = require('https');
https.get(url,function(response){ //sends a req to url and fetch data as a response
  console.log(response);
})
```

### 5
### HOW TO PARSE JSON
`console.log(response.statuscode);`
//Google "HTTP response status codes"
- 200 - ok
- 404 - resourse not found
- 401 - unauthorized

```js
https.get(url,function(response){
  console.log(response.statusCode);
  response.on("data",function(data){ //the response from external server contains on() method,if it is "data" then triggers callback
    console.log(data);   //here the data we get is in hexadecimal format
  })
  ```

- Instead of getting a hex data,we can convert it into javascript object Using
- String to javascript object
const weatherData=JSON.parse(data); //It will turn json in some sort of string formats say hexadecimal/binary/text into an actual javascript object.
- JSON is a string representation of an object. It is an interoperable serialization format. It is not tied only to javascript.
For example there are JSON serializers for .NET allowing you to serialize/deserialize .NET objects.*/

- We can also do the reverse Way
- javascript Object to String
```js
const object={
  name:"Nithish",
  age:20
}
console.log(JSON.stringify(object))
In terminal:
{"name":"Nithish","age":20}

console.log(weatherData.main.temp);
//instead of manually tracking a value in js object,copy the value path from json viewer awesome chrome extension
```

### 6
### USING EXPRESS TO RENDER WEBSITE WITH LIVE API DATA
```js
//There is only one res.send() in callback fun of an app.get() method,otherwise it will crash.
//but we can have multiple res.write() methods,at the end we call res.send()
res.write("<h1>" + "The temperature in London is " + temp + " degrees Celsius" + "</h1>");
res.write("<p>" + "The weather is currently:" + weatherDescription + "</p>")
res.send();
//The weather property of json object has an array of values as a value and icon is one of them
//from that icon value we can get the weather image
ex: const imgURL="http://openweathermap.org/img/wn/"+icon+"@2x.png" //read the api docs
 res.write("<img src="+imgURL+">")
 ```

 ### 7
 ### USING bodyParser TO PARSE POST REQUESTS TO THE SERVER
 - lets divide the url into different variables
 - When the user visits our home page ,send back an html file which contains a form or whatever
 - when the user post anything using that form ,parse that post request using body-parser
 - use the user entered data as a part of the api endpoint query/path/parameter whatever

 ### 8
 ### THE MAILCHIMP API
 //Creating a signup page for a news letter



### 15)Newsletter-Signup
### 1
- THE MAILCHIMP API
- Creating a signup page for a news letter
- In a lot of projects,especially node js projects that use express we will see that we write the server side coding
in a file called app.js*/

### 2
### Take a signup page from bootstrap.
```js### //Add bootstrap cdn link.
//create a style.css if there is any custom css
<input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" required autofocus>
/*Customize it as your requirment*/

  res.sendFile(__dirname+"/signup.html") //When we do this,the local stlyes wont work
//In order for the local styles to work,we need to specify the static folder by using the static method of express,passing the folder that contains the static files

app.use(express.static("public"))

<link href="css/styles.css" rel="stylesheet"> //css is inside public
```
### 3
### POSTING DATA TO MAILCHIMP'S SERVERS VIA THEIR WEBAPPLICATION
- Search about lists in mailchimp api docs
- first the developer needs to get an api key to authenticate himself with their servers
- Go to mailchimp and create an account
- Create an api key
- go to audience>settings to get a list //
- They expect to send data in json format,for that we need to create a js object with key value pairs with keys that mailchimp recognize
var data={
  members:[{
    email_address:email,
    status:"subscribed"
  }]
}
//we need to turn this js object to json
var jsonData=JSON.stringify(data);
//To host/send data to external server we use https.request(url,options,function(response){})

//We can get the url in list documentation
//options is a js object
const options={
  method: "POST", //Type of request
  auth:"username:apikey"
}

const request=https.request(url,options,function(response){
  response.on("data",function(data){
    console.log(JSON.parse(data));
  })
})

request.write(jsonData); sends jsonData to mailchimps server
request.end();

//4
//Adding Success and Failure Pages

if(response.statusCode===200){  //here the response is of https.request(url,options,function(response){})
  res.sendFile(__dirname+"/success.html")
}else{
  res.sendFile(__dirname+"/failure.html")
}

app.post("/failure",function(req,res){
  res.redirect("/");   //The post request of try again button to failure route is redirected to the home route
})

//5
//Deploying your server with Heroku
//You can host 5 projects in heroku for free
//Sign up for heroku
//follow the step by step guide for nodejs
//Once our project is uploaded on heroku ,their server choosed a dynamic port so we need to write
app.listen(process.env.PORT || 3000,function(){}) //Work both on heroku and on local system
//We need to create a Procfile in our project folder with the code
web: node app.js
in it.
//The next step is to save our work to git
git init //it will initialize a brand new git repository
git add . //add all files to current repository
git commit -m "First commit" //commit the changes with a message

//The next step is to deploy the app
heroku create
git push heroku master //this will push our local version to heroku
heroku logs //can see crash logs on terminal

//If we do any updates in our local file
git add .
git commit -m "Change success page h1"
git push heroku master


### COMMAND LINE NOTES
- HYPER TERMINAL(git,git bash,command line,terminal)
- We need to cinfigure hyper to use git bash.
- We use shells(GUI,Command Line) to interact with the kernal of the os.
- Bash shell is a Command Line Interpreter(CLI) for the UNIX system.
- Commands that I learned

      mkdir foldername
      ls
      cd
      cd ~ (go back to root directory)
      cd .. (go one level back)
      cd "C:\Users\nakka\Music\VideoProc Converter"
      ctrl A,ctrl E,ctrl U

### CREATING,OPENING,AND REMOVING FILES THROUGH THE COMMAND LINE

```bash
touch filename.extension  //creates a file
start filename.extension  //opens a file
rm filename.extension	  //removes a file
pwd                       //printing working directory
rm *                      //removes all files in current folder
//always check with directory you are in beforw doing any deleting commands.
$ rm -r foldername  (-r is a flag)
```



### GITHUB NOTES
### 1
- Introduction to version control and git

- you can create different savepoints while development of project calling them as different version,if you screw up your code,
you can roll back to previous version

### 2
### Version control using Git and the Command Line

- We are inside our Story directory,it is called as working directory.
- `git init` //creates a .git folder
Initialized empty Git repository in D:/Web Development/Story/.git/

- But we cannot find a .git folder inside Story folder,it is a secret folder
- We can see it in terminal using
`ls -a` command
- In order to start tracking the changes inside files,for ex:chapter1.txt,we need to add this file to staging area.

- `git status`
The files which are inside working directory,but not in staging area are shown in red.
- `git add filename` //To add file into staging area
- `git commit -m` "Complete chapter1" //adds a save point,as a convention we write messages in present tense
- `git log`  //you can see what commits you have made
//instead of adding each file to staging area using  git add filename
- `git add .`  //we can add all the files inside the working directory into staging area using this command
- (HEAD -> master) //It means the current version/state we are in

***We have three areas he- 
Working Directory,Staging area,Local Repository***

- Staging area is used because we may not want to track all the files.
- If we are happy with the file,then we will commit it to the local repository(.git) given a version
name through the commit message
- Let say if we messed up the chapter3 and saved it by mistake.
`git status` //it shows if there are any changes that are not commited.
- If you just want to see the changes that are accidentally made
`git diff filename` //It shows the part that was deleted from the file in red
- `git checkout filename` //rollback to the previous state of the file of last savepoint
- In this video we have only talked about how to work with local repositories.

### 3
### Github Remote Repositories,creating repositories in someone else computer/server
- Exporting a local repository to git hub repository
- Create a new repository in github without readme file
- `git remote add origin url` //It will create the remote repository
(origin is simply the name of our remote,we can call it anything if we want)
- `git push -u origin master` //it pushes the local repository to the remote which is the origin here,master
is the main branch/default branch
- github insights>Network
- Master branch is the main progress line of commits
- We can have a local repository and a remote repository in github in parallel
- We can push our local repository to remote repository using git push -u branch

- `gitignore`
files that we dont want to add to the github like files DS_Store,files that contains api keys,passwords

- `touch .gitignore`
- $ `git rm --cached -r` .  //to remove all files from the staging area
- in the .gitignore file write the filenames as it is with extensions also
gitignore file has some rules to follow
```
#for commenting
*.txt  //it will add all the files with .txt to .gitignore
```
- go to github/gitignore repository on github where u can find predefined templates for various projects

- Cloning a remote repository to pull it to your local machine
`git clone url`

- Branching and Merging
- If we want to try something in our project that we are not confident of, so instead of commiting it to our main branch we can create a side branch(experimental branch),and offcourse we can also work parallerly with our main branch

- If the experimental version is successful we can simply merge it to the main branch with a merge request.

- `git branch branchname`  //to create a new branch
- `git branch` //to view the branches
- `git checkout branchname` //to move between the branches

- After going to a side branch add files to the staging area
commit the changes

- our local files actually changes as we switch branches
- In order to merge side branch to main/master branch,go to your master branch and type
`git merge sidebranchname`

- we can also create and merge branches in github itself.

### Forking and pull requests
- clone your repo>work on it locally>git push
fork others repo into your github account>clone it>work on it locally>git push>send pull req
fork makes a copy remotely,while clone makes copy locally.


### 18)TODOLIST-V1
### 1

```js
//Templates?Why do we need Templates?
//We know that a callback fun has only on res.send(),but it can have multiple res.write()
app.get("/",function (req,res){
  let today=new Date();
  if(today.getDay()===6||today.getDay()===0)
    res.write("<h1>yay!its the weekend</h1>");
  else
    res.write("<h1>Boo!its a working day</h1>" );
    res.write("<p>We have to work</p>" );
    res.send();
});
//Sending an entire html page with res.write() is very difficult
//So what we can do is we can use res.sendFile(__dirname+"/filename.html");
/*But what if we want to send diff html file based on the logic,so creating a whole bunch of html files like weekend.html,weekday.html
is a pain in the ass,so thats why we need to learn templating.*/
//A blog website has a thousand of html files,no one creates them manually
```

### 2
### Creating your First EJS Templates
```js
// EJS (Embedded JavaScript Templating) is one of the most popular template engines for JavaScript
// It also helps to embed JavaScript to HTML pages
//go to ejs.co>using ejs with express
//npm install ejs
//require ejs
app.set("view engine", "ejs"); //set view engine to ejs
//Setup a views folder with all ejs files in it.
//In html template/ejs file the variable is elclosed with a marker like this <%=kindOfDay%> ,and we pass its value from the server file
res.render("ejsfilename",{kindOfDay:value})
```

### 3
### Running code inside ejs template(which is a html file)

```js
<% %> //Scriptlet tag allows us to use only control flow statements(no output) inside ejs file,because its for only content
//We should always try to put logic in server file
//We should enclose each js line with scriplet tag
  <%if(kindOfDay=== "Saturday"||kindOfDay=== "Sunday"){%> //observe this,we havent used <%= %> for kindOfDay
    <h1 style="color:blue"> Its a <%=kindOfDay%></h1>
    
```
//4
//PASSING DATA FROM YOUR WEBPAGE TO YOUR SERVER
//Search date format in js in chrome
let today = new Date();
let options={
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}
let day=today.toLocaleDateString("en-US",options); //here locale is "en-US",it can be anything

//5
//SCOPE
//Scope of local variables is local,ie they can only be accessed inside that block only
//But there is some pecularity in js
if(true){    //this if block considered as soft wall
  var x=2;   //this will have global scope
  console.log(x);
}
console.log(x); //is possible,cuz we declared x using var keyword,
//So var will have global scope no matter where u declare it,this is only particular to js,it other programming lang var will behave normally
//So try to avoid var,the code is more predictable that way
//use let instead

//6
// ADDING PRE-MADE CSS STYLESHEETS TO YOUR WEBSITE
//when we link to the stylesheet normally it will show this error in console
Refused to apply style from 'http://localhost:3000/css/styles.css'
//Because our css/styles.css exits in the root of our project
//When we use express,it doesnt automatically serve all of the project files,infact it only serve up the main access point which we define in our
//package.json file as app.js and also the views folder,and ignores everything
//so the browser cant simply goes to http://localhost:3000/css/styles.css ,cuz this is a dynamic website
//In order to use any file by the browser,the server has to server it
file:///D:/Web%20Development/8)Drum%20Kit%20Starting%20Files/styles.css /*We cant simply replace all of the endpoint with localhost:3000*/
//We create a folder called public and put all the files that we want the server to serve in it
//We need to tell the location of static files
app.use(express.static("public"));

background-image: -webkit-linear-gradient(65deg, #A683E3 50%, #E4E9FD 50%);

.item:last-child {
  border-bottom: 0;
}

input:checked+p {
  text-decoration: line-through;
  text-decoration-color: #A683E3;
}

::placeholder {
  color: grey;
  opacity: 1;
}

### 7
### Understanding Templating vs Layouts
```js
//We can simply use the same ejs template for webpages the need the same functionality ,with some changes
//But the problem arises when we want to create pages that dont need the most of the exiting ejs file functionality
//So EJS provides Layout/Partials
//Create separate ejs files for the repeatitive code like header.ejs,footer.ejs
//to use that code in oter ejs files,simply put
<%-include('header')-%>
<%-include('footer')-%>
//
```
### 8
### UNDERSTANDING NODE MODULE EXPORTS: HOW TO PASS FUNCTIONS AND DATA BETWEEN FILES
- create a new module called date.js,with the date format code
- In order to use one module/file inside another file we need to require it
- const date=require(__dirname+"/date.js")
- Inside each module we can access a js object called module which contains a info about that module.
- whenever we require a module,it tries to run all the code inside the module
- In module obj we have a key called exports with a js object as its value
```js
exports: {}
module.exports.getDate=getDate; //Exporting  getDate fun from date.js file
module.exports.getDay=getDay;   //Exporting  getDay fun from date.js file
exports.getDate=getDate;
exports.getDay=getDay;   //Short cuts that we can use
exports:{ getDate: [Function: getDate], getDay: [Function: getDay] }
const date=require(__dirname+"/date.js")
```
- Now we can access those functions using date.getDate(),date.getDay()
- When we make an array const,we can reassign that variable to a new object,but we can actually push items it to it,
- It is one of the quirks of js
- So when we make an array const in js,it cant protect inside values getting changed by others

### 1
###  Providing MongoDB database to our todo app
//Create three default documents and insert them in ur items collections

### 2
### Rendering Database items
//When user goes to homepage ,search the collection,if it is empty add default items and redirect to homepage else render the foundItems

### 3
### Adding new items
listItem.save();

### 4
### Deleting items from our items collection
```js
//req.body.checkbox value is either on or off
<form  action="/delete" method="post">
  <div class="item">
    <input type="checkbox" name="checkbox" value="<%=item.id%>" onChange="this.form.submit()">
    <p><%=item.name%></p>
  </div>
</form>
//Here we are changing the value to set to the item id
Item.findByIdAndRemove(checkedItemId,function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Item deleted successfully!");
    res.redirect("/");
  }
})
```

### 5
### Creating custom lists using Express route parameters
```js
app.get("/:customListName",function(req,res){
const customListName=req.params.customListName;

List.findOne({name:customListName},function(err,foundListDocument){
  if(!err){
    if(!foundListDocument){
      //Create a new List
      const listDocument=new List({
        name:customListName,
        list:defaultItems
      })
      listDocument.save();
      res.redirect("/"+customListName);
    }else{
      //Render a existing list with default items
      res.render("list", {
        listTitle: customListName,
        newListItems: foundListDocument.list
      });
    }
  }

})
```

### 6
### Deleting a document from a nested collection
```js
List.findOneAndUpdate({name:listName},{$pull:{items:{_id:checkedItemId}}},function(err,foundList){
  if(err){
    console.log(err);
  }else{
    res.redirect("/"+listName);
  }
});
//it pulls document with _id:checkedItemId inside items Array

//Capitalize the routing parameter/customListName using lodash
_.Capitalize(string)
```

### 7
### Deploying web apps with a Database
- http://localhost:3000,here http is the set of rules that govern how we transfer data across the internet to acess web webpages
- mongodb://localhost:27017,here  we are using the mongodb rules which determines how you can access data in a mongoDB Database
- depending on the isp they have strict rules regarding whether you can set up a server using your home internet plan
- here we use heroku to host our node js app,and mongoDB own cloud service called Atlas to host our Database

- How to setup MongoDB Atlas


### 19)BLOG WEBSITE
- Whenever u download/clone any project from github,use npm install in terminal to install all of its dependencies
- Observe the examples in the bootstrap documentation
- Express Routing Parameters
- Instead of handling get req for every parameter,we can use express Routing params to do it dynamically
```js
app.get("/news/:topic",function(req,res){
  console.log(req.params.topic);
})
```
- `rs` //When we type this in terminal while the server is running,it will restart the server
- //lodash is utility package
- _.lowerCase("Nakka-Nithish") //nakka nithish
- It ignores hypens and returns only pure lower case strings
- in urls we use kebab case,but we store postTitles with first letter capitals

### SQL
### 1
- Databases Explained SQL(Structured Query Language) vs NOSQL(Not Only Structured Query Language)
- Depending on the type of data that youre looking to store,and the structure of the data we choose Databases.
- The main diff b/n Databases is whether they are sequel based or no sequel based
- Top SQL Databases are MySQL and Postgres
- Top NOSQL Databases are mongoDB and redis
- SQL Databases stores data in tables
- In sql databases for all cells that dont have a value will be inserted NULL,and NULL can be very dangerous
- In nosql the data is stored as an array of Javascript objects,and it is helpful for startups where your datastructure is not predefined
- Implementing relationships in nosql databases is difficult
- sql and nosql databases are also called as Relational and Non-Relational Databases
- In sql we put data in separated tables and we give connections between them with the help of ids,so in future we can combine them
- In nosql we can also connect various documents ,ex:order document,person document,product documents
- If your data need many relationships choose SQL
- If your data has one to many relationship then choose NOSQL databases ex:one user to many posts
- As the data increases sql database becomes slow,it is not scalable ,we will need powerful computer
- Managing large amounts of data using sql database is like scaling a building vertically
- Where as in mongoDB each row is represented as a Javascript object,so instead of buying a poweful computer,it allows us a
distrubuted system,so your database can be distrubuted among lot of different computers,so we scale horizontally*/
- In case of a sql database we need to have a fixed schema before storing data,where mongoDB is more flexible to changes
- mongoDB is not great with complex relationships


### 2
### SQL Commands:CREATE Table and INSERT Data
- We tend to write keywords in uppercase ex:SELECT,FROM etc.,
- For every database the first thing to learn is CRUD operations, it means Create,Read,Update and Destroy data
- Go to w3schools,it has best documentation for sql
- Create table
```sql
CREATE TABLE products(
id INT NOT NULL,
name STRING,
price MONEY,
PRIMARY KEY (id)
)
```
- Insert data into it
```sql
INSERT into products VALUES (1,"Pen",1.2)
INSERT into products(id,name) VALUES (2,"Pencil")```

### 3
### SQL commands READ,SELECT and WHERE
```sql
SELECT * FROM products
SELECT * FROM products WHERE id=1
```

### 4
### Update Single Values and Adding Columns in SQL
```sql
UPDATE products set price=0.8 WHERE id=2
//If we want to add a new column to table,it means we need to alter the table
ALTER table products add stock int
```

### 5
### DELETE
- If we want to delete a record
```sql
DELETE FROM products WHERE id=2
```

### 6
### Sql Relationships,Foreign keys
- Each table should have a primary key
- A foreign key of one table is a primary key of another table thats how we create connections
- Later we use joins to form a table as our wish  - ex:inner join,left join and so on


### MONGODB
### Installing MongoDB on windows
- C:\Program Files\MongoDB\Server\6.0\data\
- vim filename //to edit with vim editor
- type i to enter insert mode
- esc to exit insert mode
- :wq! to save and exit v- 


- MongoDB CRUD Operation in the shell: Create
- In 6.0 mongoDB we need to install mongosh externally,and put that extracted folder in bin
- In .bash_profile
```bash
alias mongod="/c/Program\ files/MongoDB/Server/6.0/bin/mongod.exe"
alias mongo="/c/Program\ Files/MongoDB/Server/6.0/bin/mongosh-1.6.1-win32-x64/bin/mongosh.exe"
```
- once edited the .bash_profile using vim,we need to restart the terminal in order for the mongo
shortcut to work*/

- `mongod` //it will starts the mongodb server that is connected to the local mongoDB database
- //Open a new terminal tab
- `mongo` //Opens a Mongo shell

- `show dbs` //shows the databases
- `use shopDB `//creates a database
- `db` //to know on which database u are currently in

- `db.products.insertOne({_id:1,name:"Pen",price:1.20})` //creates a collection and inserts one document in it
- `db.products.insertMany()`

- a collection in mongoDB is like a table in sql world,and a document is like a row of the table
show collections //It will shows the collections present in the current db


- Reading and Queries
```js 
db.products.find() //shows all the documents present inside that collection
db.collection.find(query, projection, options) //Read documentation
```
- here projection means the fields that we want to return
```js
db.products.find({name:"Pencil"}) //only query
db.products.find({price:{$gt:1}}) //only query
db.products.find({_id:1},{name:1}) //query and projection here we can use 1 or true
[ { _id: 1, name: 'Pen' } ]
```
- Whenever we use find,_id always comes by default,if we dont want it,we can set it to false in projection
`db.products.find({_id:1},{name:1,_id:0})
[ { name: 'Pen' } ]`


### Update
`db.products.updateOne({_id:1},{$set:{stock:32}})
`
### Delete
`db.products.deleteOne({_id:2})
`
- Relationships in MongoDB
- There are two ways
- First way is the most preferred method

```js
db.products.insert(
{
_id:3,
name:"Rubber",
price:1.30,
stock:43,
reviews:[
{authorName:"Sally",
rating:5,
review:"Best rubber ever!"
},
{authorName:"John",
rating:5,
review:"Awesome rubber!"
}
]
}
)
```

- This way of embedding documents inside another document is suitable for one to many relationships
- One product will have many reviews
- One user will create many comments

- Another format we might see out there in the wild is,we might have two product documents
and we could create another collection say a collection of orders and for each document in that
orders collection we might have like shown below
- products collection
```js
[
  { _id: 1, name: 'Pen', price: 1.2, stock: 32 },
  { _id: 2, name: 'Pencil', price: 0.8, stock: 12 }
]
```
- orders collection
```js
[
  {orderNumber:3243,productsOrdered:[1,2]}
]
```
- Working with the Native MonogDB driver
- until now we have seen how to use mongoDB in an isolated setting ie., in command line through mongoshell
- We need to learn how to integrate MongoDB database in Nodejs application
- Two ways to do this
- One way is to use MongoDB native driver
- Another way is to use ODM(Object Document Mapper) thats called mongoose
- mongoose is popular because it vastly simplifies and cuts down the code that required in order to
work with the mongoDB database*/

- How the Native MongoDB driver works
- Read Node.js Driver documentation
- `npm init -y` //initialize npm and accept all the defaults
- In reality most developers who are working with node and mongoDB will rarely use Native mongoDB driver
- Native mongoDB allows a lot of personalization and you can drill down to the specifics and u can set up and use MongoDB database
with a high level of control*/


### 22)NATIVE MONGODB DRIVER


### MONGOOSE

### 336)Introduction to Mongoose
- Mongoose is called ODM(Object Document Mapper)
- It allows our Nodejs app which speaks the language of js objects to be able to talk to MongoDB database
- which speaks in the language of documents and collections and databases.
- `db.dropDatabase()` //Drops/deletes a database
- `npm install mongoose`

```js
const mongoose=require("mongoose");
```

```js
mongoose.set('strictQuery', false);
- connects to fruitsDB database
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
```

- Create a schema
```js
const fruitSchema=new mongoose.Schema({
  name:String,
  rating:Number,
  review:String
});
```
- Create a model using that Schema
```js
const Fruit=new mongoose.model("Fruit",fruitSchema);  //We can assume this model as our collection
```
- Above line Creats a collection called fruits by pluralizing and dropping the capital F of the Fruit
- Its actually using lodash to achieve this

- Create a document using that model
```js
const fruitjs
=new Fruit({
  name:"Apple",
  rating:7,
  review:"Pretty solid as a fruit"
});
```

- Save to the fruits collection
```js
fruit.save();
```

- Inserting many documents at a time using model(mongoose docs>API>Model)
```js
Fruit.insertMany([kiwi,orange,banana],function(err){
  if(err){
    console.log(err);
  }else{
    console.log("successfully saved all the fruits to fruitsDB");
  }
});
```

### 2
### Reading from the database
```js
Fruit.find({},function(err,fruits){  //{} no condition means find everything
  if(err){
    console.log(err);
  }else{
    console.log(fruits);
  }
});
```
- Its good practice to close our database connection once we are done with it
mongoose.connection.close();

### 3
### Data Validation with Mongoose
- Mongoose makes the Validation of data entry a lot easier,instead of writing our own assert statements all over the place and specifying specific things
- We can actually use Mongooses built in Validation checks to make it a lot easier and a lot quicker to use
```js
const fruitSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true //required:[true,"Please check your data entry,no name specified!"]
  },
  rating:{
    type:Number,       //Instead of just datatype,we also add Validation
    min:1,             //mongoose docs>Validation
    max:10
  },
  review:String
});
```

- Validation keeps our data clean in a format that we expect it to be

### 4
### Update and Delete Data using Mongoose
```js
Fruit.updateOne({_id:"63aaf44e2368875c27fc2dc4"},{name:"Mango"},function(err){ //Filter,update and callback
  if(err){
    console.log(err);
  }else{
    console.log("successfully updated");
  }
});
```

### Deleting a particular Document
Fruit.deleteOne({name:"Peach"},function(err){  //model.deleteMany()
  if(err){
    console.log(err);
  }else{
    console.log("Document deleted successfully!");
  }
});

### 5
### Establishing Relationships and Embedding Documents into each other
- We have two collections,People and Fruits
- What if John inside of People collection have a favourite fruit,which embeds a fruit document from our fruits collection
- We would do it by establishing a relationship

- We cant simply embed fruit by saying Person.updateOne() and add a field thats not specified in the Schema
- So first we need to specify it in the personSchema
```js
const personSchema=new mongoose.Schema({
  name:String,
  age:Number,
  favouriteFruit:fruitSchema
});
```


```js
const Person=new mongoose.model("Person",personSchema);

const person=new Person({
  name:"Amy",
  age:37,
  favouriteFruit:pineapple
})
person.save();

//Now the person inside people collection have a relationship with a fruit inside fruits collection
```

### RESTful API
### Build your own RESTful API

Client<---->Server<----->DataBase

### 1
### REST stands for Representational State Transfer
- If the server encounters a req(HTTP request) that cant be fullfilled it gives error 404(resource doesnt exist)
- Hyper text transfer protocol(Http) is not the only language that servers can speak,we also have FTP Request(File Transfer Protocol)
- HTTPS stands for HTTP secure request,any one can tap into the req,res that are going across the internet and can be tapped by lots of people.
- So we can use cryptography and encrypt our request.
- There is only a certain amount of things that the server can do,the server will have a whole bunch of APIs which are the services that it can
expose the clients to tap into*/

- REST is just an architectural style for designing APIs ,and its not the only architectural style we have.
- We have SOAP,GraphQL,FALCOR and theres a lot of other architectural styles
- REST proposes a set of rules that web developers could follow when theyre building their APIs.
- If every web API was built using the same common guiding principles then it would be so easy for everybody to work together and be able to use different
APIS quickly,easily and efficiently*/
- Important rules to follow to make our API restful*/
  * Use the HTTP request verbs
  * Use specific pattern of routes/endpoint URLs

HTTP request verbs are

- ***get***     -Read from the database
- ***post*** 	-Create some data in the database
- ***put***							      -Update some data in the database(It replaces the entire entry/document)
- ***patch***(it was added to the HTTP request language very recently)-Update some data in the database(It only replaces the certain piece of the entry/document)
- ***delete***  - Deletes a particular piece of data in the database


- specific pattern of routes/endpoint URLs
ex:www.google.com/elephants
www.google.com/camels etc.,

- RESTful routing

HTTP verbs		/articles		               /articles/jack-bauer

GET		Fetches all the articles	        Fetches the article on jack-bauer

POST		Creates one new article			            -

PUT		           	-			                Updates the article on jack-bauer

PATCH			        -		                  Updates the article on jack-bauer

DELETE		Deletes all the articles	    Deletes the article on jack-bauer


### 2
### Creating a database with Robo 3T
- We are going to create a wikipedia style api
- Robo 3T is a gui to work with a mongodb database
- Create a new database called wikiDB>create a collection called articles>insert the documents

```json
{
    "_id" : ObjectId("5c139771d79ac8eac11e754a"),
    "title" : "API",
    "content" : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
}


{
    "_id" : ObjectId("5c1398aad79ac8eac11e7561"),
    "title" : "Bootstrap",
    "content" : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
}


{
    "_id" : ObjectId("5c1398ecd79ac8eac11e7567"),
    "title" : "DOM",
    "content" : "The Document Object Model is like an API for interacting with our HTML"
}
```
- Set up server

- Lets implement everything that is present in the table

### 3
### Get All Articles
```js
//In case of err its better to send it to client
app.get("/articles",function(req,res){
  Article.find(function(err,foundArticles){
    if(!err){
      res.send(foundArticles);
    }else{
      res.send(err);
    }
  })
});
```


### 4
### Post a new Article
- Here the client sends a piece of data to the server,but here we dont have a web form,then how can we build our API without the need for building the frontend*/
- Here comes a handy tool called postman,it helps us to test our api without building the frontend at all*/
- We have our server that can speak to the database and were exposing certain parts of our server through the APIs were
building,so that clients can be able to work with our database*/
- Here client can be a number of things,a browser trying to load up a web page, it makes a get req and the server sends relevant html,css and js files*/
- Here client can also make a get req that is looking for a particular resourse say some data or a file*/

- go to postman>body>enter the data with the respective keys to access them in our app.js
```js
app.post("/articles",function(req,res){
  const newArticle=new Article({
    title:req.body.title,
    content:req.body.content
  });
  newArticle.save(function(err){
    if(!err){
      res.send("Successfully added a new article");
    }else{
      res.send(err);
    }
  });
});
```
- we can add a callback to save() method to tell the client whether the post req is successful or not.


### 5
### Delete All Articles
```js
app.delete("/articles",function(req,res){
  Article.deleteMany(function(err){
    if(!err){
      res.send("Successfully deleted all the articles");
    }else{
      res.send(err);
    }
  });
});

//Chained route handlers using Express
app.route("/articles")
   .get()
   .post()
   .delete();
```


### 6
### Get a Specific Article
```js
app.route("/articles/:articleTitle")
   .get(function(req,res){
     Article.findOne({title:req.params.articleTitle},function(err,foundArticles){ //here Jack%20Bauer is decoded as Jack Bauer
       if(foundArticles){
         res.send(foundArticles);
       }else{
         res.send("No articles found with that title");
       }
     });
   });
```

- If we want to access the title with space in it,for example, Jack Bauer ,then in url encoding the space is represented as %20
- Search html url encoding and see w3schools.

### 7
### Put a Specific Article
- Put req is like replacing the entire bicycle(from that amazon example)

- By default if we were to update our document using MongoDB,then overwrite is already enabled,and it will overwrite the document
if you dont include all of the fields in your update*/
- But by default mongoose will prevent properties being overwritten and deleted*/
    ```js
    .put(function(req,res){
        Article.updateOne({title:req.params.articleTitle},
          {$set: {title:req.body.title,content:req.body.content}},
          {overwrite: true},
          function(err){
            if(!err){
              res.send("Successfully updated the article");
            }
          });

    //(or)

    .put(function(req, res) {
      Article.findOneAndReplace({
          title: req.params.articleTitle
        },
        req.body, null,
        function(err, docs) {
          if (err) {
            console.log(err)
          } else {
            res.send("Document replaced Successfully!");
          }
        }
      );
      
    ```
```js
  // Article.update(    //Its saying Article.update() is deprecated
  //   {title:req.params.articleTitle},
  //   {title:req.body.title,content:req.body.content},
  //   {overwrite:true},
  //   function(err){
  //     if(!err){
  //       res.send("Successfully updated the article");
  //     }
  //   }
  // );
  //});
  ```


### 8
### Patch a specific article
- If you want to only want to update a specific field in a specific document then the HTTP method that we should be using is patch();

- 9
```js
.patch(function(req, res) {
  Article.updateOne({
      title: req.params.articleTitle
    }, {
      $set: req.body
    },
    function(err) {
      if (!err) {
        res.send("Successfully updated the article");
      }
    }
  );
})
```

### 10
### Delete a specific article
```js
.delete(function(req, res) {
  Article.deleteOne({
    title: req.params.articleTitle
  }, function(err) {
    if (!err) {
      res.send("Article deleted successfully!");
    } else {
      res.send(err);
    }
  });
});

```

### 25)WIKI-API

### 26)SECRETS WEB APP

### 1
### Introduction to Authentication
- Why Authentication?
- When a user uses our web app,they starts generating data,so in order to associate those pieces of data with individual users we
need to create an account for each user so that they would sign up to our website using a username and password and we create like an id card
for them to uniquely identify them on our database and to save all the data they generate on to that account*/
- To restrict access to certain areas of the website depending on the status of the user,for ex take netflix/spotify if they paid for a subscription
then we update their account in our database and let them access to the tv shows or songs*/
- The difficult part of Authentication comes from how secure youre going to make your website*/
- We go from creating an account,adding the user to our database,saving their username and password to enable them to log in,
all the way up to covering thing such as OAuth and social logins including creating things such as sessions,cookies and hashing and encrypting passwords */
- We can add 6 levels of security to our website
- If you want u can see all of these 6 levels code,go to angela resours### 


### 2
### Lets add some Authentication to our website
- Level 1 security-Register users with username and password
- Here we dont have a direct get req to secets page,we send it only if the user registers by entering email and password
- we can add callback to save() method
```js
app.post("/register",function(req,res){
  const newUser=new User({
    email:req.body.username,
    password:req.body.password
  });
  newUser.save(function(err){
    if(err){
      console.log(err);
    }else{
      res.render("secrets");
    }
  });
});
```

- login to the website
```js
app.post("/login",function(req,res){
  const username=req.body.username;
  const password=req.body.password;
  User.findOne({email:username},function(err,foundUser){
    if(err){
      console.log(err);
    }else{
      if(foundUser){
        if(foundUser.password===password){
          res.render("secrets");
        }
      }
    }
  });
});
```

- Here there is one problem
- We stored all our passwords in plain text and any one of my employees can look through my database and know
what everybodys passwords,and also if hacker hack into my server and locate my database this is a pretty big loot for them */
- So dont store your users passwords in plain text

### 3
### Level 2 Authentication- Database Encryption
- Caesar Cipher is one of the earliest ways of encrypting messages that we know
-      A B C D E f
-  A B C D E f      //here the shift is 2

- cryptii.com

- All encryptions work the same way,we have a way of scramling a message and we require a key to unscramble the message
- We use mongoose-encryption package to encrypt any data in our database
- Theres two ways of going about encrypting your database using this mongoose-encryption package
- One way is to create encKey and sigKey (read documentation)
- Another way, which is a convenient method,we simply use a long unguessable Secret String Instead of Two Keys

- `const secretString="ILovewatchingAnime."`      //creating a secret long unguessable Secret
```js
userSchema.plugin(encrypt,{secret:secretString}); //Adding our mongoose-encryption package as a plugin to the userSchema
```
- plugins are just extra bits of packaged code that you can add to the mongoose schemas to extend their functionality or give them more powers

```js
userSchema.plugin(encrypt,{secret:secretString}); //This will encrypt all of the document fields
userSchema.plugin(encrypt,{secret:secretString,encryptedFields: ['fieldName','fieldName']}); //To encrypt only certain fields
```

- mongoose-encryption works in a way that it will encrypt whem we call save() and it will decrypt when we call find()
- This means that if somebody hack into your website they can easily access the app.js and our secretString and they can use the
same package to decrypt all the passwords*/

### 4
### Using Environment variables to keep secrets safe
- Imagine if we put our project in github ,any one can see this secret string or any other api keys we have
- And using this secret key they can decrypt our entire database
- A lot of hackers scrape the internet for developers who have accidently published their secret keys/api keys
- Environment variables is a simple file where we keep our sensitive variables such as encryption keys and api keys
- We use a popular package called dotenv
- `npm install dotenv
`
```js

require('dotenv').config()  //Add this line right at the top in app.js
//Create a .env file in your project root directory
//Add your sensitive data to .env file like this
SECRET=ILovewatchingAnime.
API_KEY=fsdfkhdfghgjsdfjsfjjdf

//you can access them like This
process.env.SECRET
process.env.API_KEY
```

- Create a .gitignore file and copy paste node project gitignore template

- github works on version control basis
- So the first thing you should do when you start a project is create a .env file and add it to .gitignore
- when we deploy on heroku they actually have a specific way of handling this config vars

### 5
### Level 3 - Hashing Passwords
- At this moment the biggest flaw in our Authentication method is that we have an encryption key
- So some body is motivated enough to hack into your server/database then its not that difficult for them to get your encryption key,
even if you put it in your Environment variable or somewhere secure on your server*/
- Here hashing comes into picture
- Hash functions are mathematical equations that are designed to make it almost impossible to go backwords,so its almost impossible
to turn a hash back into password*/
- ex:finding factors of 377 otherthan 1 and itself is kinda difficult
- But we can easily multiply 13 and 29 and get 377
- This is a simple version of hash functions

- `npm install md5 `   //md5 stands for Message-Digest algorithm 5

```js
var md5 = require('md5');

console.log(md5('message'));
```

- When the users register we store the hash of thier password
- When the users login we convert their entered password into hash and compare it against the stored hash
```js
app.post("/register",function(req,res){
  const newUser=new User({
    email:req.body.username,
    password:md5(req.body.password)
  });
  newUser.save(function(err){
    if(err){
      console.log(err);
    }else{
      res.render("secrets");
    }
  });
});

app.post("/login",function(req,res){
  const username=req.body.username;
  const password=md5(req.body.password);
  User.findOne({email:username},function(err,foundUser){
    if(err){
      console.log(err);
    }else{
      if(foundUser){
        if(foundUser.password===password){
          res.render("secrets");
        }
      }
    }
  });
});
```
- But hashing also comes along with its own problems


### 6
### Hacking 101
- If we can see passwords in plaintext means the security methods they follow are horrible

- How passwords are hacked
- Hackers convert most of the commonly used passwords into their hashes and creats a hash table
- Now they compare the hacked database passwords hashes with the hash table they made
- what if they use their date of birth of their pets name
- How they make hash tables
- All words from a dictionary(Dictionary Attack)
- All numbers from a telephone book
- All combinations of characters up to 6 places
- All of these combine will be upto 19.8 billion combinations(can be calculated in 0.9 seconds)

- They buy latest gpus/graphics cards which are capable of parallel processing
- with one of the latest gpus you can calculate about 20 billion md5 hashes/second
- md5 is one of the quickest hashes to calculate
- The longer the password,the difficult it is to crack it


### 7
- Hashing passwords with bcrypt and Salting
                    salt               Hash
  password + random set of characters--------------->Hash
                                     function

- We store the salt in the database along with the hash
- So when the user enters the password we generate the hash combining that stored salt and compare the hash generated
against the stored hash*/
-  20,000,000,000 md5 hashes/second
-  17,000 bcrypt hashes/second

- bcrypt is one of the industry standard hashing algorithms that developers use to keep their users passwords safe
- We also use salt rounds,the more the salt rounds,the saltier the passwords become
- So as the cpu power increase(according to moores law),we increase the number of salt rounds
- The database might look like this
username                  Salt                       Hash*10

- bcrypt package supports stable versions commonly
- So it is recommended to use the latest stable version,see LTS version in node official website
- how can we change the version of node that we already installed
- We use something called nvm(node version manager),go to nvm git repo and copy paste the nvm installation link in terminal
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
nvm install 10.15.0 //example

- With every npm package there will be a link to the git repo where the code is hosted,and there we can explore the
issues people having while they are trying to use this repository*/

```bash
npm i bcrypt@versionnumber
npm install bcrypt@5.1.0 /*or simply*/ npm i bcrypt
```
- My advice is change node to latest LTS version and also install bcrypt latest version
const bcrypt = require('bcrypt');
const saltRounds = 10;

```js
//bcrypt.hash() to store
app.post("/register",function(req,res){
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    const newUser=new User({
      email:req.body.username,
      password:hash
    });
    newUser.save(function(err){
      if(err){
        console.log(err);
      }else{
        res.render("secrets");
      }
    });
});
});

//bcrypt.compare() to compare
app.post("/login",function(req,res){
  const username=req.body.username;
  const password=req.body.password;
  User.findOne({email:username},function(err,foundUser){
    if(err){
      console.log(err);
    }else{
      if(foundUser){
        // Load hash from your password DB.
        bcrypt.compare(password, foundUser.password, function(err, result) {
          if(result===true){
            res.render("secrets");
          }
        });

      }
    }
  });
});
```

### 8
### Level 5 Authentication
- COOKIES AND SESSIONS
- These cookies in web development are like fortune cookies,cuz they have a msg in them and they can be broken to reveal the message
- Imagine if you go to amazon and add an item to your cart and immediatly u got distracted and go to another website abandoning
amazon,well what does amazon do? as soon as u added that item in your cart amazon has created a cookie and it stored that cookie
stores that cookie in our browser*/
- go to settings and search for cookies
- cookies are used to save our browsing sessions,cookies are also used for retargetting ads,means they remind about that product
when u go to other websites*/
- When we add a computer to our basket in amazon,it makes a post req to amazon server,and at this moment the amazon server creates
a cookie like this user wants to buy a computer and send that cookie back to browser along with the post response and the browser
is told to save that cookie*/
- So tomorrow if u again visit amazon that cookie stored in ur browser is sent along with your get request,and the server identifies
u and sees if u have any previous sessions,its like cracking open the fortune cookie*/
- There are a lot of different types of cookies,but the type of cookies we are looking at are the ones used to establish and
maintain a session(session cookies) */
- A session is a period of time when a browser interacts with a server */
- Usually when u login to a website thats when ur session starts and thats when ur fortune cookie gets created and inside that
fortune cookie you will have your user credentials that says this user is logged and has been successfully authenticated,so that
means as you continued to browse the website you wont be asked to login again when you try to access a page that requires Authentication
because they can always check against that active cookie you have on your browser and it maintains your authentication for this
browsing session until the point when you log out which is when this session ends and the cookie thats related to the session gets
destroyed*/

- We will implement cookies and sessions into our wesite and and we do it using Passport*/
- Passport allows you to authenticate ur users using either a local strategy like what were doing right now which is username and
password or use a whole bunch of other services such as google,facebook,linkdin and twitter, and it makes it a lot easier for you
to be able to plug these different ways of authentication into your website*/

- Using Passport.js to add cookies and sessions
- Packages we will use
passport
passport-local
passport-local-mongoose
express-session

- install all of these Packages

```js
const session=require('express-session');
const passport=require('passport');
const passportLocalMongoose=require('passport-local-mongoose') //passport-local is a added as a dependency of this,so we dont have to require it again
```

```js
//lets setup/initialize a session with some initial configuration by passing some options
app.use(session({
  secret:"I Love watching Anime.",
  resave:false,
  saveUninitialized:false
}));
//lets initialize our passport
app.use(passport.initialize());
//tell our app to use passport to also set up our session
app.use(passport.session()); //to manage those sessions using passport
//place the above three above mongoose.connect()
userSchema.plugin(passportLocalMongoose); //using this we salt and hash our passwords and to save our users into our MongoDB database
```

- passport-local configuration
- Create a strategy which is gonna be the local strategy to authenticate users using their username and password and also to
serialise and deserialise our user*/
- The serialise and deserialise is only necessary when we are using sessions and what it does is*/
- serialise - it creates a fortune cookie and stuffs the message namely our users identifications into the cookie*/
- deserialise - it basically allows passport to crumble the cookie and discover the message inside, which is who this user is
and all of their identification so that we can authenticate them on our server*/

- Normally if u just use passport and passport-local u would have to write a lot more code,but because were using passport-local-mongoose ,
its going to take care of a lot that in between code for us*/

- We just need to do is just add these three lines of code from passport-local-mongoose documentation,right below where we create our new mongoose model*/
```js
passport.use(User.createStrategy()); //to create a local login strategy

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//lets setup the register and login post routes using passport-local-mongoose
app.post("/register",function(req,res){
  //here passport-local-mongoose does all the user creation,hashing and saving for us
  User.register({username:req.body.username},req.body.password,function(err,user){
    if(err){
      console.log(err);
      res.redirect("/register");
    }else{
      passport.authenticate("local")(req,res,function(){    //this callback is triggered only when the authentication is successful
        res.redirect("/secrets");  //Now we actually let users to directly make a get req to secrets page,because we are now using sessions
      });
    }
  });
});
app.get("/secrets",function(req,res){
  if(req.isAuthenticated()){
    res.render("secrets");
  }else{
    res.redirect("/login");
  }
});
//browser session ends when we close the tab/quit chrome
app.post("/login",function(req,res){
  const user=new User({
    username: req.body.username,
    password: req.body.password
  });
  //this login() belogs to passport package
  req.login(user,function(err){
    if(err){
      console.log(err);
    }else{
      passport.authenticate("local")(req,res,function(){  //This callback is triggered only if the user is authenticated
        res.redirect("/secrets");
      });
    }
  });
});
```
- Both when they successfully registered or successfully logged in usig the right credentials,we are going to send a cookie
and tell the browser to hold onto that cookie because the cookie has a few pieces of information that tells our server about
the user,namely that they are authorized to view any of the pages that require authentication*/
- Simply when they make post req to reg/login ,using right username and password,then a cookie is send to store on their
browser,that cookie is send to server whenever they make a get req to any of the page that require authentication */

```js
//Lets add a logout route
app.get("/logout",function(req,res){
  //this logout() belongs to passport package
  req.logout(function(err) {  //Here we deauthenticate the user and end the user session
      if (err) { console.log(err)}
      res.redirect('/');
    });
});
```



### 9
### Level 6 OAuth 2.0 & How to implement sign in with google
- Third Party OAuth2.0
- OAuth - Open Authorisation ----> It is simply a open standard for token based authorization*/
- Lets imagine we are creating an app called bracebook which is like a facebook for people with braces for teeth*/
- When u are a new user u might not have any friends in bracebook,so what we can do as the developers of bracebook is we
can ask the user for permission to access thier facebook account and which friends they have on facebook are already users
of our service bracebook,now the user sign up they'll already see that some of their friends are already on bracebook*/
- How this works?*/
- On log in page,We can ask the user to sign in either manually - they dont get instant friends
Or we can ask them to sign in with facebook*/
- In this case we make a get request to fb asking them for this user's friends on facebook and fb would return with a
post req with that list of users and emails to our server where we can compare this list against our database of users*/
- Then we can automatically add matched users as the friends of this new user*/
- Linkedin asks you to log in via google and it will look through all of your contacts on gmail in order to add them automatically
to linkedin */
- By using OAuth were able to access pieces of information on these third party websites such as their friends,emails or their
contacts on gmail*/

- In our case we delegate the task of managing passwords securely to the companies like fb and google*/
- fb,google and so on also pepper the passwords,some companies also encrypt the entire database and have a wide array of complex
mathematical solutions to keep their user passwords under lock and key*/
- So we ask users to login to their facebook and fb tells us whether the user is genuine or not*/
- Why OAuth?
1. Granular Access Level--when they login to their fb account u can request some data back from it such as thier profile,thier frds list etc
1. Read/Read+Write access --u can request particular data ,u can also post to fb from ur website with read+write access
1. Revoke Access -- the user can go to fb and revoke the access that they given to ur website

How this works
- Step 1
Set up our app in their developer console and get an app id/client id*/
- Step 2
Redirect to Authenticate on that third party ex:fb,google */
- Step 3
User Logs in*/
- Step 4
User reviews the permissions that our website is asking for and Grants Permissions
*/
- Step 5
- Receive Authorisation code from facebook(Auth code)
- We can also exchange Auth code for an Access token from fb and we would save it in our database
Access token lasts longer than auth code*/

`npm install passport-google-oauth20` //latest 2.0 implementati- 

- google developers console
- New project>credentials
- OAuth consent screen---->Scopes----->Test users-------->Summary
- get a client id and a client secret
const GoogleStrategy = require('passport-google-oauth20').Strategy;

- paste this above all the routes code
```js
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo"

  },
  function(accessToken, refreshToken, profile, cb) {
    // console.log(profile);
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));


const findOrCreate = require('mongoose-findorcreate')
userSchema.plugin(findOrCreate);  //inorder for User.findOrCreate() to work

//These will work for all strategies
passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

//When user clicks signup with google they make a get req to this route
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }) //This opens google login page
);
//Scope is which user data that we want to get from that third party

//After successful login it redirects to this route
app.get('/auth/google/secrets',
  passport.authenticate('google', { failureRedirect: '/login' }),  //starts a session
  function(req, res) {
    // Successful authentication, redirect to secrets page.
    res.redirect('/secrets');
  });
```

- In userSchema we should have a googleId field

- Bootstrap social buttons
https://lipis.github.io/bootstrap-social/
- Download and extract>we need bootstrap-social.css file

- Lets finish our app
```js
/*Passport saves user details in req variable,we can access it using req.user*/
app.post("/submit",function(req,res){
  const secret=req.body.secret;
  User.findById(req.user.id,function(err,foundUser){
    if(err){
      console.log(err);
    }else{
      if(foundUser){
        foundUser.secret=secret;
        foundUser.save(function(){
          res.redirect("/secrets");
        });
      }
    }
  })
})

app.get("/secrets",function(req,res){
  User.find({secret:{$ne:null}},function(err,foundUsers){ //All users with secret field not equal to null
    if(err){
      console.log(err);
    }else{
      if(foundUsers){
        res.render("secrets",{usersWithSecrets:foundUsers})
      }
    }
  })
});
```

### REACT JS NOTES
### 1
- React is javascript library for building user interfaces,its a frondend framework
- Here we create components,we can customize these components with different pieces of data
- React combines small amounts of html,css,js into a single component
- This is what makes the twitter website to load the feed screen without the rest of the page visibly updating
- In olden days we had to refresh the web page to see any changes,but these days we have each component listening for changes in
the server and updating itself and its own appereance and data and being able to talk to the server independently
- For ex if there is any new comment on a fb post,the post can update itself without effecting the rest of the website
- React is able to re-render these changes really efficiently and it does this by comparing changes,what we call diffing
- Whenever a change happens it compares the new version of the DOM tree that u want to be rendered with the old the version thats
already showing up,and it re-renders the only sub component that has changes


### 2
- Introduction to the code sandbox(browser based development enviroment),It allows u to build and deploy within the same application

### 3

#### Introduction to JSX and Babel
- In index.html file,by convention we always create a div with id=root,which is the root of our react application,
everything we have create using react will be inserted inside this div*/
- Just above the `</body>` we will have a script src tag that links to the index.js file*/
- Infact we never touch this index.html file ever again*/
- We write all our code in index.js file*/
- install react,react-dom dependencies
- require them
```jsx
var React=require('react');
var ReactDOM=require('react-dom');
ReactDOM.render(what to show,where to show,callback fun to tell us when that render fun has completed);
ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root'));
```

- Here we are able to write plain html inside a js file,hows this possible?,this is what JSX does,react works by creating these
jsx files,files where we have got html right in the body of js file*/
- In behind the scenes our html picked by a compiler and is compiled down to actual javascript,and the compiler comes from the
react dependency we have required*/
- Inside the react module there is something called Babel*/
- Babel is js compiler,its converts next gen js like ES 6,7,8 and compile it down to a version that every browser can understand*/
- And this incules compiling jsx into plain old js even internet explorer can understand*/
var h1=document.createElement("h1");
h1.innerHTML="Hello World";
document.getElementById("root").appendChild(h1);

- import keyword is one of the latest features of js as part of ES6*/

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);

```

### 4
### JSX code practice

```jsx
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
```

### 5
### Javascript Expressions in JSX and ES6 template literals

- JSX not only allows u to use html inside js but it also allows to to use js inside html*/
- u just need enclose that js variable inside a curly braces*/
```jsx
let name = "Nakka Nithish";
let luckyNum = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>your lucky number is {luckyNum}</p>
  </div>,
  document.getElementById("root")
);
```
- Not only js variables,u can add any js expression inside this curly brace*/
- ex:3+5,Math.floor(Math.random()*10)
- u cant write js statements inside {}
ex:if(){return 7}else if(){return 12}
- An expression will be evaluated to a value,but statement is like asking computer to do some work*/

    ```jsx
    <h1>Hello {fName + " " + lName}!</h1>
    <h1>Hello {fName} {lName}!</h1>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    ```


### 6
### Js expressions in JSX practice

```jsx
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
```


### 7
### JSX Attributes and Styling React Element- 
- The html we use inside JSX file is actually converted into js,so we should use js properties as its attributes
instead of html attributes,remember that js properties  are in camelcasing
ex:`className="heading"` instead of `class="heading"`
   `contentEditable="true`"*/
- html global attributes are attributes that we can use on any html element
<script src="../src/index.js" type="text/JSX"></script>

- We can get random images form lorem picsum
```jsx
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
```


### 8
### Inline styling for React Elements

In html the inline styling style="color:red",here the style attribute taking a string value
- But in jsx the html code we are writing is not actually html,so for inline style we should assign a js object to
style attribute*/
- since the value of style is a js object we should enclose it in {}

```jsx
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
```


### 9
### React Styling Practice

```jsx
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
```


### 10
### React Components
- Split website into smaller components*/
- Its React convention to give ur components a name that is in pascal case(first letter is captilized),and this allows to
differentiate between custom components that were building vs the html elements*/
- Create a heading component as a separate file in src folder Heading.jsx*/

- In Heading.jsx file
```jsx
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
```

- In index.js file

```jsx
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
```

- Normally in index.js files of a lot of React apps we dont have any html elements, we just have a custom component called
`<App/>`

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
```

- Normally in react apps we will have a lot of components,so lets create a components folder inside src folder*/
- We can even create subfolders ex:login screen components,register screen components etc*/

### 11
### Reacts Components practice
```jsx
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
```

### 12
### Javascript ES6-Import,Export and Modules*/

- math.js module

```jsx
let pi = 3.1415962;
function doublePi() {
  return pi * 2;
}
function triplePi() {
  return pi * 3;
}
export default pi;  //We can have only one default export per module and it can be imported by any name
```
```jsx
export { doublePi, triplePi }; /*We can export anything as a js object as a non default export and they must be imported
with the same name*/
```

- index.js module
```jsx
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
```

```jsx
var React =require("react"); //this require() fun comes from nodejs and not from js
import React from "react"; //import,export comes from EcmaScript6(ES6)
```

- The browser penetration of ES6 is like 80% at the moment,here we using ES6 everywhere in our app only because
we are using Babel*/
- We can also import using the wild card astrix(*)*/
```jsx
import * as pi from "./math.js";
console.log(pi);
{doublePi: ƒ doublePi(), triplePi: ƒ triplePi(), default: 3.1415962}
```
- We can use the imports as*/
    ```jsx
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
    ```
- But the wildcard import is discouraged in many style guides,because we lose the benefit of using single default export,and
our code will be also unclear*/


### 13
### 4 steps for creating react app*/
- 1)Check node is up to date
- 2)Install vs>vscode-language-babel extension
- 3)Create React App
npx create-react-app my-app
- 4)Run App

  cd my-app

  npm start

- react-scrips are the scripts which are required to make the react app run locally*/


### 14
### React Props

- We have already passing custom pieces of information to html elements via attributes*/
ex:    
```jsx
<input id="fName" placeholder="Enter your first name" value="Nakka" />
    	var input=document.getElementById("fName");
	input.id,input.placeholder
  
```
- these attributes of html elements are predefined*/
- Since react components are like userdefined/custom html elements ,we can have custom attributes*/
```jsx
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
    
```

- forEach() method wont returns anything,map() method returns an array of elements*/


### 15
### React DevTools
- While passing props from one component to another componet,we can see the props of a particular component in React dev tools*/
- Download React developer tools extension from chrome web store
- Pass props from high level to low level

- We just need the component and its necessery props(Which we can see in react devtools) to render it anywhere*/

### 16
### Mapping Data to Components

- For every single component that is rendered using a loop such as the map() fun,we will have to give those components a property
called key and its value should be unique among all the other similar components*/
- This key prop is necessary to render components in order and we cant use this as props.key*/
```jsx
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
```


### 17
### js E56 map,filter,reduce,find,findIndex*/
- These are some fun that help us deal with arrays*/
- Map -Create a new array by doing something with each item in an array.

- Filter - Create a new array by keeping the items that return true.

- Reduce - Accumulate a value by doing something to each item in an array.

- Find - find the first item that matches from an array,and the loop stops as soon as it finds that item

- FindIndex - find the index of the first item that matches,and the loop stops

### 18
### Javascript ES6 arrow functions or fat arrow
```jsx
{emojipedia.map((emojiTerm) =>
          <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
          />
        )}   //Mapping each element of the array to a Entry component using arrow function
```

### 19
### React Conditional rendering with the terenary operator
- We are going to create a login flow*/
- Sometimes we want to show different components on the screen based on different conditions,
ex:user not logged in,then we will show him login screen
   else we will show him diff component like hello user */

- One way to do it
```jsx
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
```

- But we are doing it in a lot of lines of code and its not elegant*/
- We can only use expressions inside jsx html,we cant use statements which have keywords in them like if,else,swith,for etc
unlike statements which have only symbols +,-,?,: etc*/

- Best way to do it is using terenary operator
```jsx
let isLoggedIn = false;

function App() {
  return <div className="container">{
    isLoggedIn?<h1>Hello</h1>:<Login />
  }</div>;
}
```

- Sometimes we dont want to render anything if the condition is false then in that case we can do it like this
```jsx
currentTime>12?<h1>Why are you still working</h1>:null
```
- But there is actually even easier way ,can do it using && operator
```jsx
currentTime>12 &&  <h1>Why are you still working</h1>  /*They r just trying to render something*/
```
- Here if first cond is false ,it wont even bother to check the other cond


### 20
### Conditional Rendering practice*/

```jsx
var userIsRegistered = false; /*We can send this from App.jsx to Form.jsx component and get the component render in a different way
using terenary operator*/
```

App.jsx
```jsx
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}
```
Form.jsx

```jsx
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
```

### 21
### State in React-Declarative vs Imperative programming*/

- How do we make our app more interactive,for that we need to understand State,this is really central concept to how React
does things*/
- UI=f(State)
- Ice and water is the same component ,based on the state of temperature the form of component changes*/
- Ice  - UI=f(-10degcel)
- Water- UI=f(60degcel)
- User interface is reflecting the changes in state variable*/

```jsx
function App(){
	var isDone=true;
	const strikeThrough={textDecoration: "line-through"}
	return <p style={isDone&&strikeThrough}> Buy Milk </p>; /*Here the component look is dependent on the state variable isDone*/
}


/*This type of programming is called Declarative programming,cuz we are declaring how our component looks using terenary op*/
```

- Imperative Programming
document.getElementById("root").style.textDecoration="line-through";

- In order for this code to work they had to be rerenderd each time,and to do that we have to learn hooks*/
```jsx
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
```

- Hooks allows us to modify,read,hook into the state variable*/

- In the next lesson we will see one of the most commonly used React hooks which is the useState hook*/


### 22
### React Hooks -useState

```jsx
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
```

- We solve this problem using useState hook
- One of the rules for using hooks is that u must use a hook inside a functioal component
```jsx
import React from "react";
let state=React.useState(34);  //one way to use useState

import React,{useState} from "react";
  let state=useState(3424);   //We are providing initial state value
console.log(state)  //output - [stateVariable value, ƒ bound dispatchAction()]
```

////////////////Example////////////////
```jsx
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
```


### 23
### useState() hook practice
```jsx
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
```

### 24
### Javascript ES6 Object & Array Destructuring
```jsx
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

```

### 25
### Event Handling in React
- How u can detect when a user interacts with ur component,and render diff things bases on those events*/
```jsx
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
```

### 26
### React Forms

```jsx
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
```

### 27
### Class Components vs Functional Components*/
Hooks vs Classes
- There were two ways of adding state into a React App*/
- One way is using functional components*/
- Theres also another way to create React components,which is using classes*/
Hook

```jsx
import React from 'react';
function App(){
return <h1>Hello</h1>;
}
export default App;
```

Class

```jsx
import React from 'react';
class App extends React.Component{
render(){
return <h1>Hello</h1>
}
}
export default App;
```

- It the past why people converted their functional components into class components was because it was required in order to
have state*/
- What does managing state using classes look like?,its difficult to read*/
- Using hooks is much easier way to manage state and code is much clearer*/

### 28
### Changing Complex State*/
```jsx
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

```
/**/
```jsx
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
```

### 29
### Changing Complex State practice
```jsx
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
```


### 30
### Javascript ES6 Spread Operator
```jsx
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
```

### 31
### Spread operator practice todo list app

```jsx
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
```


### 32
### Managing a component tree*/
```jsx
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
```

### 33
### React Dependencies and Styling the Keeper App*/
- We will be going to use some pre-built components by adding some dependencies*/
- Add material-ui/core and material-ui/icons as dependencies*/
- The benefit of using react components over bootstrap or fav icons is that,in react js,html,css pretty much all combined
into one of the components,we can even add components that have some functionality */
- material ui docs>material icons*/
- We can have floating action button
- Transparent textures website*/
