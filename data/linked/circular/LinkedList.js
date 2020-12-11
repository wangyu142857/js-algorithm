// 循环链表
import LinkedListNode from './LinkedListNode.js';
class LinkedList {
  constructor() {
    this.head = null; // 头节点
    this.tail = null; // 尾节点
    this.length = 0;
  }

  // 添加新节点
  append(element) {
    const newNode = new LinkedListNode(element);

    if (!this.head) {
      this.head = this.tail = newNode;
      this.head.next = this.head; // 循环链表只有一个节点时，next指向自己
    } else {
      let current = this.head;
      while (current.next !== this.head) { // 尾节点指向头节点节点
        current = current.next;
      }
      newNode.next = this.head;
      current.next = this.tail = newNode;
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

    let current = this.head;
    if (position === 0) {
      // while (current.next !== this.head) { // 移动指针到 position
      //   current = current.next;
      // }
      // current.next = newNode; // 尾节点指向head
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = newNode;
    } else {
      let idx = 0;
      let prev;
      while (idx++ < position) { // 移动指针到 position
        prev = current;
        current = current.next;
      }
      newNode.next = current;
      prev.next = newNode;

      if (position === this.length) {
        this.tail = newNode;
      }
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
      this.tail.next = this.head;
    } else {
      let idx = 0;
      let prev;
      let current = this.head;
      while (idx++ < position) { // 移动指针到 position
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
      if (position === this.length) {
        this.tail = prev;
      }
    }
    this.length--;
    return this;
  }

  // 删除指定值
  remove(element) {
    if (this.head.value === element) {
      this.head = this.head.next;
      this.tail.next = this.head;
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
      return this;
    }
    prev.next = current.next;
    if (idx === this.length - 1) { // 尾节点
      this.tail = prev;
    }
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
    if (!current) { // 空链表
      return [];
    }
    arr.push(current.value);
    current = current.next;
    while (current !== this.head) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

export default LinkedList;
