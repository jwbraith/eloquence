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
}

let group = Group.from([10, 20]);
console.log(group.has(20));
console.log(group.has(39));
group.add(10);
group.delete(10);
console.log(group.has(10));