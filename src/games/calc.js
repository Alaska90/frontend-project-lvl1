import getRandomInt from '../random-integer.js';
import getLetPlay from '../cli.js';

const description = 'What is the result of the expression?';

const operand = ['+', '-', '*'];

const gameData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const index = getRandomInt(0, 2);
  const sign = operand[index];
  const question = `${num1} ${sign} ${num2}`;
  let answer;
  switch (sign) {
    case '+':
      answer = (num1 + num2).toString();
      break;
    case '-':
      answer = (num1 - num2).toString();
      break;
    case '*':
      answer = (num1 * num2).toString();
      break;
    default:
      throw new Error('Error');
  }
  return [question, answer];
};

export default () => getLetPlay(description, gameData);
