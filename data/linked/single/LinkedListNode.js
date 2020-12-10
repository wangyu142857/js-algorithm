class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    if (this.value !== null) {
      return this.value.toString;
    }
    return '';
  }
}

export default LinkedListNode;
