//Whenever u download/clone any project from github,use npm install in terminal to install all of its dependencies
//Observe the examples in the bootstrap documentation
//Express Routing Parameters
//Instead of handling get req for every parameter,we can use express Routing params to do it dynamically
app.get("/news/:topic",function(req,res){
  console.log(req.params.topic);
})

rs //When we type this in terminal while the server is running,it will restart the server
//lodash is utility package
_.lowerCase("Nakka-Nithish") //nakka nithish
//It ignores hypens and returns only pure lower case strings
//in urls we use kebab case,but we store postTitles with first letter capitals
