'use strict';

const messageEl = document.querySelector('.message');
const secretNumEl = document.querySelector('.number');
let scoreEl = document.querySelector('.score');
let score = 20;
let highscoreEl = document.querySelector('.highscore');
let highscore = 0;
const guessEl = document.querySelector('.guess');
const btnCheckEl = document.querySelector('.check');
const btnAgainEl = document.querySelector('.again');
let secretNumber = Math.floor(Math.random() * 20) + 1;

const images = [
  `celeb1.webp`,
  `celeb2.webp`,
  `celeb3.webp`,
  `celeb4.webp`,
  `celeb5.webp`,
];

const compareNumbers = function (number, secretNumber) {
  messageEl.style.color = '#000';

  if (number === secretNumber) {
    if (score > highscore) {
      highscoreEl.textContent = score;
      highscore = score;
    }
    document.querySelector('h1').style.display = 'none';
    messageEl.textContent = 'Correct Number';
    messageEl.style.color = '#ffc107';
    messageEl.style.fontSize = '4rem';
    secretNumEl.textContent = secretNumber;
    secretNumEl.style.width = '30rem';
    btnCheckEl.setAttribute('disabled', '');
    document.body.style.background = `url(images/${
      images[Math.floor(Math.random() * images.length)]
    })`;
    document.body.style.backgroundSize = `cover`;
  } else {
    if (score === 1) {
      messageEl.textContent = 'You lost the game';
      highscoreEl.textContent = 0;
      scoreEl.textContent = 0;
      btnCheckEl.setAttribute('disabled', '');
    } else {
      messageEl.textContent = number > secretNumber ? 'Too high' : 'Too low';
      score--;
      scoreEl.textContent = score;
    }
  }
};

btnCheckEl.addEventListener('click', function () {
  const number = +guessEl.value;

  if (!number || number <= 0 || number > 20) {
    messageEl.textContent = 'Please enter a correct value between 1 and 20';
    messageEl.style.color = 'red';
    return;
  }

  compareNumbers(number, secretNumber);
});

btnAgainEl.addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.body.style.background = `url(images/bg.webp)`;
  document.body.style.backgroundSize = `cover`;
  console.log(secretNumber);
  score = 20;
  scoreEl.textContent = 20;
  guessEl.value = '';
  messageEl.textContent = 'Start guessing...';
  messageEl.style.color = '#000';
  messageEl.style.fontSize = '2rem';
  document.querySelector('h1').style.display = 'block';
  secretNumEl.textContent = '?';
  secretNumEl.style.width = '11rem';
  btnCheckEl.removeAttribute('disabled', '');
});
