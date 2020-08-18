function sumPrimes(num) {
    let result = 0;
    let currNum = 2;
    while (currNum <= num) {
        if (isPrime(currNum)) {
            result += currNum;
        }
        currNum++;
    }
    return result;
}

function isPrime(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) {
            return false;
        }
    }
    return number > 1;
}