const { anaylzeArray } = require('./analyzeArray');

let object = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

let array = [1, 8, 3, 4, 2, 6];

test('do something', () => {
  const data = anaylzeArray(array);
  expect(data).toEqual(object);
});
