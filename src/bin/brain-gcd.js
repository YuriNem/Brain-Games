#!/usr/bin/env node

import askQuestion from '..';
import askGcd from '../games/gcd';

const name = askQuestion('Find the greatest common divisor of given numbers.\n');
console.log('');
askGcd(name);
