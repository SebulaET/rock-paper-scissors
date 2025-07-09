// "..." = Hint
// Establish options.
const options = ["Rock", "Paper", "Scissors"];
    // Get random result between rock, paper, and scissors.
        // Assign result to computer.
function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    // ...Declared a variable "Choice", called the array "Options", plug in floor to round down the random number to an integer, ".length" to get the right number of options
    
    console.log(choice);
}
getComputerChoice();
// Ask the player their choice.
    // Convert their input to a valid answer.
        // Assign result to player.

// Keep score between player and computer.
    // Tally the player score.
    // Tally the PC score.

// Combine to play one round.
    // Take the player choice.
    // Take the PC choice.
        // Increment score depending on winner.
    
// Play whole game.
    // Repeat round of play five times.
    // 