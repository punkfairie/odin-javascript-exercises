const add = function (...numbers) {
  return numbers.reduce((res, cur) => res + cur, 0)
}

const subtract = function (...numbers) {
  return numbers.reduce((res, cur) => res - cur)
}

const sum = function (numbers) {
  return add(...numbers)
}

const multiply = function (...numbers) {
  return numbers.reduce((res, cur) => res * cur)
}

const power = function (...numbers) {
  return numbers.reduce((res, cur) => res ** cur)
}

const factorial = function (number) {
  if (number < 0) {
    return -1
  } else if (number === 0) {
    return 1
  } else {
    return number * factorial(number - 1)
  }
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
}
