import {
  getRandomNumber, getAnswer, isTrueAnswer,
} from '../src/index.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) if (num % i === 0) return 'no';
  return 'yes';
}

export function playRound() {
  const randomNumber = getRandomNumber(25);
  const answer = getAnswer(randomNumber).toLowerCase();
  const isPrimeNumber = isPrime(randomNumber);
  return isTrueAnswer(answer, isPrimeNumber);
}
