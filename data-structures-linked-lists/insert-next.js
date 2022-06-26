/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const nextValue = list.next;
  const insertedList = new LinkedList(value);
  list.next = insertedList;
  list.next.next = nextValue;
}
