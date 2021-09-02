const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = [
  "Buy Food",
  "Cook Food",
  "Eat Food"
];

let workItems = [
];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  let today = date.getDate();
  res.render("list", {
    listTitle: today,
    newListItems: items
  });
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.post("/", function(req, res){
  let item = req.body.newItem;


  if (req.body.list === "Work List"){
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/about", function(req,res) {
  res.render("about");
});

app.listen(3000, function (){
  console.log("Server started on port 3000.");
});
