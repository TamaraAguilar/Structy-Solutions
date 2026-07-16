const intersectionWithDupes = (a, b) => {
  const result = [];
  const countA = eleCount(a);
  const countB = eleCount(b);

  for (let ele in countA) {
    if (ele in countB) {
      for (let i = 0; i < Math.min(countA[ele], countB[ele]); i++) {
        result.push(ele);
      }
    }
  }

  return result;
};

const eleCount = (elements) => {
  const count = {};

  for (let ele of elements) {
    if (!(ele in count)) {
      count[ele] = 0;
    }

    count[ele]++;
  }

  return count;
};

module.exports = {
  intersectionWithDupes,
};
