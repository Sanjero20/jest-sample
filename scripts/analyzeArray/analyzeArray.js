function getAverage(array) {
  let sumOfAll = array.reduce((total, curr) => total + curr);
  return sumOfAll / array.length;
}

function anaylzeArray(array) {
  return {
    average: getAverage(array),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

module.exports = { anaylzeArray };
