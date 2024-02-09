//1
/*Just like css, we have inline javascript(js as a value to html attribute)*/ ex:onload="alert('Hello')",
// internal javascript(using script tag just like style tag)
<script type="text/javascript">
  alert("Nithish");
</script>,
// external javascript using script tag with src
<script src="index.js" charset="utf-8"></script>
// *internal js>external js>inline js(specificity from what I observed)
// *CSS should load before any content,thats why we put it just after title.
// *Js should load after all the html elements loaded, thats why it is placed at the end just before </body>.
document.querySelector("h1").innerHTML=""
// html elements are the actors that listen to javascript.
//2
//Document Object Model(DOM)
document.firstElementChild //is the html element
document.firstElementChild.firstElementChild //is <head>​…​</head>​
document.firstElementChild.lastElementChild //is <body></body>
var heading=document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML="Nakka Nithish"
document.querySelector("input").click() //clicks the checkbox
//objects in DOM has properties and methods
ex:car.color,car.speed
ex:car.drive(),car.break()
document.querySelector("ul").lastElementChild.innerHTML="Nakka Nithish"

//3
//Selecting html elements with javascript
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

//4
//Changing styles of html elements with javascript
//After selecting an element with js use .style.fontSize,.style.backgroundColor etc.,
// The main difference b/n css properties and js objecrt properties are
//js follows camel casing unlike actual css properties
//the value is represented as a string in js.
document.querySelector(".btn").style.backgroundColor="yellow"

//5
//keeping styles inside css file but toggling it on and off inside js file
//classList is a property of every DOM object
document.querySelector("button").classList.add("invisible");  /*in this way we can keep all the styles in css file but we can
toggle it on and off by adding and removing classes to classList of that particular element by using js*/
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible"); //add and removes the class
//in css file we only focus on look and in js file we only focus on behaviour

//6
//TEXT MANUPULATION USING JS
document.querySelector("h1").innerHTML="<em>Hello</em>" //innerHTML gives and takes all the html code inside main tags
document.querySelector("h1").textContent="Nakka Nithish" //textContent only gives and takes the text and not html code

//7
//MANUPULATING HTML ATTRIBUTES OF ANY ELEMENT USING JS
document.querySelector("a").attributes //gives list of all attributes
document.querySelector("a").getAttribute("href")
document.querySelector("a").setAttribute("href","https://www.bing.com")
