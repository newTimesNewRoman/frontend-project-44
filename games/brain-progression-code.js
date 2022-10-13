import {
  getRandomNumber, getRandomNumberInRange, getAnswer, isTrueAnswer,
} from '../src/index.js';

export const gameDescription = 'What number is missing in the progression?';

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

export function playRound() {
  const startNumber = getRandomNumber(25);
  const intervalNumber = getRandomNumberInRange(1, 10);
  const progressionList = createProgression(startNumber, intervalNumber);
  const deleteIndex = getRandomNumber(10);
  const progressionListDeleteUnit = deleteUnitProgression(progressionList, deleteIndex);
  const questionProgressionList = `${progressionListDeleteUnit.join(' ')}`;
  const answer = Number(getAnswer(questionProgressionList));
  return isTrueAnswer(answer, progressionList[deleteIndex]);
}
