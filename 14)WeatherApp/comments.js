/*We have a normal request*/ app.get()
/*a post request*/ app.post()
//1
//Weather API from openwhethermap,facebool API,Financial modeling prep API,PokeAPI
//For every website has certain data that it will allows others to access.
//API is like a contract b/n data provider and developer
//jQuery is also an API that allows us to create software
//In this module we will learn differnt APIs that allows us to interact with external server.


//2
//API presents between our server and someone elses server
//API ENDPOINTS,PATHS AND PARAMETERS
1)Endpoints
2)paths
3)Parameters
4)Authentication

1)ENDPOINTS
//Every API that interacts with an external system/server will have an endpoint.
//Endpoint of kanye.rest api is https://api.kanye.rest

2)PATHS AND PARAMENTERS
//Using paths and parameters we can customize the data that we get back
https://sv443.net/jokeapo/v2/joke  //is the endpoint for joke API
//We can add path after joke ex: /dark,/programming_jokes etc.,
//We can also use parameter which is a key value pair that goes at the end of the url after the ? like ?contains=debugging
ex:https://sv443.net/jokeapo/v2/joke/Programming?blacklistFlags=nsfw&contains=debugging
//If we have more than one parameter we separate them with an & symbol

3)API Authentication and Postman
/*When it comes to data that is more monitizable or allows devleopers to build more complex appications used by 1000s of people,
then to limit your use to a threshold,they use Authentication with the help of API keys.*/
//we need to buy plans for differnt traffic.
https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=048f6f3572827f100694258d4b7ca5fa(API key)
//the default unit of temp for openweathermap is kelvin,we can change it using units=metric parameter(read API docs)

//For testing APIs we use Postman
//We get the data from the server to frontend in the form of JSON.

//3
//What is JSON?
//javascript Object Notation
//The data we get back from server in JSON format look like a javascript object.
//JSON is readable by human,and it is also easily collapsable into a single string.
//JSON is not the only format we can get the data from an api,we can also get data in the form of XML/HTML formats.

//4
//MAKING GET REQUESTS WITH THE NODE HTTPS MODULE
/*When the client make a get request to our server,from our server we send a req to someone elses server with required parameters
via their api(its like a menu they provided) to get the data back,and we include that data in our response.*/
const app=express(); //It will initialize a new express app.

//Google 5 Ways to Make HTTP Requests in Node.js
//We can use native node module called https to send a request to external server.
const https = require('https');
https.get(url,function(response){ //sends a req to url and fetch data as a response
  console.log(response);
})

//5
//HOW TO PARSE JSON
console.log(response.statuscode);
//Google "HTTP response status codes"
200 - ok
404 - resourse not found
401 - unauthorized

https.get(url,function(response){
  console.log(response.statusCode);
  response.on("data",function(data){ //the response from external server contains on() method,if it is "data" then triggers callback
    console.log(data);   //here the data we get is in hexadecimal format
  })

//Instead of getting a hex data,we can convert it into javascript object Using
//String to javascript object
const weatherData=JSON.parse(data); //It will turn json in some sort of string formats say hexadecimal/binary/text into an actual javascript object.
/*JSON is a string representation of an object. It is an interoperable serialization format. It is not tied only to javascript.
For example there are JSON serializers for .NET allowing you to serialize/deserialize .NET objects.*/

//We can also do the reverse Way
//javascript Object to String
const object={
  name:"Nithish",
  age:20
}
console.log(JSON.stringify(object))
In terminal:
{"name":"Nithish","age":20}

console.log(weatherData.main.temp);
//instead of manually tracking a value in js object,copy the value path from json viewer awesome chrome extension

//6
//USING EXPRESS TO RENDER WEBSITE WITH LIVE API DATA
//There is only one res.send() in callback fun of an app.get() method,otherwise it will crash.
//but we can have multiple res.write() methods,at the end we call res.send()
res.write("<h1>" + "The temperature in London is " + temp + " degrees Celsius" + "</h1>");
res.write("<p>" + "The weather is currently:" + weatherDescription + "</p>")
res.send();
//The weather property of json object has an array of values as a value and icon is one of them
//from that icon value we can get the weather image
ex: const imgURL="http://openweathermap.org/img/wn/"+icon+"@2x.png" //read the api docs
 res.write("<img src="+imgURL+">")

 //7
 //USING bodyParser TO PARSE POST REQUESTS TO THE SERVER
 //lets divide the url into different variables
 //When the user visits our home page ,send back an html file which contains a form or whatever
 //when the user post anything using that form ,parse that post request using body-parser
 //use the user entered data as a part of the api endpoint query/path/parameter whatever

 //8
 //THE MAILCHIMP API
 //Creating a signup page for a news letter
 
