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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return console.log("Ничья");
  } else if (humanChoice == "rock" && computerChoice == "scissor") {
    return console.log("Rock beats scissors");
  } else if (humanChoice == "scissor" && computerChoice == "paper") {
    return console.log("scissors beat paper");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    return console.log("paper beats rock");
  } else if (humanChoice == "rock" && computerChoice == "scissor") {
    return console.log("Rock beats scissors");
  } else if (humanChoice == "scissor" && computerChoice == "paper") {
    return console.log("scissors beat paper");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    return console.log("paper beats rock");
  } else {
    return console.log("Нет хода");
  }
}

let humanScore = 0;
let computerScore = 0;

console.log("My Choise is", humanSelection);
console.log("Computer's choice is", computerSelection);
