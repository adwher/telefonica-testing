function fibonacci(n = 0) {
    n = parseInt(n)
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

function makeFibonacciArray(to = 0) {
    return new Array(to)
        .fill(0, 0)
        .map((curr, index) => index)
        .map((number) => fibonacci(number))
}

module.exports = {
    fibonacci, makeFibonacciArray
}