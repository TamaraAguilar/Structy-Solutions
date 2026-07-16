// time: O(n + m)
// space: O(n + m)
const exclusiveItems = (a, b) => {
  const result = [];

  // Create a set using array a
  const setA = new Set(a); // O(n)

  // Create a set using array b
  const setB = new Set(b); // O(m)

  // Iterate through array a and check different elements from setB
  for (let el of a) {
    if (!setB.has(el)) {
      result.push(el);
    }
  }

  // Iterate through array b and check different elements from setA
  for (let el of b) {
    if (!setA.has(el)) {
      result.push(el);
    }
  }

  return result;
};

module.exports = {
  exclusiveItems,
};
