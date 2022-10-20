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
const btnNew = document.querySelector('.btn--new');

let scoresMain, currentScore, activePlayer, isPlaying;

// Starting conditions
const newGame = function () {
  scoresMain = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  diceElement.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};

newGame();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //Change player
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

//Rolling dice function - click on BUTTON
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
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
  }
});

// Button HOLD
btnHold.addEventListener('click', function () {
  scoresMain[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scoresMain[activePlayer];

  // chceck score is above 100 ?
  if (scoresMain[activePlayer] >= 100) {
    isPlaying = false;
    diceElement.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }
});

// Button NEW
btnNew.addEventListener('click', newGame);
