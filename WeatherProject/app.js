const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  exntended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {

  // console.log();

  const location = req.body.cityName;
  const appID = "222ab66b833b84dffffaeccbb0dbcf57"
  const units = "metric";

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + appID + "&units=" + units;

  https.get(url, function(response) {
    console.log(response.statusCode);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
      res.write("<h1>The tempreture in "+ location + " is " + temp + " degrees Celcius.</h1>");
      res.write("<p>This weather is currently " + desc + ".</p> <img src='" + icon + "'>");

      res.send();
    });
  });
})





app.listen(3000, function() {
  console.log("The servicer is running on port 3000.");
})
