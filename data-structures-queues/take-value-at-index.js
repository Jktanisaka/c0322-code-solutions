/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  for (let i = 0; i <= index; i++) {
    const current = queue.dequeue();
    if (i === index) {
      return current;
    }
    queue.enqueue(current);
  }
}
