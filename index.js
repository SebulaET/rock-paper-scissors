const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    // Determine the computer's choice for a round.
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

  // Get input from player for their choice per round
    // ask the player for their choice
    // retain their answer.
function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock, Paper, or Scissors?");
        if(choice == null){
            continue;
        }
        // convert to lower case
        const choiceInLower = choice.toLowerCase();
        // if choiceInLower includes rock/paper/scissors...
        if(options.includes(choiceInLower)){
            // change to true
            validatedInput = true;
            // return the converted player input
            return choiceInLower;
        }
}
}

function checkWinner(playerSelection, computerSelection){
     // Determine a winner.
    if(playerSelection == computerSelection){
        return "Tie";   
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    // Have a result for if the player wins.
    // Have a result for if the computer wins.
    // Have a result for if it's a tie.
    const result = checkWinner(playerSelection, computerSelection)
    if(result == "Tie"){
        return "It's a tie!"
    } 
    else if(result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection} :)`
    }
    else {
        return `You lose. ${computerSelection} beats ${playerSelection} :(`
    }
}

function game(){
    console.log("Let's play!");
    // loop five times.
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }       
}

game();