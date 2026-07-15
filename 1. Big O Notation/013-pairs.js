const pairs = (elements) => {
  const arr = [];
  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      arr.push([elements[i], elements[j]]);
    }
  }

  return arr;
};

module.exports = {
  pairs,
};
