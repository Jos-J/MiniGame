// Declare global variables for the score
let wins = 0;
let ties = 0;
let losses = 0;

// Function to generate the computer's choice
function getComputerChoice() {
    const choices = ['R', 'P', 'S'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to update the score display
function updateScoreBoard() {
    const scoreBoard = document.getElementById('scoreBoard');
    scoreBoard.textContent = `Wins: ${wins} | Ties: ${ties} | Losses: ${losses}`;
}

// Function to play a round of the game
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    let result;

    // Determine the result of the round
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        ties++;
    } else if (
        (playerChoice === 'R' && computerChoice === 'S') ||
        (playerChoice === 'P' && computerChoice === 'R') ||
        (playerChoice === 'S' && computerChoice === 'P')
    ) {
        result = "You win this round!";
        wins++;
    } else {
        result = "You lose this round!";
        losses++;
    }

    // Display the result and update the score
    document.getElementById('result').textContent = `Computer chose: ${computerChoice}. ${result}`;
    updateScoreBoard();
}

// Add event listeners to buttons
document.getElementById('rockBtn').addEventListener('click', function () {
    playRound('R');
});

document.getElementById('paperBtn').addEventListener('click', function () {
    playRound('P');
});

document.getElementById('scissorsBtn').addEventListener('click', function () {
    playRound('S');
});

// Initialize the score board on page load
updateScoreBoard();
