"use strict";

let highScore = 0;
let score = 20;
document.querySelector(".score").innerHTML = score;

//unique number generate
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//function created for minimize the code
const displayMessage = function (message) {
  document.querySelector(".message").innerHTML = message;
};

document.querySelector(".Check").addEventListener("click", function () {
  let x = Number(document.querySelector(`.inputno`).value);

  //not a number
  if (!x) {
    displayMessage("🔴 No Number");
  }
  //correct number
  else if (x === secretNumber) {
    document.querySelector(".display").innerHTML = secretNumber;

    displayMessage("🥳 Correct Number!");
    document.querySelector("body").style.backgroundColor = "yellowgreen";
    document.querySelector(".display").style.width = "21rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").innerHTML = highScore;
    }
  } else if (x !== secretNumber) {
    if (score > 1) {
      displayMessage(secretNumber > x ? "❗ Too Low..!" : "‼ Too High..!");
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      // document.querySelector(".message").innerHTML = "😕 You are lose";
      displayMessage("😕 You are lose");
      document.querySelector(".score").innerHTML = 0;
    }
  }
  //number is lower than secreat number
  // else if (secretNumber > x) {
  //   if (score > 1) {
  //     document.querySelector(".message").innerHTML = "❗ Too Low..!";
  //     score--;
  //     document.querySelector(".score").innerHTML = score;
  //   } else {
  //     document.querySelector(".message").innerHTML = "😕 You are lose";
  //     document.querySelector(".score").innerHTML = 0;
  //   }
  // }
  // //number is higher than secreat number
  // else if (secretNumber < x) {
  //   if (score > 0) {
  //     document.querySelector(".message").innerHTML = "‼ Too High..!";
  //     score--;
  //     document.querySelector(".score").innerHTML = score;
  //   } else {
  //     document.querySelector(".message").innerHTML = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".display").innerHTML = "?";
  // document.querySelector(".message").innerHTML = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(`.inputno`).value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".display").style.width = "12rem";
});
