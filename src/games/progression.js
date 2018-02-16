import cons from '../cons';
import { flow } from '..';

const askProgression = () => {
  const progressionNumbers = [];
  progressionNumbers[0] = Math.floor(Math.random() * (100 + 1));
  const progressionStep = Math.floor(Math.random() * (9 + 1)) + 1;
  const progressionUnknownPosition = Math.floor(Math.random() * (7 + 1)) + 1;
  let resultInQuestion = `${progressionNumbers[0]} `;
  let resultInAnswer;
  for (let i = 1; i < 10; i += 1) {
    progressionNumbers[i] = (i * progressionStep) + progressionNumbers[0];
    if (i === progressionUnknownPosition) {
      resultInQuestion += '.. ';
      resultInAnswer = progressionNumbers[i];
    } else {
      resultInQuestion += `${progressionNumbers[i]} `;
    }
  }
  return cons(resultInQuestion, resultInAnswer);
};

export default () => flow(askProgression, 'What number is missing in this progression?');
