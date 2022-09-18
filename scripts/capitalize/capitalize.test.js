import capitalize from './capitalize';

test('Capitalize first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});
