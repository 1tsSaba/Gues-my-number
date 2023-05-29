"use strict";

// document.querySelector(".message");
// ase chven mivwvdit start guessing -s ...
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".score").textContent = 20;
// document.querySelector(".number").textContent =
// meth random gadzlevs cifrebs randomad
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// input=s unda mivwvdet veliutin

// addeventlisener - msmeneli butoni rom mixvdes chven moqmedebas

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //   when ther is not input
  if (!guess) {
    displayMessage("❌ No Number");

    // when players wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high" : "📉 Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "🧨 You lost the Games!!!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// const again = document.querySelector(".again");
// again.addEventListener("click", () => {
//   window.location.reload();
// });

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing ...");
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
