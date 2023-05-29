let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 9);

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  let userDifference = userGuess - targetNumber;
  let computerDifference = computerGuess - targetNumber;
  if (userDifference < computerDifference || userDifference === computerDifference) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore = humanScore + 1;
  } else if (winner === "computer") {
    computerScore = computerScore + 1;
  }
};
const advanceRound = () => {
  currentRoundNumber++;
};
