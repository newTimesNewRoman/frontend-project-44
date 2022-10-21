import getRandomNumber from '../get-random-num-func.js';

import playBrainGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

function createProgression(start, interval) {
  const lengthOfProgressionList = 10;
  const progressionList = [start];
  for (let i = 1; i < lengthOfProgressionList; i += 1) {
    progressionList.push(i * interval + start);
  }
  return progressionList;
}

function playRound() {
  const startNumber = getRandomNumber(1, 25);
  const interval = getRandomNumber(1, 10);
  const progressionList = createProgression(startNumber, interval);
  const deleteIndex = getRandomNumber(0, 9);
  const expectedAnswer = progressionList[deleteIndex].toString();
  progressionList[deleteIndex] = '..';
  const question = progressionList.join(' ');
  return [question, expectedAnswer];
}

export default () => playBrainGame(playRound, gameDescription);
