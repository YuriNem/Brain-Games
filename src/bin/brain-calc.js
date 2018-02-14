#!/usr/bin/env node

import askQuestion from '..';
import askCalc from '../games/calc';

const name = askQuestion('What is the result of the expression?\n');
console.log('');
askCalc(name);
