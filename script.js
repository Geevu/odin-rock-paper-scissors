function getComputerChoice() {
  let choice = Math.floor(Math.random() * 100 - 1);
  if (choice <= 33) {
    return "Rock";
  } else if (choice > 33 && choice <= 66) {
    return "Paper";
  } else choice > 66 && choice <= 99;

  return "Scissors";
}

getComputerChoice();

function getHumanChoice(){
   let choice= prompt("Rock || Paper || Scissors")
   choice = choice.toLowerCase
}

getHumanChoice()