const reverseString = (s) => {
  // Base case
  if (s.length === 0) {
    return "";
  }

  return reverseString(s.slice(1)) + s[0];
};

module.exports = {
  reverseString,
};
