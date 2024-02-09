const express = require("express"); //getting express module
const app = express();
app.get("/", function(request, response) {
  response.send("<h1>Hello,world</h>");
})

app.get("/hobbies",function (req,res){
  res.send("Love to code")
})

app.get("/about",function (req,res){
  res.send("My name is Nakka Nithish")
})
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
