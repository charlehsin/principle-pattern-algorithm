// Violation: If we replace the parent class FriendList with the child class ImmutableFriendList, the codes will result in error.

class FriendList {
  constructor() {
    this.friends = ['Lisa my BFF'];
  }

  add(friend) {
    this.friends.push(friend);
  }

  getFriends() {
    return this.friends;
  }
}

class ImmutableFriendList extends FriendList {
  constructor() {
    super();
  }

  add(friend) {
    throw new Error('Cannot add friend to an immutable friend list.');
  }
}

let myFriendList = new FriendList();
myFriendList.add('David');
console.log(`Friend list: ${myFriendList.getFriends()}`)
// Replace parent class with child class will result in error.
myFriendList = new ImmutableFriendList();
myFriendList.add('David');
console.log(`Friend list: ${myFriendList.getFriends()}`)
