export function getRandomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

export function getRandomNumberInRange(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
