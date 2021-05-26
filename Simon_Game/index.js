// event listeners
$("button").click(function(event) {
  if (simonSays.length === 0) {
    $(".title").text("Press start to play");
  } else {
    let x = $(this)
    let btn = this.classList[1]

    let newClass = createPressAnimation(btn)
    let btnSound = createSoundFileName(btn);

    animationJump(x, newClass, btnSound);
    if (compareWithSimon(btn)) {
      console.log("Well done");
      userInput++;
    } else {
      loserReset();
    }
  }


});

$("button").on("touchstart", function(event) {

  var x = $(this)
  var btn = this.classList[1]

  let newClass = createPressAnimation(btn)
  let btnSound = createSoundFileName(btn);

  animationJump(x, newClass, btnSound);

  userInput++;
});

// variables
var simonSays = [];
var userInput = 0;

// functions

function loserReset() {
  simonSays = [];
  userInput = 0;
  $(".title").text("You lose");
  $(".btn-start").text("Try Again");
}

function compareWithSimon(btn) {
  if (btn == simonSays[userInput]) {
    return true;
  } else {
    return false;
  }
}

function animationJump(x, newClass, btnSound) {
  console.log("animation: " + newClass);
  console.log(x);
  x.toggleClass(newClass);

  var audio = new Audio(btnSound);
  audio.play();

  setTimeout(function() {
    x.toggleClass(newClass);
  }, 250);
}

function getRandomButton() {
  var x = Math.floor(Math.random() * 4) + 1;
  var colour
  console.log(x);
  switch (x) {
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
  return colour;
}

function addToSimon() {
  simonSays.push(getRandomButton());
}

function createPressAnimation(btn) {
  return (btn + "-press");
}

function createSoundFileName(btn) {
  return ("sounds/" + btn + "-sound.mp3");
}

function playSimonSaysArray() {
  for (var i = 0; i < simonSays.length; i++) {



    let x = simonSays[i]
    let y = "." + x

    let inputClass = createPressAnimation(x)
    let inputSound = createSoundFileName(x);

    console.log(i + " " + x);
    console.log(inputClass);
    console.log(inputSound);


    setTimeout(() => {
      animationJump($(y), inputClass, inputSound);
    }, 1000 * i);
  };
}
