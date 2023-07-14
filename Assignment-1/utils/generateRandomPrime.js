const generateRandomPrime = (min, max) => {
    const isPrime = (num) => {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    let prime;
    do {
        prime = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (!isPrime(prime));

    return prime;
};
module.exports = generateRandomPrime;
