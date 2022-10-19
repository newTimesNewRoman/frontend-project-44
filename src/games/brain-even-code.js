import {
  getRandomNumber,
} from '../get-random-num-func.js';

import playBrainGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

function playRound() {
  const randomNumber = getRandomNumber(100);
  const question = randomNumber.toString();
  const trueAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return [question, trueAnswer];
}

export default () => playBrainGame(playRound, gameDescription);
