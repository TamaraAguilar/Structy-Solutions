// time: O(n + n + m) => O(2n +m) => O(n + m) => O(n)
// space: O(n)
const anagrams = (s1, s2) => {
  // Create a hash map for each string, so that we count each character
  // They keys of the hashmap will be the unique characters, and the values
  // will be the count of that character
  const count = {};

  for (let char of s1) {
    if (!(char in count)) {
      count[char] = 0;
    }

    count[char] += 1;
  }

  for (let char of s2) {
    if (char in count) {
      count[char] -= 1;
    } else {
      // If there's a character in s2 that's not in s1, it's not an anagram
      return false;
    }
  }

  // Iterate through the count to check that every value is 0
  // We use an 'in' loop to iterate through the keys of that obj
  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }

  return true;
};

module.exports = {
  anagrams,
};
