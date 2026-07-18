class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (head) => {
  let current = head;
  const result = [];

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
};

module.exports = {
  linkedListValues,
};
