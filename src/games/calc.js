import cons from '../cons';
import { flow } from '..';

const askCalc = () => {
  const numberOne = Math.floor(Math.random() * (100 + 1));
  const numberTwo = Math.floor(Math.random() * (100 + 1));
  let operator = '';
  let result;
  switch (Math.floor(Math.random() * (3)) + 1) {
    case 1:
      operator = '+';
      result = numberOne + numberTwo;
      break;
    case 2:
      operator = '-';
      result = numberOne - numberTwo;
      break;
    case 3:
      operator = '*';
      result = numberOne * numberTwo;
      break;
    default:
      break;
  }
  const resultInQuestion = `${numberOne} ${operator} ${numberTwo}`;
  const resultInAnswer = result;
  return cons(resultInQuestion, resultInAnswer);
};

export default () => flow(askCalc, 'What is the result of the expression?\n');
