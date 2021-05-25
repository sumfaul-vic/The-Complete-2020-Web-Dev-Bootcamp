
var numOfDrums = document.querySelectorAll(".drum").length;

// Detecting Button Press
for (var i = 0; i < numOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var whichDrum = this.innerHTML;
    playSound(whichDrum);

    });
};

// Detecting Button Press
document.addEventListener("keydown", function(event) {
    playSound(event.key);
});

// Function to play sound
function playSound(whichDrum) {
  var whichSound
  switch(whichDrum) {
    case "w":
      whichSound = "sounds/crash.mp3"
      break;
    case "a":
      whichSound = "sounds/kick-bass.mp3"
      break;
    case "s":
      whichSound = "sounds/snare.mp3"
      break;
    case "d":
      whichSound = "sounds/tom-1.mp3"
      break;
    case "j":
      whichSound = "sounds/tom-2.mp3"
      break;
    case "k":
      whichSound = "sounds/tom-3.mp3"
      break;
    case "l":
      whichSound = "sounds/tom-4.mp3"
      break;
  }
  var audio = new Audio(whichSound);
  audio.play();
};
