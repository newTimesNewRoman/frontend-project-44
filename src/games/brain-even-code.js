import getRandomNumber from '../get-random-num-func.js';

import playBrainGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  return (number % 2 === 0) ? true : false;
}

function playRound() {
  const randomNumber = getRandomNumber(1, 100);
  const question = randomNumber.toString();
  const expectedAnswer = (isEven(randomNumber) === true) ? 'yes' : 'no';
  return [question, expectedAnswer];
}

export default () => playBrainGame(playRound, gameDescription);
