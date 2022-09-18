function reverseString(text) {
  const textArray = [...text].reverse();
  return textArray.join('');
}

module.exports = reverseString;
