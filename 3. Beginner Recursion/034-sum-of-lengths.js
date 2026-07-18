const sumOfLengths = (strings) => {
  // Base case
  if (strings.length === 0) {
    return 0;
  }

  // Recursion
  return strings[0].length + sumOfLengths(strings.slice(1));
};

module.exports = {
  sumOfLengths,
};
