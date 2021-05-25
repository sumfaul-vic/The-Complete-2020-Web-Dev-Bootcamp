$("button").click( function() {

  var newClass = this.classList[1] + "-press";
  var x = $(this)

  x.toggleClass(newClass);

  setTimeout(function() {
    x.toggleClass(newClass);
  },250);
});

function getRandomButton() {
  var x = Math.floor(Math.random()*4)+1;
  console.log(x);
  var colour
  switch(x){
  case 1:
    colour = "btn-blue"
    break;
  case 2:
    colour = "btn-yellow"
    break;
  case 3:
    colour = "btn-red"
    break;
  case 4:
    colour = "btn-green"
    break;
};
  console.log(colour);
}
