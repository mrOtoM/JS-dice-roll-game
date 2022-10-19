'use strict';

const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');

// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scoresMain = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice function - click on BUTTON
btnRoll.addEventListener('click', function () {
  const rollDice = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${rollDice}.png`;

  if (rollDice !== 1) {
    currentScore += rollDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    current0Element.textContent = currentScore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0; //Change player
  }
});
