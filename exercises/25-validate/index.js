// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // Base Case
  if (max && node.data > max) {
    return false;
  }
  if (min && node.data < min) {
    return false;
  }

  // Move left, adjust max
  if (node.left) {
    return validate(node.left, min, node.data);
  }

  // Move right, adjust min
  if (node.right) {
    return validate(node.right, node.data, max);
  }

  return true;
}

module.exports = validate;
