'use strict';

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');

const diceElement = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scoresMain = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //Change player
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

//Rolling dice function - click on BUTTON
btnRoll.addEventListener('click', function () {
  const rollDice = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${rollDice}.png`;

  if (rollDice !== 1) {
    currentScore += rollDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  scoresMain[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scoresMain[activePlayer];
  switchPlayer();
});
