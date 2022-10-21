import getRandomNumber from '../get-random-num-func.js';

import playBrainGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  const sqrtNum = Math.sqrt(num);
  for (let i = 2; i <= sqrtNum; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

function playRound() {
  const randomNumber = getRandomNumber(1, 25);
  const expectedAnswer = (isPrime(randomNumber) === true) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
}

export default () => playBrainGame(playRound, gameDescription);
