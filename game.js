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
       return "You Lose";
    }
}         

console.log(humanOutcome(userChoice, computerChoiceWord));

// Test cases
//console.log(humanOutcome("ROCK", "SCISSORS")); // Output: You win!
//console.log(humanOutcome("ROCK", "PAPER"));    // Output: You lose
//console.log(humanOutcome("ROCK", "ROCK"));     // Output: It's a tie

/* 
// Declare payers scores
const humanScore = 0;
const computerScore = 0;

// Logic for playing a single round

function playRound(humanChoice, computerChoiceWord) {

}

// Determine if user is winner or loser

*/