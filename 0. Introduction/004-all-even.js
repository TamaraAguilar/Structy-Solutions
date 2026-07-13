const allEven = (nums) => {
  for (let num of nums) {
    if (num % 2 != 0) {
      return false; // If odd immediately return false
    }
  }

  return true; // Otherwise, if we don't find an odd number we return true
};

module.exports = {
  allEven,
};
