// If there’s a tie, then the game ends in a draw.
// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.

let getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();

  if (userInput === "rock" || "paper" || "scissors") {
    return userInput;
  } 
  if (userInput === "rock" || "paper" || "scissors"){
    return(console.log(error));
  }
};

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
// console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
  if (userChoice === "bomb") {
    return console.log(`WOW!!! Automatic WIN!`);
  }
  if (userChoice === computerChoice) {
    return console.log(`There was a tie!`);
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return console.log(`Sorry, you lost`);
    }
    if (computerChoice === "scissors") {
      return console.log(`Congrats! You won!`);
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return console.log(`Sorry, you lost`);
    }
    if (computerChoice === "rock") {
      return console.log(`Congrats! You won!`);
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return console.log(`Sorry, you lost`);
    }
    if (computerChoice === "paper") {
      return console.log(`Congrats! You won!`);
    }
  }
}

function playGame() {
  let userChoice = getUserChoice("paper");
  let computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice} while computer chose ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
