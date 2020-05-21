// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const widths = [0]; // holds widths of each level where widths[0] is root level
  const nodeQueue = [root, null]; // null is a break between levels

  while (nodeQueue.length > 1) {
    const node = nodeQueue.shift(); // next item in queue

    // check if elem in queue is a node
    if (node) {
      widths[widths.length - 1]++;
      nodeQueue.push(...node.children); // adds all node's children after null in queue
    } else {
      nodeQueue.push(node); // move null to end of queue
      widths.push(0); // add a counter for the next level
    }
  }

  return widths;
}

module.exports = levelWidth;
