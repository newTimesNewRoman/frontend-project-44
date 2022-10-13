import {
  user, sayHi, getRandomNumber, getAnswer,
} from '../src/index.js';

let counter = 0;

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

function checkAnswer() {
  const startNumber = getRandomNumber(25);
  const intervalNumber = getRandomNumber(10);
  const progressionList = createProgression(startNumber, intervalNumber);
  const deleteIndex = getRandomNumber(10);
  const progressionListDeleteUnit = deleteUnitProgression(progressionList, deleteIndex);
  const questionProgressionList = `${progressionListDeleteUnit}`;
  const answer = Number(getAnswer(questionProgressionList));
  if (answer === progressionList[deleteIndex]) {
    console.log('Correct!');
    counter += 1;
    if (counter < 3) {
      checkAnswer();
    } else {
      console.log(`Congratulations, ${user}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${progressionList[deleteIndex]}'.\nLet's try again, ${user}!`);
  }
}

export default function playBrainProgression() {
  sayHi(user);
  console.log('What number is missing in the progression?');
  checkAnswer();
}
