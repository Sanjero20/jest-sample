function ceasarCipher(word, shift = 13) {
  const code = [];

  const index = [...Array(26).keys()].map(i => i + 97);
  const alphabet = index.map(x => String.fromCharCode(x));
  console.log(alphabet);

  word = [...word];
  word.forEach(char => {
    if (!alphabet.includes(char)) {
      if (char == ' ') {
        code.push(' ');
      }
    } else {
      const letterIndex = alphabet.indexOf(char);
      const shiftIndex = (letterIndex + shift) % 26;
      code.push(alphabet[shiftIndex]);
    }
  });

  return code.join('');
}

module.exports = ceasarCipher;
