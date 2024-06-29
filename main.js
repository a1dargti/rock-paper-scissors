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
    "Enter your move (Rock, Paper or Scisscor"
  ).toLowerCase());
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("My Choise is", humanSelection);
console.log("Computer's choice is", computerSelection);

function playRound(humanChoice, computerChoice) {
  if (humanSelection == computerSelection) {
    return console.log("Ничья");
  } else if (humanSelection == "rock" && computerSelection == "scissor") {
    return console.log("Rock beats scissors");
  } else if (humanSelection == "scissor" && computerSelection == "paper") {
    return console.log("scissors beat paper");
  } else if (humanSelection == "paper" && computerSelection == "rock") {
    return console.log("paper beats rock");
  } else if (computerSelection == "rock" && humanSelection == "scissor") {
    return console.log("Rock beats scissors");
  } else if (computerSelection == "scissor" && humanSelection == "paper") {
    return console.log("scissors beat paper");
  } else if (computerSelection == "paper" && humanSelection == "rock") {
    return console.log("paper beats rock");
  } else {
    return console.log("Ничья");
  }
}

let humanScore = 0;
let computerScore = 0;

playRound(humanSelection, computerSelection);
