const reverseString = function (string) {
  let reversed = ''

  Array.from(string).reverse().forEach(char => {
    reversed += char
  })

  return reversed
};

// Do not edit below this line
module.exports = reverseString;
