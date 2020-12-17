class Group {
  constructor() {
    this.members = [];
  }
  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }
  has(value) {
    return this.members.includes(value);
  }
  delete(value) {
    this.members = this.members.filter(v => v !== value);

  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return { done: true };
    } else {
      let result = { value: this.group.members[this.position], done: false };
      this.position++;
      return result;
    }
  }
}
for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);

}

let group = Group.from([10, 20]);
console.log(group.has(20));
console.log(group.has(39));
group.add(10);
group.delete(10);
console.log(group.has(10));