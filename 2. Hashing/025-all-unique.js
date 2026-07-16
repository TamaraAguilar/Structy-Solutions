// First solution
// const allUnique = (items) => {
//   // Create a hash map with the count of each element
//   const count = {};
//   for (let i = 0; i < items.length; i++) {
//     const element = items[i];
//     if (!(element in count)) {
//       count[element] = 0;
//     }
//     count[element]++;
//   }

//   for (let el in count) {
//     if (count[el] > 1) return false;
//   }

//   return true;
// };

// Suggested
const allUnique = (items) => {
  // Create a set of the array
  const uniqueItems = new Set(items);

  // Compare sizes
  return uniqueItems.size == items.length;
};

module.exports = {
  allUnique,
};
