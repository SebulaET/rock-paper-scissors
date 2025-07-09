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
    // ...uses while loops, .inLowerCase, and .includes (new concepts) explained as used.
    let validatedInput = false;
    while(validatedInput == false){
        // ...created a loop to ask the question until a valid answer is received.
        const choice = prompt("Rock, Paper, or Scissors?");
        if(choice == null){
            continue;
            // ...Repeat if nothing entered
        }
        const choiceInLowerCase = choice.toLowerCase();
        if(options.includes(choiceInLowerCase)){
            validatedInput = true;
            // ... No more loops if they put in a valid answer.
            return choiceInLowerCase;
        }
    }
     
}
getPlayerChoice();
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