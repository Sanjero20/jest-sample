const index = [...Array(26).keys()].map(i => i + 97);
const alphabet = index.map(x => String.fromCharCode(x));
console.log(alphabet);

function shiftedChar(char, shift) {
  const letterIndex = alphabet.indexOf(char);
  const shiftIndex = (letterIndex + shift) % 26;
  return shiftIndex;
}

function ceasarCipher(word, shift = 13) {
  const code = [];
  word = [...word];

  word.forEach(char => {
    if (char == ' ') code.push(char);
    if (alphabet.includes(char)) {
      let encoded = shiftedChar(char, shift);
      code.push(alphabet[encoded]);
    }
  });

  return code.join('');
}

module.exports = ceasarCipher;
