// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Iterative solution
// const getNodeValue = (head, index) => {
//   let current = head;
//   let currentIndex = 0;

//   while (current !== null) {
//     if (currentIndex === index) return current.val;
//     current = current.next;
//     currentIndex++;
//   }

//   return null;
// };

// Recursive solution

module.exports = {
  getNodeValue,
};
