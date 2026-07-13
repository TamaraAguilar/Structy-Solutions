const maxValue = (nums) => {
  // Start with a sentinel value lower than any expected input.
  // Note: if nums could contain negative numbers, -Infinity is safer
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;

  // Functional approach using built-in methods
  // return nums.sort((a,b) => (b - a))[0];
};

module.exports = {
  maxValue,
};
