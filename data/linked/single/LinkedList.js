import LinkedListNode from './LinkedListNode.js';
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // 添加新节点
  append(element) {
    const newNode = new LinkedListNode(element);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.length++;
    return this;
  }

  // 插入节点
  insert(position, element) {
    if (position < 0 || position > this.length) {
      console.error('insert position 超出边界');
      return this;
    }
    const newNode = new LinkedListNode(element);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let idx = 0;
      let prev;
      let current = this.head;
      while (idx++ < position) { // 移动指针到 position
        prev = current;
        current = current.next;
      }
      newNode.next = current;
      prev.next = newNode;
    }

    this.length++;
    return this;
  }

  // 删除指定位置的节点
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      console.error('removeAt position 超出边界');
      return this;
    }

    if (position === 0) {
      this.head = this.head.next;
    } else {
      let idx = 0;
      let prev;
      let current = this.head;
      while (idx++ < position) { // 移动指针到 position
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.length--;
    return this;
  }

  // 删除指定值
  remove(element) {
    if (this.head.value === element) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    let idx = 0;
    let prev;
    let current = this.head;
    while (idx < this.length && current.value !== element) {
      prev = current;
      current = current.next;
      idx++;
    }
    if (idx >= this.length) { // 没找到该元素
      console.error('未找到该元素');
      prev.next = null;
      return this;
    }
    prev.next = current.next;
    this.length--;
    return this;
  }

  // 获取下标，未找到返回 -1
  indexOf(element) {
    let idx = 0;
    let current = this.head;
    while (idx < this.length && current.value !== element) {
      current = current.next;
      idx++;
    }
    if (idx >= this.length) { // 没找到该元素
      return -1;
    }
    return idx;
  }

  // 是否为空链表
  isEmpty() {
    return this.head === null;
  }

  size() {
    return this.length;
  }

  // 获取head
  getHead() {
    if (this.head) {
      return this.head.value;
    }
    return this.head;
  }

  toString() {
    const arr = this.toArray();
    return arr.toString();
  }

  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

export default LinkedList;
