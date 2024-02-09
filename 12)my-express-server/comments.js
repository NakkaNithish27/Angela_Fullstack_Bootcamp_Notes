//1
//CREATING OUR FIRST SERVER WITH EXPRESS
/*First create a folder,npm init,npm install express*/

const express = require("express"); //getting express module
const app = express();

app.listen(3000) //server is started at port 3000 and is listening
/*in browser search bar type*/
localhost: 3000
/*means now our browser is making a request to the Server
we made*/

//2
//HANDLING REQUESTS AND RESPONSES
//The get request
//In our case localhost:3000 is a home page just like www.google.com that is what we call the root
app.get("/", function(request, response) { //When our server gets a request root that is our home page
  console.log(request);
  response.send("Hello"); //Sends hello to browser
  response.send("<h1>Hello,world</h1>");
})

//3
//UNDERSTANDING AND WORKING WITH ROUTE/ROOT
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
