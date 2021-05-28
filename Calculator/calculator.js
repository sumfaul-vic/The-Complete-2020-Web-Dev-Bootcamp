const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result of the calulation is: " + result);

});

app.get("/bmicalculate", function(request, response) {
  response.sendFile(__dirname + "/BMICalculator.html");

});

app.post("/bmicalculate", function(req, res) {

  var height1 = Number(req.body.userHeight);
  var weight1 = Number(req.body.userWeight);
  var result = Math.round(weight1 / ((height1*height1)/10000));

  res.send("Your BMI is: " + result);

});

app.listen(3000, function() {

  console.log("Server started on port 3000");
});
