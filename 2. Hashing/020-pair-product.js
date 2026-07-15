// Brute force
// const pairProduct = (numbers, targetProduct) => {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] * numbers[j] === targetProduct) {
//         return [i, j];
//       }
//     }
//   }
// };

// Linear solution
const pairProduct = (numbers, targetProduct) => {
  const previousNums = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetProduct / num;

    if (complement in previousNums) {
      return [i, previousNums[complement]];
    }
    previousNums[num] = i;
  }
};

module.exports = {
  pairProduct,
};
