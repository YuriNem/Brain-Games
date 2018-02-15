#!/usr/bin/env node

import askName from '..';
import askGcd from '../games/gcd';

const name = askName('Find the greatest common divisor of given numbers.\n');
console.log('');
askGcd(name);
