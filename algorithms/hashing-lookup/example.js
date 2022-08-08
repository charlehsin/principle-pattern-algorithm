class HashTable {
  constructor() {
    this.tableSeparateChaining = [];
    this.tableLinearProbing = [];
  }

  getKeyDataPair = (key, data) => {
    return [key, data];
  };

  getKeyFromKeyDataPair = (pair) => {
    return pair[0];
  };

  getDataFromKeyDataPair = (pair) => {
    return pair[1];
  };

  // The sample hashing algorithm.
  // We use a modular hashing.
  hashing = (key) => {
    const divisor = 89;
    let totalCharCodeSum = 0;
    for (let i = 0; i < key.length; i++) {
      totalCharCodeSum += key.charCodeAt(i);
    }

    return totalCharCodeSum % divisor;
  };

  addSeparateChaining = (key, data) => {
    const hash = this.hashing(key);

    if (this.tableSeparateChaining[hash] === undefined) {
      // First time: create the chain for this hash.
      this.tableSeparateChaining[hash] = [];
    }

    // Add the key-data pair to the chain.
    this.tableSeparateChaining[hash].push(this.getKeyDataPair(key, data));
  };

  getSeparateChaining = (key) => {
    const hash = this.hashing(key);

    if (this.tableSeparateChaining[hash] === undefined) {
      return undefined;
    }

    // Get the chain for this hash.
    const chainArray = this.tableSeparateChaining[hash];
    // Loop through the key-data pair in this chain.
    for (let i = 0; i < chainArray.length; i++) {
      const pairKeyData = chainArray[i];
      if (this.getKeyFromKeyDataPair(pairKeyData) === key) {
        // Got a hit. Return the value.
        return this.getDataFromKeyDataPair(pairKeyData);
      }
    }

    return undefined;
  };

  addLinearProbing = (key, data) => {
    let hash = this.hashing(key);

    if (this.tableLinearProbing[hash] === undefined) {
      // Not used yet. Use it directly.
      this.tableLinearProbing[hash] = this.getKeyDataPair(key, data);
      return;
    }

    // The ideal slot for this hash is already used.
    // Search for the next available slot.
    while (this.tableLinearProbing[hash] !== undefined) {
      hash++;
    }

    // Found the available slot. Use it.
    this.tableLinearProbing[hash] = this.getKeyDataPair(key, data);
  };

  getLinearProbing = (key) => {
    const hash = this.hashing(key);

    // Starting from the ideal slot for this hash, find the slot with matching key.
    while (this.tableLinearProbing[hash] !== undefined) {
      const pairKeyData = this.tableLinearProbing[hash];
      if (this.getKeyFromKeyDataPair(pairKeyData) === key) {
        // Got a hit. Return the value.
        return this.getDataFromKeyDataPair(pairKeyData);
      }
      hash++;
    }

    return undefined;
  };
}


const myHashTable = new HashTable();
console.log('Separate chaining....');
myHashTable.addSeparateChaining('William Smith', { 'name': 'William Smith', 'age': 50 });
myHashTable.addSeparateChaining('David Johnson', { 'name': 'David Johnson', 'age': 40 });
myHashTable.addSeparateChaining('Charles Luke', { 'name': 'Charles Luke', 'age': 60 });
myHashTable.addSeparateChaining('Advid Johnson', { 'name': 'Advid Johnson', 'age': 41 });
let dataDavid = myHashTable.getSeparateChaining('David Johnson');
console.log(`David's name: ${dataDavid.name}`);
console.log(`David's age: ${dataDavid.age}`);
console.log('Linear probing....');
myHashTable.addLinearProbing('William Smith', { 'name': 'William Smith', 'age': 50 });
myHashTable.addLinearProbing('David Johnson', { 'name': 'David Johnson', 'age': 40 });
myHashTable.addLinearProbing('Charles Luke', { 'name': 'Charles Luke', 'age': 60 });
myHashTable.addLinearProbing('Advid Johnson', { 'name': 'Advid Johnson', 'age': 41 });
dataDavid = myHashTable.getLinearProbing('David Johnson');
console.log(`David's name: ${dataDavid.name}`);
console.log(`David's age: ${dataDavid.age}`);
