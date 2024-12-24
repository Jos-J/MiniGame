// Function to generate the computer's choice
function getComputerChoice() {
    const choices = ['R', 'P', 'S'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play a round of the game
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    }

    if (
        (playerChoice === 'R' && computerChoice === 'S') ||
        (playerChoice === 'P' && computerChoice === 'R') ||
        (playerChoice === 'S' && computerChoice === 'P')
    ) {
        return 'win';
    }

    return 'lose';
}

// Function to run the entire game loop
function gameLoop() {
    let wins = 0;
    let ties = 0;
    let losses = 0;

    do {
        // Get user input (Prompt the user)
        let playerChoice = prompt('Enter your choice (R for Rock, P for Paper, S for Scissors):').toUpperCase();

        // Validate input
        if (playerChoice !== 'R' && playerChoice !== 'P' && playerChoice !== 'S') {
            alert('Invalid choice! Please enter R, P, or S.');
            continue;
        }

        // Get computer's choice
        let computerChoice = getComputerChoice();

        // Display computer's choice
        alert(`Computer chose: ${computerChoice}`);

        // Determine the outcome of the round
        let result = playRound(playerChoice, computerChoice);

        // Update score based on result
        if (result === 'win') {
            wins++;
            alert('You win this round!');
        } else if (result === 'tie') {
            ties++;
            alert('It\'s a tie!');
        } else {
            losses++;
            alert('You lose this round!');
        }

        // Display the score after each round
        alert(`Scores:\nWins: ${wins}\nTies: ${ties}\nLosses: ${losses}`);

        // Ask the user if they want to play again
    } while (confirm('Do you want to play again?'));

    // After the game ends, display final results
    alert(`Game Over! Final Scores:\nWins: ${wins}\nTies: ${ties}\nLosses: ${losses}`);
}

// Start the game
gameLoop();


