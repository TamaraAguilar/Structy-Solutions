const longestWord = (sentence) => {
  const arr = sentence.split(' '); // Split sentence into words
  let longest = '';

  for (word of arr) {
    // Using 'of' directly extracts the value
    if (word.length >= longest.length) {
      longest = word;
    }
  }

  return longest;
};

module.exports = {
  longestWord,
};
