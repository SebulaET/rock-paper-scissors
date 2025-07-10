// "..." = Hint (not pseudocode just reminders)
// Establish options.
const options = ["rock", "paper", "scissors"];
    // Get random result between rock, paper, and scissors.
        // Assign result to computer.
function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    // ...Declared a variable "Choice", called the array "Options", plug in floor to round down the random number to an integer, ".length" to get the right number of options
    return choice;
}
// Ask the player their choice.
    // Convert their input to a valid answer.
        // Assign result to player.
function getPlayerChoice(){
        let choice = prompt("Rock, Paper, or Scissors?");
        choice = choice.toLowerCase();
        if(options.includes(choice)){
            return choice;
        }
    }
// Keep score between player and computer.
    // Tally the player score.
    // Tally the PC score.

// Combine to play one round.
    // Take the player choice.
    // Take the PC choice.
        // Increment score depending on winner.
function playRound(playerSelection, computerSelection){ 
    if (playerSelection == computerSelection){
            console.log("It's a tie!");
    }
    else if
        ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
            console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
            playerScore++;
    }
    else {
        console.log(`You lost... ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    }
}
// Play whole game.
    // Repeat round of play five times.
    // keep score until winner
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }

    if (playerScore > 2){
        console.log("You won the game!");
    }
    else {
        console.log("You lost the game :(");
    }
}

playGame();
// YOU ARE HERE Now the score and selection variables are in the game function. Refer to Hint on step 6 for what we're focusing on now.