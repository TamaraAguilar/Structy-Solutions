// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Iterative solution
// const linkedListValues = (head) => {
//   let current = head;
//   const result = [];

//   while (current !== null) {
//     result.push(current.val);
//     current = current.next;
//   }

//   return result;
// };

// Recursive solution
const linkedListValues = (head) => {
  const values = [];
  fillValues(head, values);
  return values;
};

const fillValues = (head, values) => {
  // Base case
  if (head === null) return;
  values.push(head.val);
  fillValues(head.next, values);
};

module.exports = {
  linkedListValues,
};
