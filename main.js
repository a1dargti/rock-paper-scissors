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

const showHuman = document.querySelector("#human");
const showAi = document.querySelector("#ai");
const showResults = document.querySelector("#results");

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

// console.log(computerScore);
// console.log(humanScore);

showHuman.textContent = humanScore;
showAi.textContent = computerScore;

// playGame();

function playRound(humanChoice, computerChoice) {
  showHuman.textContent = humanScore;
  showAi.textContent = computerScore;

  if (humanScore == 5 && computerScore < 5) {
    alert("Человечество выиграло в этой войне!");
    humanScore = 0;
    computerScore = 0;
  } else if (humanScore < 5 && computerScore == 5) {
    alert("You are Terminated!");
    humanScore = 0;
    computerScore = 0;
  }

  if (humanChoice == computerChoice) {
    return (showResults.textContent = "Ничья");
  } else if (humanChoice == "rock" && computerChoice == "scissor") {
    return (
      (showResults.textContent = "You won: Rock beats scissors"),
      (humanScore += 1)
    );
  } else if (humanChoice == "scissor" && computerChoice == "paper") {
    return (
      (showResults.textContent = "You won: scissors beat paper"),
      (humanScore += 1)
    );
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    return (
      (showResults.textContent = "You won: paper beats rock"), (humanScore += 1)
    );
  } else if (computerChoice == "rock" && humanChoice == "scissor") {
    return (
      (showResults.textContent = "You Lose: Rock beats scissors"),
      (computerScore += 1)
    );
  } else if (computerChoice == "scissor" && humanChoice == "paper") {
    return (
      (showResults.textContent = "You Lose: scissors beat paper"),
      (computerScore += 1)
    );
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    return (
      (showResults.textContent = "You Lose: paper beats rock"),
      (computerScore += 1)
    );
  } else {
    return (showResults.textContent = "It doesn't work");
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
