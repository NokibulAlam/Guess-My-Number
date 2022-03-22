'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if(!guess){
    displayMessage('No Number!');
  }

  else if(guess === secretNumber) {
    displayMessage('Success, Correct Guess!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if(score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }

  else if( guess !== secretNumber) {
    if(score > 1){
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      displayMessage('You lose the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function (){
  secretNumber = Math.trunc(Math.random()*20)+1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
