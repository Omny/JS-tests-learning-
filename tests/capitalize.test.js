import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Capitalize function is working.');
}

if (capitalize() !== '') {
  throw new Error('Capitalize function is not working.');
}

console.log('All tests finished!');
