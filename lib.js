function avg(numbers) {
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

function prime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

module.exports = { avg, prime, factorial };
