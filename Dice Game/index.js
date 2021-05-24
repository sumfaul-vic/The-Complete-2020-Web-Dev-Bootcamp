
window.onload = rollDice();

function randomNumber() {
return  Math.floor(Math.random() * 6) + 1;
}

function rollDice() {

  var roll1 = randomNumber();
  var roll2 = randomNumber();
  document.querySelector(".diceOne .img1").setAttribute("src", "images/dice" + roll1 + ".png")
  document.querySelector(".diceTwo .img1").setAttribute("src", "images/dice" + roll2 + ".png")

  if (roll1 === roll2) {
    document.querySelector("h1").textContent="Draw!"
  } else if (roll1 > roll2){
    document.querySelector("h1").textContent="🚩Player 1 Wins!"
  } else {
    document.querySelector("h1").textContent="Player 2 Wins!🚩"
  }
}
