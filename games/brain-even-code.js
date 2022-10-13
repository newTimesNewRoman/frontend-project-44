import {
  getRandomNumber, getAnswer, isTrueAnswer,
} from '../src/index.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export function playRound() {
  const randomNumber = getRandomNumber(100);
  const answer = getAnswer(randomNumber).toLowerCase();
  const isEven = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return isTrueAnswer(answer, isEven);
}
