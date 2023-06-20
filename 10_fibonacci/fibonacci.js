const fibonacci = function (index) {
  if (index < 0) return 'OOPS'

  // in loop, add up the sequence until the length of the array is index - 1
  let seq = [1]

  while (seq.length < index) {
    if (seq.length === 1) {
      seq.push(1)
    } else {
      seq.push(seq.at(-1) + seq.at(-2))
    }
  }

  return seq.pop()
}

// Do not edit below this line
module.exports = fibonacci
