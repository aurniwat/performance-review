export function isPrime(num) {
  if (num === 1) {
    return false
  } else if (num === 2) {
    return true
  } else if (num > 2) {
    let newNum = num
    const numSqrt = Math.sqrt(num)
    if (numSqrt % 1 === 0) {
      newNum = numSqrt
    }
    let isPrime = true
    for (let i = 2; i <= newNum; i++) {
      if (newNum / i === 0) {
        isPrime = false
        break
      }
    }
    if (!isPrime) {
      return false
    } else {
      return true
    }
  }
}
