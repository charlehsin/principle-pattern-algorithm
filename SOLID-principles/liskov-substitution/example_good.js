class List {
  constructor(initialItems) {
    this.items = initialItems;
  }

  get() {
    return this.items;
  }
}

class WritableList extends List {
  constructor(initialItems) {
    super(initialItems);
  }

  add(item) {
    this.items.push(item);
  }
}

class ImmutableFriendList extends List {
  constructor(initialItems) {
    super(initialItems);
  }
}

class MutableFriendList extends WritableList {
  constructor(initialItems) {
    super(initialItems);
  }
}

let myImmutableFriendList = new List(['Lisa my BFF']);
console.log(`Immutable friend list: ${myImmutableFriendList.get()}`)
// Replace parent class with child class is fine.
myImmutableFriendList = new ImmutableFriendList(['Lisa my BFF']);
console.log(`Immutable friend list: ${myImmutableFriendList.get()}`)

let myMutableFriendList = new WritableList(['Lisa my BFF']);
myMutableFriendList.add('David');
console.log(`Mutable friend list: ${myMutableFriendList.get()}`)
// Replace parent class with child class is fine.
myMutableFriendList = new MutableFriendList(['Lisa my BFF']);
myMutableFriendList.add('David');
console.log(`Mutable Friend list: ${myMutableFriendList.get()}`)
