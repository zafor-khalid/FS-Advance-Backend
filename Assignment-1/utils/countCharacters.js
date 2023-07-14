const countCharacters = (inputString) => {
  const letterRegex = /[a-zA-Z]/;
  const symbolRegex = /[^a-zA-Z0-9\s]/;
  const numericRegex = /[0-9]/;

  const characterCount = {
    letters: 0,
    symbols: 0,
    numeric: 0,
  };

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (letterRegex.test(char)) {
      characterCount.letters++;
    } else if (symbolRegex.test(char)) {
      characterCount.symbols++;
    } else if (numericRegex.test(char)) {
      characterCount.numeric++;
    }
  }

  return characterCount;
};
module.exports = countCharacters;
