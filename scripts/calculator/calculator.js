function calculator(a, b) {
  return {
    add: a + b,
    sub: a - b,
    mul: a * b,
    div: b == 0 ? 'Math Error' : a / b,
  };
}

module.exports = calculator;
