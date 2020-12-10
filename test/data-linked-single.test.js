import LinkedList from '../data/linked/single/LinkedList';
import { expect } from 'chai';

/**
 * append(element)
 * insert(position, element)
 * removeAt(position)
 * remove(element)
 * indexOf(element)
 * isEmpty()
 * size()
 * getHead()
 * toString()
 * toArray()
 */

const linked = new LinkedList();

describe('单链表的测试', () => {
  it('linked.append', () => {
    linked.append(5);
    expect(linked.toArray()).to.be.eql([5]);
    linked.append(23);
    expect(linked.toArray()).to.be.eql([5, 23]);
    linked.append(12);
    expect(linked.toArray()).to.be.eql([5, 23, 12]);
    linked.append(65);
    expect(linked.toArray()).to.be.eql([5, 23, 12, 65]);
    linked.append(88);
    expect(linked.toArray()).to.be.eql([5, 23, 12, 65, 88]);
  });
  it('linked.insert(position, element)', () => {
    linked.insert(1, 2);
    expect(linked.toArray()).to.be.eql([5, 2, 23, 12, 65, 88]);
    // 头插入
    linked.insert(0, 1);
    expect(linked.toArray()).to.be.eql([1, 5, 2, 23, 12, 65, 88]);
    // 尾插入
    linked.insert(7, 15);
    expect(linked.toArray()).to.be.eql([1, 5, 2, 23, 12, 65, 88, 15]);
    // 超出边界
    linked.insert(-1, 1);
    expect(linked.toArray()).to.be.eql([1, 5, 2, 23, 12, 65, 88, 15]);
    linked.insert(9, 1);
    expect(linked.toArray()).to.be.eql([1, 5, 2, 23, 12, 65, 88, 15]);
  });
  it('linked.removeAt(position)', () => {
    linked.removeAt(5);
    expect(linked.toArray()).to.be.eql([1, 5, 2, 23, 12, 88, 15]);
    // 超出边界
    linked.removeAt(7);
    expect(linked.toArray()).to.be.eql([1, 5, 2, 23, 12, 88, 15]);
  });
  it('linked.remove(element)', () => {
    linked.remove(1);
    expect(linked.toArray()).to.be.eql([5, 2, 23, 12, 88, 15]);
    linked.remove(15);
    expect(linked.toArray()).to.be.eql([5, 2, 23, 12, 88]);
    // 超出边界
    linked.remove(20);
    expect(linked.toArray()).to.be.eql([5, 2, 23, 12, 88]);
  });
  it('linked.indexOf(2)', () => {
    expect(linked.indexOf(2)).to.be.equal(1);
  });
  it('linked.isEmpty()', () => {
    expect(linked.isEmpty()).to.be.equal(false);
  });
  it('linked.size()', () => {
    expect(linked.size()).to.be.equal(5);
  });
  it('linked.getHead()', () => {
    expect(linked.getHead()).to.be.equal(5);
  });
  it('linked.toString()', () => {
    expect(linked.toString()).to.be.equal('5,2,23,12,88');
  });
});
