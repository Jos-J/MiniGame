// Initialize game statistics
let wins = 0;
let losses = 0;
let ties = 0;

// Get elements from the DOM
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const resultMessage = document.getElementById('resultMessage');
const computerChoiceMessage = document.getElementById('computerChoiceMessage');
const winsElement = document.getElementById('wins');
const lossesElement = document.getElementById('losses');
const tiesElement = document.getElementById('ties');
const playAgainButton = document.getElementById('playAgainButton');

// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ['R', 'P', 'S'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'R' && computerChoice === 'S') ||
        (userChoice === 'P' && computerChoice === 'R') ||
        (userChoice === 'S' && computerChoice === 'P')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Function to update the UI with results
function updateUI(result, computerChoice) {
    // Display the result
    resultMessage.textContent = result;
    computerChoiceMessage.textContent = "Computer chose: " + computerChoice;

    // Update the score
    winsElement.textContent = wins;
    lossesElement.textContent = losses;
    tiesElement.textContent = ties;

    // Show the play again button
    playAgainButton.classList.remove('hidden');
}

// Function to handle a round of the game
function handleChoice(userChoice) {
    // Get the computer's choice
    const computerChoice = getComputerChoice();

    // Determine the winner
    const result = determineWinner(userChoice, computerChoice);

    // Update scores based on the result
    if (result === "You win!") {
        wins++;
    } else if (result === "You lose!") {
        losses++;
    } else {
        ties++;
    }

    // Update the UI with the result and score
    updateUI(result, computerChoice);
}

// Event listeners for the buttons
rockButton.addEventListener('click', () => handleChoice('R'));
paperButton.addEventListener('click', () => handleChoice('P'));
scissorsButton.addEventListener('click', () => handleChoice('S'));

// Event listener for the play again button
playAgainButton.addEventListener('click', () => {
    // Hide the play again button and reset messages
    playAgainButton.classList.add('hidden');
    resultMessage.textContent = "Make your choice!";
    computerChoiceMessage.textContent = "";
});


