'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if(!guess){
    document.querySelector('.message').textContent = 'No Number!';
  }

  else if(guess === secretNumber) {
    document.querySelector('.message').textContent = 'Success, Correct Guess!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }

  else if(guess > secretNumber) {
    if(score > 1){
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      document.querySelector('.message').textContent = 'You lose the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  else if(guess < secretNumber) {
    if(score > 1){
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      document.querySelector('.message').textContent = 'You lose the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function (){
  secretNumber = Math.trunc(Math.random()*20)+1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
