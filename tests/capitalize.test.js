import { strict as assert } from 'assert';
import capitalize from '../src/capitalize.js';

assert.deepStrictEqual(capitalize(''), '');
assert.deepStrictEqual(capitalize('hello'), 'Hello');

console.log('All tests finished!');
