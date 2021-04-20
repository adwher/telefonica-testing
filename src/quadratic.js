module.exports = function quadratic(a, b, c) {
    if (a === 0) return []

    else {
        const x1 = ((-b) + (Math.sqrt(Math.pow(b, 2) - 4 * a * c))) / (2 * a)
        const x2 = ((-b) - (Math.sqrt(Math.pow(b, 2) - 4 * a * c))) / (2 * a)

        return [x1, x2]
    }
}