const express = require('express');
const https = require('https');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res) {
res.sendFile(__dirname+"/index.html")

})

app.post("/",function(req,res){
  const query=req.body.cityName;
  const apiKey="048f6f3572827f100694258d4b7ca5fa";
  const unit="metric"
  const url="https://api.openweathermap.org/data/2.5/weather?q="+query+",uk&appid="+apiKey+"&units="+unit+""
  https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
      const weatherData = JSON.parse(data);
      console.log(weatherData);
  const temp = weatherData.main.temp;  
  const icon=weatherData.weather[0].icon;
  const imgURL="http://openweathermap.org/img/wn/"+icon+"@2x.png"
  const weatherDescription = weatherData.weather[0].description
  res.write("<h1>" + "The temperature in "+query+" is " + temp + " degrees Celsius" + "</h1>");
  res.write("<p>" + "The weather is currently:" + weatherDescription + "</p>")
  res.write("<img src="+imgURL+">")
  res.send();
    })
  })
})

app.listen(3000, function() {
  console.log("Server started at port 3000");
})
