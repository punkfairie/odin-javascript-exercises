const sumAll = function (number1, number2) {
  if (number1 < 0 || number2 < 0) return 'ERROR'
  if (typeof number1 !== 'number' || typeof number2 !== 'number') return 'ERROR'

  let sum = 0

  const start = Math.min(number1, number2)
  const end = Math.max(number1, number2)

  for (let i = start; i <= end; i++) {
    sum += i
  }

  return sum
}

// Do not edit below this line
module.exports = sumAll
