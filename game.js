// Computer generates random return of "rock" "paper" or "scissors"

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

// Generate computers choice
let computerChoiceNumber = getComputerChoice();
// Convert number to word
let computerChoiceWord = numberToWord(computerChoiceNumber);
// Print the computers choice (word)
let computerChoice = computerChoiceWord; 
console.log("Computer's Choice: ", computerChoiceWord);

// Function that takes the user choice (paper, scissors or rock) and returns it

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: Paper, Scissors or Rock").toUpperCase();
    console.log("User's Choice: ", humanChoice);
    return humanChoice;
}
// Variable for user choice to compare with computer choice
let userChoice = getHumanChoice();

// Determine Human's game outcome

function humanOutcome(userChoice, computerChoice) {
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

// Prints out an outcome message, based on Human outcome (win, lose or tie with computer choice)
console.log(humanOutcome(userChoice, computerChoice));

// Declare payers scores
let humanScore = 0;
let computerScore = 0;

// Functions to increments score
function incrementHumanScore() {
    humanScore++;
}
function incrementComputerScore () {
    computerScore++;
}

// Function to play round and update score based on game outcome
function playRound (userChoice, computerChoice) {
    let outcome = humanOutcome(userChoice, computerChoice);
    console.log("Outcome: ", outcome); //debugging line

    if(outcome === "You win!") {
        incrementHumanScore();
    } else if (outcome === "You lose!") {
        incrementComputerScore();
    } else {
        console.log("It's a tie");
    }

    console.log("Player Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

let playerChoice = userChoice;
let computersChoice = computerChoice;

playRound(playerChoice, computersChoice);

// Determine if user is winner or loser
