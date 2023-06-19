const round = function (number) {
  return Math.round(number * 10) / 10
}

const convertToCelsius = function (F) {
  return round((F - 32) * (5 / 9))
}

const convertToFahrenheit = function (C) {
  return round((C * (9 / 5)) + 32)
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
}
