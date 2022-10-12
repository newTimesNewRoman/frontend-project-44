import readlineSync from 'readline-sync';

export const user = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

export function sayHi(name) {
  console.log(`Hello, ${name}!`);
}

export function getRandomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

export function getAnswer(question) {
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  return answer;
}
