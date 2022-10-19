import {
  getRandomNumber, getRandomNumberInRange,
} from '../get-random-num-func.js';

import playBrainGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

function createProgression(start, interval) {
  const progressionList = [start];
  for (let i = 1; i < 10; i += 1) {
    progressionList.push(i * interval + start);
  }
  return progressionList;
}

function deleteUnitProgression(progression, deleteUnitIndex) {
  const progressionWithoutUnit = progression.slice(0);
  progressionWithoutUnit.splice(deleteUnitIndex, 1, '..');
  return progressionWithoutUnit;
}

function playRound() {
  const startNumber = getRandomNumber(25);
  const intervalNumber = getRandomNumberInRange(1, 10);
  const progressionList = createProgression(startNumber, intervalNumber);
  const deleteIndex = getRandomNumber(10);
  const progressionListDeleteUnit = deleteUnitProgression(progressionList, deleteIndex);
  const questionProgressionList = `${progressionListDeleteUnit.join(' ')}`;
  const trueAnswer = progressionList[deleteIndex].toString();
  return [questionProgressionList, trueAnswer];
}

export default () => playBrainGame(playRound, gameDescription);
