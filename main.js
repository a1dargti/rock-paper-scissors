function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber <= 33) {
    return "rock";
  } else if (randomNumber > 33 && randomNumber < 66) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  return (myTurn = prompt(
    "Enter your move (Rock, Paper or scissor"
  ).toLowerCase());
}

let humanScore = 0;
let computerScore = 0;

playGame();

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return console.log("Ничья");
  } else if (humanChoice == "rock" && computerChoice == "scissor") {
    return console.log("You won: Rock beats scissors"), (humanScore += 1);
  } else if (humanChoice == "scissor" && computerChoice == "paper") {
    return console.log("You won: scissors beat paper"), (humanScore += 1);
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    return console.log("You won: paper beats rock"), (humanScore += 1);
  } else if (computerChoice == "rock" && humanChoice == "scissor") {
    return console.log("You Lose: Rock beats scissors"), (computerScore += 1);
  } else if (computerChoice == "scissor" && humanChoice == "paper") {
    return console.log("You Lose: scissors beat paper"), (computerScore += 1);
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    return console.log("You Lose: paper beats rock"), (computerScore += 1);
  } else {
    return console.log("It doesn't work");
  }
}

// playRound(humanSelection, computerSelection);
function playGame() {
  for (let i = 1; i < 6; i++) {
    console.log("Round", i);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    // let humanScore = 0;
    // let computerScore = 0;
  }
  console.log("Human's score is: ", humanScore);
  console.log("Computer's score is: ", computerScore);
}
