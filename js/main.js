function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "Rock";
  if (choice === 1) return "Paper";
  if (choice === 2) return "Scissors";
}

function playRound(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "Paper":
      switch (computerChoice) {
        case "Rock":
          return "Paper beats rock, player wins!";
        case "Scissors":
          return "Scissors beats paper, computer wins!";
        case "paper":
          return "It's a tie!";
      }
    case "Rock":
      switch (computerChoice) {
        case "Rock":
          return "It's a tie!";
        case "Paper":
          return "Paper beats rock, computer wins!";
        case "Scissors":
          return "Rock beats scissors, player wins!";
      }
    case "Scissors":
      switch (computerChoice) {
        case "Rock":
          return "Rock beats scissors, computer wins!";
        case "Paper":
          return "Scissors beats paper, player wins!";
        case "Scissors":
          return "It's a tie!";
      }
  }
}
