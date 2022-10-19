import {
  getRandomNumberInRange,
} from '../get-random-num-func.js';

import playBrainGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) if (num % i === 0) return 'no';
  return 'yes';
}

function playRound() {
  const randomNumber = getRandomNumberInRange(1, 25);
  const question = randomNumber;
  const trueAnswer = isPrime(randomNumber);
  return [question, trueAnswer];
}

export default () => playBrainGame(playRound, gameDescription);
