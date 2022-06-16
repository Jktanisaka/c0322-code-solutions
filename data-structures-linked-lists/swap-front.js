/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const second = list.next;
    const tail = list.next.next;
    list.next = tail;
    second.next = list;
    return second;
  }
  return list;
}
