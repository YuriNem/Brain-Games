import cons from '../cons';
import { flow } from '..';

const askEven = () => {
  const userQuestion = Math.floor(Math.random() * (100 + 1));
  const userAnswer = (userQuestion % 2 === 0) ? 'yes' : 'no';
  return cons(userQuestion, userAnswer);
};

export default () => flow(askEven, 'Answer "yes" if number even otherwise answer "no".');
