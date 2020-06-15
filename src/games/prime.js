import getRandomInt from '../random-integer.js';
import getLetPlay from '../cli.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getNaturalNum = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      count += 1;
    }
  }
  return (count > 2) ? 'no' : 'yes';
};


const getPrime = () => {
  const num = getRandomInt(1, 100);
  const question = num.toString();
  const answer = getNaturalNum(num);
  return [question, answer];
};

export default () => getLetPlay(description, getPrime);