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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
let menu = document.querySelector("#menu");

function getHumanChoice(str) {
  console.log(str);
  return str;
}
// function getHumanChoice() {
//   console.log(1);
//   return (myTurn = prompt(
//     "Enter your move (Rock, Paper or scissor"
//   ).toLowerCase());
// }

let humanScore = 0;
let computerScore = 0;

// playGame();

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

wrapper.addEventListener("click", (event) => {
  let target = event.target;
  switch (target.id) {
    case "rock":
      playRound("rock", getComputerChoice());
      break;
    case "paper":
      playRound("paper", getComputerChoice());
      break;
    case "scissor":
      playRound("scissor", getComputerChoice());
      break;
  }
});

// function playGame() {
//   for (let i = 1; i < 6; i++) {
//     console.log("Round", i);
//     const humanSelection = getHumanChoice();
//     // const computerSelection = getComputerChoice();
//     const computerSelection = "rock";
//     playRound(humanSelection, computerSelection);
//   }
//   console.log("Human's score is: ", humanScore);
//   console.log("Computer's score is: ", computerScore);
// }
