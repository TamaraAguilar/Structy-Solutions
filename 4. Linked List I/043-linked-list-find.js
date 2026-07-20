// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Iterative solution
// const linkedListFind = (head, target) => {
//   let current = head;
//   while (current !== null) {
//     if (current.val === target) return true;
//     current = current.next;
//   }

//   return false;
// };

// Iterative solution
// const linkedListFind = (head, target) => {
//   // Base cases
//   if (head === null) return false;
//   if (head.val === target) return true;

//   return linkedListFind(head.next, target);
// };

// Recursive solution
const getNodeValue = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;

  return getNodeValue(head.next, index - 1);
};

module.exports = {
  linkedListFind,
};
