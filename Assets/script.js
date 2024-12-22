// Initialize game state variables
let score = 0;
let lives = 3;
let gameInterval;

// Select DOM elements
const scoreElement = document.getElementById("score");
const livesElement = document.getElementById("lives");
const startButton = document.getElementById("start-btn");
const pauseButton = document.getElementById("pause-btn");
const restartButton = document.getElementById("restart-btn");
const player = document.getElementById("player");

// Function to start the game
function startGame() {
  score = 0;
  lives = 3;
  scoreElement.textContent = score;
  livesElement.textContent = lives;

  // Enable/Disable buttons
  startButton.disabled = true;
  pauseButton.disabled = false;
  restartButton.disabled = false;

  // Start game loop
  gameInterval = setInterval(gameLoop, 1000 / 60); // 60 FPS
}

// Function to pause the game
function pauseGame() {
  clearInterval(gameInterval);
  startButton.disabled = false;
  pauseButton.disabled = true;
}

// Function to restart the game
function restartGame() {
  clearInterval(gameInterval);
  startGame();
}

// Main game loop
function gameLoop() {
  // Update game state (e.g., move player, check collisions)
  movePlayer();
  checkCollisions();

  // Update the score and lives based on game events
  scoreElement.textContent = score;
  livesElement.textContent = lives;
}

// Move the player (simple example: move up/down)
function movePlayer() {
  // Check for key presses and move player accordingly
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      player.style.top = `${parseInt(player.style.top || 0) - 10}px`;
    } else if (e.key === "ArrowDown") {
      player.style.top = `${parseInt(player.style.top || 0) + 10}px`;
    }
  });
}

// Function to check collisions (example)
function checkCollisions() {
  // Here you would check if the player collides with any obstacles
  // For example, if the player touches an edge or hits an obstacle, lose a life
  if (parseInt(player.style.top) < 0) {
    lives--;
    if (lives <= 0) {
      endGame();
    }
  }
}

// End the game
function endGame() {
  clearInterval(gameInterval);
  alert("Game Over!");
  restartButton.disabled = false;
  startButton.disabled = false;
  pauseButton.disabled = true;
}

// Event Listeners for buttons
startButton.addEventListener("click", startGame);
pauseButton.addEventListener("click", pauseGame);
restartButton.addEventListener("click", restartGame);
