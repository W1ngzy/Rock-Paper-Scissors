function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "Rock";
  if (choice === 1) return "Paper";
  if (choice === 2) return "Scissors";
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  function playRound() {
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    const playerChoice = prompt("Enter: 'Rock', 'Paper' or 'Scissors'").toLocaleLowerCase();
    const computerChoice = getComputerChoice();
    switch (playerChoice) {
      case "paper":
        switch (computerChoice) {
          case "Rock":
            playerScore++;
            return "Paper beats rock, player wins!";
          case "Scissors":
            computerScore++;
            return "Scissors beats paper, computer wins!";
          case "paper":
            return "It's a tie!";
        }
      case "rock":
        switch (computerChoice) {
          case "Rock":
            return "It's a tie!";
          case "Paper":
            computerScore++;
            return "Paper beats rock, computer wins!";
          case "Scissors":
            playerScore++;
            return "Rock beats scissors, player wins!";
        }
      case "scissors":
        switch (computerChoice) {
          case "Rock":
            computerScore++;
            return "Rock beats scissors, computer wins!";
          case "Paper":
            playerScore++;
            return "Scissors beats paper, player wins!";
          case "Scissors":
            return "It's a tie!";
        }
    }
  }
  while (playerScore !== 3 && computerScore !== 3) {
    console.log(playRound());
  }
  if (playerScore > computerScore) alert("You win");
  alert("Computer wins");
}

game();
