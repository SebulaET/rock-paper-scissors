// "..." = Hint (not pseudocode just reminders)
// Establish options.
const options = ["Rock", "Paper", "Scissors"];
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
        const choice = prompt("Rock, Paper, or Scissors?");
        if(options.includes(choice)){
            return choice;
        }
    }
getPlayerChoice();
// ...Can't figure out how to test player choice function will continue and just assume it works until we can see down the road with the game function.

// Keep score between player and computer.
    // Tally the player score.
    // Tally the PC score.
let humanScore = 0;
let computerScore = 0;
// Combine to play one round.
    // Take the player choice.
    // Take the PC choice.
        // Increment score depending on winner.
function playRound(playerChoice, computerChoice){ 
    
}
// Play whole game.
    // Repeat round of play five times.
    // 