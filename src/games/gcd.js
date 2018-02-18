import cons from '../cons';
import { flow } from '..';

const findGcd = (a, b) => {
  let numberOne = a;
  let numberTwo = b;
  while (numberOne !== 0 && numberTwo !== 0) {
    if (numberOne > numberTwo) {
      numberOne %= numberTwo;
    } else {
      numberTwo %= numberOne;
    }
  }
  return (numberOne + numberTwo);
};

const askGcd = () => {
  const numberOne = Math.floor(Math.random() * (100 + 1));
  const numberTwo = Math.floor(Math.random() * (100 + 1));
  const userQuestion = `${numberOne} ${numberTwo}`;
  const userAnswer = findGcd(numberOne, numberTwo);
  return cons(userQuestion, userAnswer);
};

export default () => flow(askGcd, 'Find the greatest common divisor of given numbers.');
