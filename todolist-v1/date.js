//jshint esversion:

//One way of creating a function
module.exports.getDate = getDate;

function getDate() {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  return today = new Date().toLocaleString("en-uk", options);
}

//another way of doing it
module.exports.getDay = function() {
  const options = {
    weekday: "long",
  }
  return today = new Date().toLocaleString("en-uk", options);
}

//3rd way of doing it
exports.getDayNum = function() {
  const options = {
    weekday: "numeric",
  }
  return today = new Date().toLocaleString("en-uk", options);
}
