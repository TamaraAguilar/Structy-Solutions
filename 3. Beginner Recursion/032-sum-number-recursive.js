const sumNumbersRecursive = (numbers) => {
  const firstNum = numbers[0];

  // Base case: empty array []
  if (numbers.length === 0) {
    return 0;
  }

  // Recursion

  // slices from second index until the end (second parameter is omitted)
  return firstNum + sumNumbersRecursive(numbers.slice(1));
};

module.exports = {
  sumNumbersRecursive,
};
