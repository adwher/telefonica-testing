const cache = { 0: 0, 1: 1 }

function fibonacci(n = 0) {
    n = parseInt(n)

    if (n in cache) return cache[n]

    else {
        cache[n] = fibonacci(n - 1) + fibonacci(n - 2)
        return cache[n]
    }
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