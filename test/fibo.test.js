const { test, expect } = require("@jest/globals")
const { fibonacci, makeFibonacciArray } = require("../src/fibo")

test("Calcultate fibonacci number at position 1", function () {
    const result = fibonacci(1)
    expect(result).toBe(1)
})

test("Calcultate fibonacci number at position 7", function () {
    const result = fibonacci(7)
    expect(result).toBe(13)
})

test("Make array with 10 numbers", function () {
    const result = makeFibonacciArray(10)
    const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

    expect(result).toStrictEqual(expected)
})

test("Make array with 1000 numbers at least 3000ms", function () {
    const start = Date.now()

    makeFibonacciArray(1000)

    const end = Date.now()
    const timestamp = Math.abs(end - start)

    expect(timestamp).toBeLessThan(3000)
})