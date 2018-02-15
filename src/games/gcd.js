import cons from '../cons';
import { flow } from '..';

const askGcd = () => {
  const numberOne = Math.floor(Math.random() * (100 + 1));
  const numberTwo = Math.floor(Math.random() * (100 + 1));
  let result;
  for (let j = numberOne < numberTwo ? numberOne : numberTwo; j >= 1; j -= 1) {
    if ((numberOne % j === 0) && (numberTwo % j === 0)) {
      result = j;
      break;
    }
  }
  const resultInQuestion = `${numberOne} ${numberTwo}`;
  const resultInAnswer = result;
  return cons(resultInQuestion, resultInAnswer);
};

export default () => flow(askGcd, 'Find the greatest common divisor of given numbers.\n');
