export const getRandomNumber = (max) => Math.floor(Math.random() * max);

export const getNextRoundRobin = (total, current) => {
  if (total === current + 1) return 0;
  return current + 1;
};

export const performArithmaticOperation = (first, second, operator) => {
  let result = 0;
  if (operator === '+') {
    result = first + second;
  } else if (operator === '-') {
    result = first - second;
  } else if (operator === '*') {
    result = first * second;
  } else if (operator === '/') {
    if (second === 0) {
      result = 'infinity';
    }
    result = first / second;
  } else {
    result = 'invalid Operation';
  }
  return result;
};
