#!/usr/bin/env node

import askName from '..';
import askCalc from '../games/calc';

const name = askName('What is the result of the expression?\n');
console.log('');
askCalc(name);
