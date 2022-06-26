/* exported getTail */

function getTail(list) {
  let current = list.data;
  while (list !== null) {
    current = list.data;
    list = list.next;
  }
  return current;
}
