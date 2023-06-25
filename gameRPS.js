const readline = require('readline');

function playGame(playerChoice) {
  var choices = ["rock", "paper", "scissors"];
  var computerChoice = choices[Math.floor(Math.random() * 3)];

  console.log("Player's choice: " + playerChoice);
  console.log("Computer's choice: " + computerChoice);

  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("Player wins!");
  } else {
    console.log("Computer wins!");
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your choice (rock, paper, or scissors): ",
  (playerInput) => {
    playGame(playerInput);
    rl.close();
  });
