const { test, expect } = require("@jest/globals")
const quadratic = require("../src/quadratic")

test("Given a = 2, b = 9, c = 10", function () {
    const expected = [-2, -2.5]
    const result = quadratic(2, 9, 10)

    expect(result).toStrictEqual(expected)
})

test("Given a = 1, b = -5, c = 6", function () {
    const expected = [3, 2]
    const result = quadratic(1, -5, 6)

    expect(result).toStrictEqual(expected)
})

test("Given a = 1, b = -4, c = 4", function () {
    const expected = [2, 2]
    const result = quadratic(1, -4, 4)

    expect(result).toStrictEqual(expected)
})