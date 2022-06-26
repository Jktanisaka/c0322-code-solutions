/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const tail = list.next.next;
    list.next = tail;
  }
}
