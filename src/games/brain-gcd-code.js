import getRandomNumber from '../get-random-num-func.js';

import playBrainGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

function findGCD(x, y) {
  if (y > x) return findGCD(y, x);
  if (!y) return x;
  return findGCD(y, x % y);
}

function playRound() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const expectedAnswer = findGCD(num1, num2).toString();
  return [question, expectedAnswer];
}

export default () => playBrainGame(playRound, gameDescription);
