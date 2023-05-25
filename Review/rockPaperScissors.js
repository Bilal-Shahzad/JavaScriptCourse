// good function practice 

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  // Define the options for the game as an array of strings
  const options = ["rock", "paper", "scissors"];
  
  /**
   * Function to get a random option for the computer
   * Uses Math.random() to generate a random number between 0 and 1
   * Math.floor() is used to round down to the nearest whole number
   * This number is used as an index for the options array to select a random option
   */
  function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
  }
  
  /**
   * Function to determine the winner of the game
   * Uses if-else statements to check the combination of the user's and computer's choices
   * Returns a string indicating the winner
   */
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
      return "You win!";
    } else if (userChoice === "paper" && computerChoice === "rock") {
      return "You win!";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }