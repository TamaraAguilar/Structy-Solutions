const intersection = (a, b) => {
  let result = [];
  // Create a set for a
  const setA = new Set(a);

  // Iterate through elements in b and check if they're in hashmap
  for (let item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }

  return result;
};

module.exports = {
  intersection,
};
