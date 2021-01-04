import { isPrime } from "./isPrime"

describe("isPrime", () => {
  it("1 is not a prime", () => {
    const result = isPrime(1)
    const expectedResult = false

    expect(result).toBe(expectedResult)
  })

  it("2 is a prime", () => {
    const result = isPrime(2)
    const expectedResult = true

    expect(result).toBe(expectedResult)
  })

  it("3 is a prime", () => {
    const result = isPrime(3)
    const expectedResult = true

    expect(result).toBe(expectedResult)
  })

  it("101 is a prime", () => {
    const result = isPrime(101)
    const expectedResult = true

    expect(result).toBe(expectedResult)
  })

  it("3238479234872 is not a prime", () => {
    const result = isPrime(3238479234872)
    const expectedResult = false

    expect(result).toBe(expectedResult)
  })

  it("973369606963379 is a prime (Uncomment to run)", () => {
    const result = false
    const result = isPrime(973369606963379)
    const expectedResult = true

    expect(result).toBe(expectedResult)
  })
})
