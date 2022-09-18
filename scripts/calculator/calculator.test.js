import calculator from './calculator';

test('Addition', () => {
  expect(calculator(1, 1).add).toBe(2);
});

test('Subtraction', () => {
  expect(calculator(1, 1).sub).toBe(0);
});

test('Multiplication', () => {
  expect(calculator(1, 1).mul).toBe(1);
  expect(calculator(1, 0).mul).toBe(0);
});

test('Division', () => {
  expect(calculator(50, 10).div).toBe(5);
  expect(calculator(10, 0).div).toBe('Math Error');
});
