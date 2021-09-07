const mongoose = require('mongoose');

//connect to DB
mongoose.connect("mongodb://localhost:27017/fruitsDB");
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple3",
  rating: 10,
  review: "Great!"
});

// fruit.save();

// const kiwi = new Fruit ({
//   name: "Kiwi",
//   rating: 3,
//   review: "Small and wet"
// });
//
// const orange = new Fruit ({
//   name: "Orange",
//   rating: 5,
//   review: "Hard to peel"
// });

// Fruit.insertMany([kiwi, orange], function(err) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Successfully added fruits");}
//       });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//   name: "Pineapple",
//   rating: 9,
//   review: "Great fruit"
// });
// pineapple.save ();

// const person = new Person ({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });

 const melon = new Fruit({
  name: "Melon",
  rating: 10,
  review: "Juicy!"
});
melon.save ();

Person.updateOne({
  name: "John"
}, {
  favouriteFruit: melon
}, function(err) {
  if(err){
    console.log(err);
  } else {
    console.log("John favouriteFruit Updated");
  }
});

// person.save();

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {
    // console.log(fruits);
    // mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);

    });

  }
});


// Fruit.updateOne({
//   _id: "613636e15cb14a872ab64e05"
// }, {
//   name: "Peach",
// },
// function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("updated");
//   }
// });

// Fruit.deleteOne({
//   _id: "613636e15cb14a872ab64e05"
// },
// function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("deleted");
//   }
// });
