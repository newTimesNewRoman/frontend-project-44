import getRandomNumber from '../get-random-num-func.js';

import playBrainGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  return (number % 2 === 0);
}

function playRound() {
  const randomNumber = getRandomNumber(1, 100);
  const expectedAnswer = (isEven(randomNumber) === true) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
}

export default () => playBrainGame(playRound, gameDescription);
