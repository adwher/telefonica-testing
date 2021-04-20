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