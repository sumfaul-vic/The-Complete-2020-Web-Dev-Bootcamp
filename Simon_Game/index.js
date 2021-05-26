// event listeners
// Desktop Users
$(".btn-start").on("click touchstart", function() {
  if (simonSays.length === 0) {
    simonsTurn();
  } else {
    $(".title").text("Simon Game");
    $(".btn-start").text("Start");
    reset();
  }
});

// $(".button").click(function(event) {
//   let x = this
//   let btn = this.classList[1]
//   play(x, btn);
// })

// Mobile Users
$(".button").on("click touchstart", function(event) {

  let x = this
  let btn = this.classList[1]
  play(x, btn);

});


// variables
var simonSays = [];
var userInput = 0;

// functions

function play(x, btn) {
  if (simonSays.length === 0) {
    $(".title").text("Press start to play");
  } else {

    // let x = this
    // let btn = this.classList[1]

    let newClass = createPressAnimation(btn)
    let btnSound = createSoundFileName(btn);

    animationJump(x, newClass, btnSound);

    if (compareWithSimon(btn, userInput)) {
      if (userInput < (simonSays.length - 1)) {
        userInput++;
      } else {
        userInput = 0;
        setTimeout(function() {
          simonsTurn();
        }, 2000);

      }

    } else {
      console.log("if2");
      loserReset();
    }
  };
}

function simonsTurn() {
  $(".btn-start").text("Restart");
  console.log("Title should be changing here.")
  $(".title").text("Simon's Turn");
  addToSimon();
  playSimonSaysArray();

  setTimeout(function() {
    $(".title").text("Your Turn");
  }, 2000);

}

function loserReset() {
  $(".title").text("You lose");
  $(".btn-start").text("Try Again");
  reset();
}

function reset() {
  simonSays = [];
  userInput = 0;
}

function compareWithSimon(btn, i) {
  if (btn === simonSays[i]) {
    var x = true;
  } else {
    var x = false;
  }

  if (btn === simonSays[i]) {
    return true;
  } else {
    return false;
  }
}

function playSimonSaysArray() {
  for (var i = 0; i < simonSays.length; i++) {

    let x = simonSays[i]
    let y = "." + x

    let inputClass = createPressAnimation(x)
    let inputSound = createSoundFileName(x);

    setTimeout(() => {
      animationJump($(y), inputClass, inputSound);
    }, 1000 * i);
  };
}

function animationJump(x, newClass, btnSound) {
  // console.log("animation: " + newClass);
  // console.log(x);
  $(x).toggleClass(newClass);

  var audio = new Audio(btnSound);
  audio.play();

  setTimeout(function() {
    $(x).toggleClass(newClass);
  }, 250);
}

function getRandomButton() {
  var x = Math.floor(Math.random() * 4) + 1;
  var colour
  // console.log(x);
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
  // console.log(colour);
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
