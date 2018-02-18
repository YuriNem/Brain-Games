import cons from '../cons';
import { flow } from '..';

const askProgression = () => {
  const progressionNumbers = [];
  progressionNumbers[0] = Math.floor(Math.random() * (100 + 1));
  const progressionStep = Math.floor(Math.random() * (9 + 1)) + 1;
  const progressionUnknownPosition = Math.floor(Math.random() * (7 + 1)) + 1;
  let userQuestion = `${progressionNumbers[0]} `;
  let userAnswer;
  for (let i = 1; i < 10; i += 1) {
    progressionNumbers[i] = (i * progressionStep) + progressionNumbers[0];
    if (i === progressionUnknownPosition) {
      userQuestion += '.. ';
      userAnswer = progressionNumbers[i];
    } else {
      userQuestion += `${progressionNumbers[i]} `;
    }
  }
  return cons(userQuestion, userAnswer);
};

export default () => flow(askProgression, 'What number is missing in this progression?');
