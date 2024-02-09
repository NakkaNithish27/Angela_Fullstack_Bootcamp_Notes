//1
//THE MAILCHIMP API
//Creating a signup page for a news letter
/*In a lot of projects,especially node js projects that use express we will see that we write the server side coding
in a file called app.js*/

//2
//Take a signup page from bootstrap.
//Add bootstrap cdn link.
//create a style.css if there is any custom css
<input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" required autofocus>
/*Customize it as your requirment*/

  res.sendFile(__dirname+"/signup.html") //When we do this,the local stlyes wont work
//In order for the local styles to work,we need to specify the static folder by using the static method of express,passing the folder that contains the static files

app.use(express.static("public"))

<link href="css/styles.css" rel="stylesheet"> //css is inside public

//3
//POSTING DATA TO MAILCHIMP'S SERVERS VIA THEIR WEBAPPLICATION
//Search about lists in mailchimp api docs
//first the developer needs to get an api key to authenticate himself with their servers
//Go to mailchimp and create an account
//Create an api key
//go to audience>settings to get a list //
//They expect to send data in json format,for that we need to create a js object with key value pairs with keys that mailchimp recognize
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
 
