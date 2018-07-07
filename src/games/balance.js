import cons from '../cons';
import { flow } from '..';

const askBalance = () => {
  let number = Math.floor(Math.random() * (10000 - 10)) + 10;
  const userQuestion = `${number}`;
  let sum = 0;
  let count = 0;
  while (number) {
    sum += number % 10;
    count += 1;
    number = Math.floor(number / 10);
  }
  const value = Math.floor(sum / count);
  let rest = sum % count;
  let result = 0;
  for (let i = 0; i < count; i += 1) {
    result += value * (10 ** i);
    if (rest) {
      result += 1 * (10 ** i);
      rest -= 1;
    }
  }
  const userAnswer = `${result}`;
  return cons(userQuestion, userAnswer);
};

export default () => flow(askBalance, 'Balance the given number.');
