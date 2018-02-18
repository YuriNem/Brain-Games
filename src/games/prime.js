import cons from '../cons';
import { flow } from '..';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const askPrime = () => {
  const userQuestion = Math.floor(Math.random() * (100 + 1));
  const userAnswer = isPrime(userQuestion) ? 'yes' : 'no';
  return cons(userQuestion, userAnswer);
};

export default () => flow(askPrime, 'Is this number prime?');
