import ceasarCipher from './ceasar-cipher';
// Run this at the terminal to test realtime
// npx jest --watch ./scripts/ceasarCipher

test('Shift Letters by  13 characters', () => {
  expect(ceasarCipher('a')).toBe('n');
});

test('Shift letteres by 1 character', () => {
  expect(ceasarCipher('a', 1)).toBe('b');
});

test('Encode a string ', () => {
  expect(ceasarCipher('hello')).toBe('uryyb');
});

test('Ignore whitespaces', () => {
  expect(ceasarCipher('hello world')).toBe('uryyb jbeyq');
});
