// If there’s a tie, then the game ends in a draw.
// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.

let getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log('Please enter a valid choice: "rock", "paper", or "scissors".');
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

function determineWinner(userChoice, computerChoice) {
  if (userChoice === "bomb") {
    return `WOW!!! Automatic WIN!`;
  }
  if (userChoice === computerChoice) {
    return `There was a tie!`;
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return `Sorry, you lost`;
    }
    if (computerChoice === "scissors") {
      return `Congrats! You won!`;
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return `Sorry, you lost`;
    }
    if (computerChoice === "rock") {
      return `Congrats! You won!`;
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return `Sorry, you lost`;
    }
    if (computerChoice === "paper") {
      return `Congrats! You won!`;
    }
  }
}

function playGame(userInput) {
  let userChoice = getUserChoice(userInput);
  let computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice} while computer chose ${computerChoice}`);
  let results = determineWinner(userChoice, computerChoice);
  console.log(results);
}

var userInput = prompt();
playGame(userInput);
