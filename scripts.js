// Declare choices
const choices = ["rock", "paper", "scissors"];
let humanScore = (0);
let computerScore = (0);

function getComputerChoice() {
    return choices [Math.floor(Math.random()*choices.length)];
    // Generate random result between Rock, Paper, Scissors from computer
    // declare options for computer
    // return one and only one answer
}

function getPlayerChoice(choice) {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors!");
    playerChoice = playerChoice.toLowerCase();
    console.log("You chose " + playerChoice + "!");
}

console.log(getPlayerChoice());


// Get input from player for their choice
    // return a value of Rock, Paper, or Scissors

// Keep track of score

// Combine to play one round

// Combine to play whole game