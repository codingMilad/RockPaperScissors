function getComputerChoice() {
  let choice = ['rock', 'paper', 'scissors'];
  return choice[Math.floor(Math.random() * choice.length)];
}
let user = 0;
let pc = 0;

//takes 2 parameters, compares it against each other and decides the winner (or tie).
function startGame(playerSelection, computerSelection) {
  // let playerChoice = prompt('Please choose between Rock, Paper or Scissors: ');

  // playerSelection = playerChoice.toLowerCase();
  let div = document.createElement('p');
  computerSelection = getComputerChoice();

  if (playerSelection === 'paper' && computerSelection === 'paper') {
    console.log('It`s a tie!');
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('You Lose! Paper beats Rock');
    pc += 1;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('You Win!, Rock beats scissors');
    user += 1;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('You Win!, Rock beats scissors');
    user += 1;
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    console.log('It`s a tie!');
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('You Lose! Paper beats Rock');
    pc += 1;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log('You Lose! Paper beats Rock');
    pc += 1;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('You Win!, Rock beats scissors');
    user += 1;
  } else {
    console.log('It`s a tie!');
  }

  console.log(user, pc);
  div.innerHTML = '${user}-${pc}';
  const para = document.createElement('p');
  para.innerText = `${user}-${pc}`;
  document.body.appendChild(para);
  console.log(playerSelection, computerSelection);
}

//starts the game 5 times
for (let i = 0; i < 1; i++) {
  getComputerChoice();
  startGame();
  if (i == 4) {
    isFiveRound();
  }
}

// takes after the 5 rounds the user and pc and decides if who won or if it is a tie
function isFiveRound() {
  if (user > pc) {
    return 'You Won';
  } else if (pc > user) {
    return 'You Lose!';
  } else {
    return 'It`s a tie!';
  }
}

const rock = document.getElementById('rock');
rock.addEventListener('click', function (e) {
  startGame('rock');
});

const paper = document.getElementById('paper');
paper.addEventListener('click', function () {
  startGame('paper');
});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', function () {
  startGame('scissors');
});
