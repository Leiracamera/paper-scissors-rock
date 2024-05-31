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

    return `Computer's Choice: ${numberWords[randomNumber]}`;
}

// Generate computers choice
let computerChoiceNumber = getComputerChoice();
// Convert number to word
let computerChoiceWord = numberToWord(computerChoiceNumber);
// Print the computers choice (word)
console.log(computerChoiceWord);

// Function that takes the user choice (paper, scissors or rock) and returns it

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: Paper, Scissors or Rock").toUpperCase();
    return humanChoice;
}
// Print Human choice
let choice = getHumanChoice();
console.log("User's Choice: ", choice);

// Declare payers scores
let humanScore = 0;
let computerScore = 0;