const isPrime = (n) => {
  // Base case: there's no smaller prime number than 2
  if (n < 2) {
    return false;
  }

  // Check factors up to sqrt(n) -> O(sqrt(n))
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      // If number is divisible, that is, if the remainder is 0
      return false;
    }
  }

  // If the number was not divisible by any of the possible factors, we return true
  return true;
};

module.exports = {
  isPrime,
};
