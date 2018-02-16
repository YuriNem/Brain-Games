import cons from '../cons';
import { flow } from '..';

const askProgression = () => {
  const numberOne = Math.floor(Math.random() * (100 + 1));
  const progressionStep = Math.floor(Math.random() * (9 + 1)) + 1;
  const progressionNumbers = [];
  progressionNumbers[0] = numberOne;
  for (let i = 1; i < 10; i += 1) {
    progressionNumbers[i] = (i * progressionStep) + numberOne;
  }
  const progressionUnknownPosition = Math.floor(Math.random() * (7 + 1)) + 1;
  const progressionUnknownNumber = progressionNumbers[progressionUnknownPosition];
  let progressionNumbersString = '';
  for (let j = 0; j < 10; j += 1) {
    if (progressionNumbers[j] !== progressionUnknownNumber) {
      progressionNumbersString += String(progressionNumbers[j]);
      progressionNumbersString += ' ';
    } else {
      progressionNumbersString += '..';
      progressionNumbersString += ' ';
    }
  }
  const resultInQuestion = progressionNumbersString;
  const resultInAnswer = progressionUnknownNumber;
  return cons(resultInQuestion, resultInAnswer);
};

export default () => flow(askProgression, 'What number is missing in this progression?');
