// Brute force solution
//const pairSum = (numbers, targetSum) => {
// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] + numbers[j] === targetSum) {
//       return [i, j];
//     }
//   }
// }
//};

// Linear solution
const pairSum = (numbers, targetSum) => {
  const previousNums = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]; // val
    const complement = targetSum - num;

    if (complement in previousNums) {
      return [i, previousNums[complement]];
    }

    previousNums[num] = i; // Store the idx as the value
  }
};

module.exports = {
  pairSum,
};
