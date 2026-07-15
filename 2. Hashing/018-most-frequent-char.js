// time: O(n);
// space: O(n);
const mostFrequentChar = (s) => {
  const count = {};
  let best = null;

  let most_frequent;

  for (let char of s) {
    if (!(char in count)) {
      count[char] = 0;
    }

    count[char] += 1;
  }

  // Figure out the key that has the largest associated count
  for (let char of s) {
    if (best === null || count[char] > count[best]) {
      best = char;
    }
  }

  return best;
};

module.exports = {
  mostFrequentChar,
};
