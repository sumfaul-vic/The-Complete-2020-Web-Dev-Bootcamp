const express = require('express');
const app = express();

app.get("/", function(request, response) {
  response.send("<h1>Hello</h1>");

});
app.get("/about", function(req, res) {
  res.send("<h5>I am Victoria</h5>");
});
app.get("/hobbies", function(req, res) {
  res.send("<h6>Drinking coffee, gardening and reading.</h6>");
});
app.listen(3000, function() {

  console.log("Server started on port 3000");
});
// const port = 3000;
