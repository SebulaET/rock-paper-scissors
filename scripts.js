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

function getPlayerChoice() {
    let playerInput = prompt("Choose Rock, Paper, or Scissors!");
    playerInput = playerInput.toLowerCase();
    console.log("You chose " + playerInput + "!");
}

function playRound(playerChoice, computerChoice) {
    // YOU ARE HERE (Step 5)
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();


// Get input from player for their choice
    // return a value of Rock, Paper, or Scissors

// Keep track of score

// Combine to play one round

// Combine to play whole game