
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
    document.getElementById("userScoreText").textContent = humanScore;
}
function incrementComputerScore () {
    computerScore++;
    document.getElementById("computerScoreText").textContent = computerScore;
}

// Function to play a round and increment scores based on the game outcome
function playRound(userChoice){
    // Use getComputerChoice to get a random number between 1-3
    const computerChoiceNumber = getComputerChoice();

    const computerChoice = numberToWord(computerChoiceNumber);

    document.getElementById("computerChoiceText").textContent = computerChoice;

    document.getElementById("userChoiceText").textContent = userChoice;
    
    // const userChoice = getHumanChoice();
    const outcome = getOutcome(userChoice, computerChoice);

    document.getElementById("gameOutcomeText").textContent = outcome;

    // Prints out an outcome message, based on Human outcome (win, lose or tie with computer choice)

    if (outcome === "You win!") {
        incrementHumanScore();
    } else if (outcome === "You lose!") {
        incrementComputerScore();
    }

    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }

} 

function announceWinner() {
    if (humanScore > computerScore) {
        document.getElementById("gameOutcomeText").textContent = "You Win the game!";
    } else if (humanScore < computerScore) {
        document.getElementById("gameOutcomeText").textContent = "You lose the game!";
    }
    // Disable the choice buttons after game finished
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

    // Show the "PLAY AGAIN" button
    document.getElementById("playAgain").style.display = "block";
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    document.getElementById("userScoreText").textContent = humanScore;
    document.getElementById("computerScoreText").textContent = computerScore;
    document.getElementById("gameOutcomeText").textContent = "";
    document.getElementById("computerChoiceText").textContent = "";
    document.getElementById("userChoiceText").textContent = "";

    // Enable the choice buttons
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;

    // Hide the "Play Again" button
    document.getElementById("playAgain").style.display = "none";
}

// Event Listeners for buttons
document.getElementById("rock").addEventListener("click", function() {
    playRound("ROCK");
});

document.getElementById("paper").addEventListener("click", function() {
    playRound("PAPER");
});

document.getElementById("scissors").addEventListener("click", function() {
    playRound("SCISSORS");
});

document.getElementById("playAgain").addEventListener("click", resetGame);
// Function to play the full game (consisting of up to 5 rounds)
function playGame() {
    document.getElementById("userScoreTest").textContent = humanScore;
    document.getElementById("computerScoreText").textContent = computerScore;
}

playGame();