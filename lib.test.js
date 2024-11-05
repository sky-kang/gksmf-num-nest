const { avg, prime, factorial } = require('./lib');

test('avg function', () => {
    expect(avg([1, 2, 3])).toBe(2);
    expect(avg([10, 20, 30])).toBe(20);
});

test('prime function', () => {
    expect(prime(5)).toBe(true); 
    expect(prime(4)).toBe(false); 
});

test('factorial function', () => {
    expect(factorial(5)).toBe(120); 
    expect(factorial(3)).toBe(6);  
});
