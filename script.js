'use strict';
let num = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = num;
let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'not number';
  } else if (guess === num) {
    document.querySelector('.message').textContent = '👍correct number';
    document.querySelector('.number').textContent = num;

    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'purple';
    document.querySelector('.number').style.borderRadius = '50%';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != num) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > num ? '🙌too high' : '🤞too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'loser';
      document.querySelector('body').style.backgroundColor = 'pink';
    }
  }
  /* else if (guess > num) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🙌too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'loser';
      document.querySelector('body').style.backgroundColor = 'pink';
    }
  } else if (guess < num) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤞too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('body').style.backgroundColor = 'pink';
    }
  }*/
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
