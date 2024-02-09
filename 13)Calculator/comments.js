//1
//MAKING A WEBAPPLICATION(CALCULATOR) WITH A SERVER USING NODE AND EXPRESS.
/*Until now we made static websites using html,css,js files which are requested by browser,and all the code
 runs on client browser*/
/*In this lesson we make website ,all our code runs on server side and only the outcome sends to browser*/

//2
//ports 3000,4040,8080,5000

//3
//RESPONDING TO REQUESTS WITH HTML FILES
__dirname //gives the file/directory path,whereever the file is on the cloud
name="" //in html act as a variable name
res.sendFile(__dirname+"/index.html"); //instead of send relative filepath,we give current file path like this in server

//3
//PROCESSING POST REQUESTS WITH BODY PARSER
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

//4
type="submit" //It will trigger post request of the form
