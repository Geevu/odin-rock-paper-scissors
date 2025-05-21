let finalScoreComputer = 0;
let finalScoreHuman = 0;
function playGame() {
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
      (computerChoice == "paper" && humanChoice == "scissors") ||
      (computerChoice == "scissors" && humanChoice == "rock")
    ) {
      return console.log("You won");
    } else return console.log("You lost");
  }
  playRound(computerChoice, humanChoice);

  if (
    (computerChoice == "rock" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "rock")
  ) {
    humanScore = humanScore + 1;
    finalScoreHuman = finalScoreHuman + humanScore;
    console.log("Your gain " + humanScore + " point");
  } else if (computerChoice == humanChoice) {
    console.log("No point for anyone");
  } else {
    console.log(`Computer gain ${computerScore + 1} point`);
    computerScore = computerScore + 1;
    finalScoreComputer = finalScoreComputer + computerScore;
  }
  console.log("Computer choice was " + computerChoice);
  console.log("Your choice was " + humanChoice);
}
console.warn("Round 1")
alert("Round 1")
playGame();
console.warn("Round 2")
alert("Round 2")
playGame();
console.warn("Round 3")
alert("Round 3")
playGame();
console.warn("Round 4")
alert("Round 4")
playGame();
console.warn("Final Round")
alert("Final Round")
playGame();


console.warn("Final Points Tally")
console.log("Computer final score is " + finalScoreComputer);
console.log("Your final score is " + finalScoreHuman);

if(finalScoreComputer>finalScoreHuman){
    alert("You lost the game, Let's give it another try")
    console.warn("You lost, computer won the game")
}else if(finalScoreComputer<finalScoreHuman){
    alert("Congratulations, You beat the Computer")
    console.warn("You won the battle")
}else{
    alert("It's a tie")
    console.warn("It's a tie")
}
