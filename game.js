
// Declare variables for players scores
let humanScore = 0;
let computerScore = 0;

// Generate computers choice:
// Function to generate a random num between 1-3 (math.random * 3 returns floating-point num between 0-3, math.floor rounds the num/removing decimal part)
function getComputerChoice() { 
    const randomNumber = Math.floor(Math.random() * 3) + 1; 
    return randomNumber;
}
// Function to convert numbers 1-3 to words by declaring constant variable (numberWords) and mapping to a key of 1, 2, 3
function numberToWord(randomNumber) {
    const numberWords = {
        1: "PAPER", 
        2: "SCISSORS",
        3: "ROCK"
    };

    return numberWords[randomNumber];
}

// Function that takes the user choice (paper, scissors or rock) and returns it (prompt is used to display a dialog box for input text)
function getHumanChoice() {
    const humanChoice = prompt("Enter your choice: Paper, Scissors or Rock").toUpperCase();
    console.log("User's Choice: ", humanChoice);
    return humanChoice;
}

// Determine game outcome by comparing human choice with computer choice
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

// Functions to increment scores (declared as 0 at top of script)
function incrementHumanScore() {
    humanScore++;
}
function incrementComputerScore () {
    computerScore++;
}

// Function to play a round and increment scores based on the game outcome
function playRound(){
    // Use getComputerChoice to get a random number between 1-3
    const computerChoiceNumber = getComputerChoice();
    // Convert this number to a word
    const computerChoiceWord = numberToWord(computerChoiceNumber);
    // Print the computers choice (word)
    const computerChoice = computerChoiceWord; 
    
    console.log("Computer's Choice: ", computerChoice);
    
    const userChoice = getHumanChoice();
    const outcome = getOutcome(userChoice, computerChoice);

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