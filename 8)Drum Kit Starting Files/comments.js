//1
//ADDING EVENT LISTERS TO A BUTTON
//addEventListener(,) takes event type and a lister like a function name as parameters.
// we can also use anonymous fuc or arrow functions rather than passing fun name.
//we can use loops to add event listeners to all elements with a class using i<querySelectorAll('query').length

//2
//HIGHER ORDER FUNCTIONS AND PASSING FUNCTIONS AS ARGUMENTS
//How addEventListener function works
//example
function add(num1,num2){
  return num1+num2;
}
function multiply(num1,num2){
  return num1*num2;
}
function calculator(num1,num2,operator){ //passing fun name as parameter
  return operator(num1,num2);     //calling fun
}
//debugger;
//functionname(,);       enters debugger mode,then click downarrow to see through steps

//3
//HOW TO PLAY SOUNDS ON A WEBSITE
HtmlMediaElement.play()
ex:
var audio=new Audio("sounds/tom-1.mp3"); //create an object passing audio file
audio.play();
background-image: url("images/tom1.png");
//this, is the current object/html element that is clicked.

//4
//A DEEPER UNDERSTANDING OF JAVASCRIPT OBJECTS
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

//5
//SWITCH STATEMENT IN JAVASCRIPT
//instead of using if else we can use switch
//in defalut console.log(expression) so it will be useful in future

//6
//OBJECTS METHODS AND THEIR DOT NOTATION
//object.method();

//7
//ADDING KEYBOARD EVENT LISTERS TO DETECT KEYPRESSES
addEventListener("keydown",function(event){}) //event is what that triggers the function like which key is pressed,it has many properties we can access,
//event.key is one of them which tells the key that is pressed

//8
//UNDERSTANDING CALLBACKS AND HOW TO RESPOND TO addEventListener
addEventListener(type,function(event){}) can also takes functions with parameters which are called callback functions.

example:
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

//9
//ADDING ANIMATION TO WEBSITES
//we can easily add animations that works when we click by creating a style in css file,and simply adding that class
//by classList.add("") and removing it by classList.remove("") using a setTimeout function after some milliseconds
setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);   //calls the function after 100 milliseconds
