import readlineSync from 'readline-sync';

function getUserChoice() {
  let userChoice = readlineSync.question(
    'What is going to be? rock, paper or scissors?'
  );
  userChoice = userChoice.toLowerCase();
  if (userChoice == 'rock') {
    userChoice = 'rock';
  } else if (userChoice == 'scissors') {
    userChoice == 'scissors';
  } else if (userChoice == 'paper') {
    userChoice = 'paper';
  } else {
    console.log('Try inserting a valid option!');
    userChoice = readlineSync.question(
      'What is going to be? rock, paper or scissors?'
    );
    userChoice = userChoice.toLowerCase();
  }
  return userChoice;
}

//getUserChoice();

function getComputerChoice() {
  /*  Randomly returns either 'rock, 'paper' or 'scissors'.  */
  let computerChoice;
  const validOptions = ['rock', 'paper', 'scissors'];
  let randomFactor = Math.floor(Math.random() * 3);
  switch (randomFactor) {
    case 0:
      computerChoice = validOptions[0];
      break;
    case 1:
      computerChoice = validOptions[1];
      break;
    case 2:
      computerChoice = validOptions[2];
      break;
  }
  return computerChoice;
}

//getComputerChoice();

function playRound(userChoice, computerChoice) {
  /* Returns 0 if you lose, 1 if you win. Alerts a string "You Lose! Paper beats Rock" or "You win! Paper beats Rock". */
  userChoice = getUserChoice();
  computerChoice = getComputerChoice();

  if (userChoice == computerChoice) {
    console.log(`The computer also choose ${userChoice}. It's a tie!`);
    return 0;
  } else if (userChoice == 'rock' && computerChoice == 'paper') {
    console.log(`You lose! ${computerChoice} beats ${userChoice}`);
    return 0;
  } else if (userChoice == 'rock' && computerChoice == 'scissors') {
    console.log(`You win! ${userChoice} beats ${computerChoice}`);
    return 1;
  } else if (userChoice == 'scissors' && computerChoice == 'paper') {
    console.log(`You win! ${userChoice} beats ${computerChoice}`);
    return 1;
  } else if (userChoice == 'scissors' && computerChoice == 'rock') {
    console.log(`You lose! ${computerChoice} beats ${userChoice}`);
    return 0;
  } else if (userChoice == 'paper' && computerChoice == 'rock') {
    console.log(`You win! ${userChoice} beats ${computerChoice}`);
    return 1;
  } else if (userChoice == 'paper' && computerChoice == 'scissors') {
    console.log(`You lose! ${computerChoice} beats ${userChoice}`);
    return 0;
  }
}
//playRound();

function game() {
  /*Keeps score of 5 rounds and alert 'You are the winner!' or 'You lost!' or 'Oh wow! It's a tie' */
  let total = 0;
  console.log('Welcome to a new game!');
  console.log('Each game consists of 5 rounds.');
  for (let i = 1; i < 6; i++) {
    console.log(`Round #${i}`);
    let round = playRound();
    total += round;
    console.log(`You have won ${total} of 5 rounds`);
  }

  switch (total) {
    case 5:
      console.log('You are the absolute winner!');
      break;
    case 4:
      console.log('You are the winner!');
      break;
    case 3:
      console.log('That was close! But you are indeed still the winner!');
      break;
    case 2:
      console.log('That was so close! But your are indeed the loser!');
      break;
    case 1:
      console.log('You lost this time :(. Wanna play another round?');
      break;
    case 1:
      console.log("You didn't even won once!");
      break;
  }
}
game();
