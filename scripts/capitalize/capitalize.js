function capitalize(text) {
  const firstLetter = text[0].toUpperCase();
  const remainingTxt = text.substring(1);
  return firstLetter + remainingTxt;
}

module.exports = capitalize;
