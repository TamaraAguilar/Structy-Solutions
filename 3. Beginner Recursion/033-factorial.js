const factorial = (n) => {
  // Base case
  if (n === 0) {
    return 1;
  }

  // Recursion
  return n * factorial(n - 1);
};

module.exports = {
  factorial,
};
