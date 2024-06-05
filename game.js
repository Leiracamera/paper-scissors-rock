// Computer generates random return of "rock" "paper" or "scissors"

// Declare payers scores
let humanScore = 0;
let computerScore = 0;

// Generate computers choice
// Function to generate a random num between 1-3
function getComputerChoice() { 
    let randomNumber = Math.floor(Math.random() * 3) + 1; 
    return randomNumber;
}
// Function to convert numbers 1-3 to words
function numberToWord(randomNumber) {
    const numberWords = {
        1: "PAPER", 
        2: "SCISSORS",
        3: "ROCK"
    };

    return numberWords[randomNumber];
}

// Function that takes the user choice (paper, scissors or rock) and returns it
function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: Paper, Scissors or Rock").toUpperCase();
    console.log("User's Choice: ", humanChoice);
    return humanChoice;
}


// Determine Human's game outcome
function getOutcome(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie";
    } else if (
        (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (userChoice === "PAPER" && computerChoice === "ROCK") ||
        (userChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        return "You win!";
    } else {
       return "You lose!";
    }
}

// Functions to increments score
function incrementHumanScore() {
    humanScore++;
}
function incrementComputerScore () {
    computerScore++;
}

// Function to play a round and increment scores based on the game outcome
function playRound(){
    let computerChoiceNumber = getComputerChoice();
    // Convert number to word
    let computerChoiceWord = numberToWord(computerChoiceNumber);
    // Print the computers choice (word)
    let computerChoice = computerChoiceWord; 
    
    console.log("Computer's Choice: ", computerChoice);

    let userChoice = getHumanChoice();
    let outcome = getOutcome(userChoice, computerChoice);

    // Prints out an outcome message, based on Human outcome (win, lose or tie with computer choice)
    console.log(outcome);

    if (outcome === "You win!") {
        incrementHumanScore();
    } else if (outcome === "You lose!") {
        incrementComputerScore();
    }

    console.log("Player Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
} 

// Function to play the full game (consisting of up to 5 rounds)
function playGame() {
    let rounds = 0;
    while (rounds < 5 && humanScore < 3 && computerScore < 3) {
        playRound(rounds);
        rounds++;
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("Game Over. It's a tie.");
    }
}

playGame();







// Variable for user choice to compare with computer choice






// Function to play round and increment score based on game outcome
//function getTally (outcome) {


 /*   if(outcome === "You win!") {
        incrementHumanScore();
         
    }  
    
    if (outcome === "You lose!") {
        incrementComputerScore();
    }  
    console.log("Player Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    
}




// Logic for playing full game (consisting of 5 rounds)
/* function playGame() {
    let rounds = 0;
    while (rounds < 5 && humanScore < 3 && computerScore < 3) {
        let computerChoiceNumber = getComputerChoice();
        let computerChoiceWord = numberToWord(computerChoiceNumber);
        console.log("Computer's Choice: ", computerChoiceWord);

        let userChoice = getHumanChoice();

        playRound(userChoice, computerChoiceWord);

        rounds++;
    }

    if(humanScore === 3) {
        console.log("You win the game!");
    } else if (computerScore === 3) {
        console.log("You lose the game!");
    } else {
        console.log("Game over. It's a tie.")
    }
}
// Make function called playGame
// Inside playGame: prompt user for paper, scissors or rock (humanChoice)
// get random choice from computer (computerChoice)
// compare userChoice with computerChoice to determine winner
// print out winner and increment score
// repeat the prompt from human
// play until someone reaches 3 wins (in a max of 5 rounds)
// game ends and prints the name of winner (you win or you lose in regards to human)

/* playRound takes userChoice and computerChoice and determines winner 
as "outcome" using the humanOutcome function

to play a round 5 times, I need to call the playRound function
5 times but also call getHumanChoice and getComputerChoice (computerChoiceWord)
to repromt a new game. 

*/