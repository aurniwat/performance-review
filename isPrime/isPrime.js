export function isPrime(num) {
  if (num === 1) {
    return false
  } else if (num === 2) {
    return true
  } else if (num > 2) {
    let isPrime = true
    for (let i = 2; i <= num; i++) {
      if (num / i === 0) {
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
