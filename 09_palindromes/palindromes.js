const palindromes = function (string) {
  string = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
  const reversed = Array.from(string).reverse().reduce((res, cur) => res + cur)

  return string === reversed
}

// Do not edit below this line
module.exports = palindromes
