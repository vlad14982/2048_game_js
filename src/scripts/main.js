'use strict';

const Game = require('../modules/Game.class');
const game = new Game();
const scoreElement = document.querySelector('.game-score');
const startButton = document.getElementById('startButton');
const messageStart = document.querySelector('.message-start');
const messageWin = document.querySelector('.message-win');
const messageLose = document.querySelector('.message-lose');
const messagePlaying = document.querySelector('.message-playing');

function updateBoard() {
  game.updateDisplay();
}

function updateScore() {
  scoreElement.textContent = game.getScore();
}

function updateMessages() {
  const status = game.getStatus();

  if (status === 'win') {
    messageWin.classList.remove('hidden');
    messageLose.classList.add('hidden');
    messageStart.classList.add('hidden');
    messagePlaying.classList.add('hidden');
  } else if (status === 'lose') {
    messageLose.classList.remove('hidden');
    messageWin.classList.add('hidden');
    messageStart.classList.add('hidden');
    messagePlaying.classList.add('hidden');
  } else if (status === 'playing') {
    messagePlaying.classList.remove('hidden');
    messageStart.classList.add('hidden');
    messageWin.classList.add('hidden');
    messageLose.classList.add('hidden');
  } else {
    messageStart.classList.remove('hidden');
    messageWin.classList.add('hidden');
    messageLose.classList.add('hidden');
    messagePlaying.classList.add('hidden');
  }
}

startButton.addEventListener('click', () => {
  if (startButton.classList.contains('start')) {
    game.start();
    updateBoard();
    updateMessages();
    startButton.classList.remove('start');
    startButton.classList.add('restart');
    startButton.textContent = 'Restart';
  } else {
    game.restart();
    updateBoard();
    updateScore();
    updateMessages();
    startButton.classList.remove('restart');
    startButton.classList.add('start');
    startButton.textContent = 'Start';
  }
});

let isAnimating = false;

window.addEventListener('keydown', (event) => {
  if (isAnimating) {
    return;
  }

  switch (event.key) {
    case 'ArrowLeft':
      isAnimating = true;
      game.moveLeft();
      break;
    case 'ArrowRight':
      isAnimating = true;
      game.moveRight();
      break;
    case 'ArrowUp':
      isAnimating = true;
      game.moveUp();
      break;
    case 'ArrowDown':
      isAnimating = true;
      game.moveDown();
      break;
    default:
      return;
  }

  setTimeout(() => {
    updateScore();
    updateMessages();
    isAnimating = false;
  }, 350);
});
