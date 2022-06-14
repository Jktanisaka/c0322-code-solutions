/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    const newValue = stack.pop();
    if (newValue > max) {
      max = newValue;
    }
  }
  return max;
}
