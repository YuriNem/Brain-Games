import cons from '../cons';
import { flow } from '..';

const askEven = () => {
  const resultInQuestion = Math.floor(Math.random() * (100 + 1));
  const resultInAnswer = (resultInQuestion % 2 === 0) ? 'yes' : 'no';
  return cons(resultInQuestion, resultInAnswer);
};

export default () => flow(askEven, 'Answer "yes" if number even otherwise answer "no".');
