let humanScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 100 - 1);
  if (choice <= 33) {
    return "rock";
  } else if (choice > 33 && choice <= 66) {
    return "paper";
  } else choice > 66 && choice <= 99;
  return "scissors";
}

function getHumanChoice() {
  let choice = prompt("Rock || Paper || Scissors");
  choice = choice.toLowerCase();
  return choice;
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    return console.log("It's a tie");
  } else if (
    (computerChoice == "rock" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "scissors" || "scissor") ||
    (computerChoice == "scissors" && humanChoice == "rock")
  ) {
    return console.log("You win");
  } else return console.log("You lose");
}
playRound(computerChoice, humanChoice)

if (
  (computerChoice == "rock" && humanChoice == "paper") ||
  (computerChoice == "paper" && humanChoice == "scissors") ||
  (computerChoice == "scissors" && humanChoice == "rock")
) {
  humanScore = humanScore + 1;
  console.log("Your score is " + humanScore);
} else if (computerChoice== humanChoice){;
  console.log("No point for anyone")
}else console.log (`Computer Score is ${computerScore +1} `)

console.log("Computer choice was " + computerChoice)
console.log("Your choice was " + humanChoice)

