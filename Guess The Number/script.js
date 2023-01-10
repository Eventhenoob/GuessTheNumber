"use strict";

// globel variable decleration
//  UI
const messageUI = document.querySelector(".game-status");
const guessingNumberUI = document.querySelector(".main--number");
const scoreUI = document.querySelector(".score");
const highScoreUI = document.querySelector(".highscore");
const userInputUI = document.querySelector(".number-input");

// Back-End
let guessingNumber = generateRandomNumber(20);
let currentScore = 20;
let highscore = Number(highScoreUI.textContent);
let isGameOver = false;

// function decleration
// everyware
function generateRandomNumber(number) {
  return Math.trunc(Math.random() * number) + 1;
}

// after decleration
const reset = function () {
  // UI Reset
  messageUI.textContent = "Start guessing";
  guessingNumberUI.textContent = "?";
  scoreUI.textContent = "20";
  userInputUI.value = "";
  guessingNumber = generateRandomNumber(20);
  document.querySelector("body").style.backgroundColor = "#1b1b1b";
  guessingNumberUI.style.width = "14rem";

  // Beck-end Reset
  isGameOver = false;
  currentScore = 20;
};

const setUI = function (message, backgroundColor) {
  messageUI.textContent = message;
  isGameOver = true;
  document.querySelector("body").style.backgroundColor = backgroundColor;
  guessingNumberUI.style.width = "210px";
  guessingNumberUI.textContent = guessingNumber;
};

const gameWon = function () {
  setUI("you actually won! 🎉", "#69ff47");

  // Updating Highscore
  if (currentScore > highscore)
    highScoreUI.textContent = highscore = currentScore;
};

const gameLost = function () {
  setUI("Looser! you sucks.", "#aa0000");
};

// again btn
document.querySelector(".btn--again").addEventListener("click", reset);

// check btn
document.querySelector(".btn--check").addEventListener("click", function () {
  if (!isGameOver) {
    scoreUI.textContent = --currentScore;

    const userInputValue = Number(userInputUI.value);
    // if chances are over
    if (currentScore < 1) {
      gameLost();
      return;
    }

    //in case of no value;
    if (!userInputValue) {
      messageUI.textContent = "No number 🙄";
      return;
    }

    // If there is value;
    if (userInputValue > guessingNumber) messageUI.textContent = "To High! 🚀";
    else if (userInputValue < guessingNumber)
      messageUI.textContent = "To Low! 📉";
    else gameWon();
  }
});
