/*
 solution.js
 Реализуйте ленивую версию Enumerable. Интерфейс включает в себя три метода: select, where, orderBy, toArray.

 Enumerable.js
*/

class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  built(operation) {
    const newOps = this.operations.slice();
    newOps.push(operation);

    return new Enumerable(this.collection, newOps);
  }

  select(fn) {
    return this.built(coll => coll.map(fn));
  }

  orderBy(fn, sortDirection = 'asc') {
    let operation;
    if (sortDirection === 'asc') {
      operation = coll => coll.sort((a, b) => fn(a) - fn(b));
    } else {
      operation = coll => coll.sort((a, b) => fn(b) - fn(a));
    }

    return this.built(operation);
  }

  where(fn) {
    return this.built(coll => coll.filter(fn));
  }

  toArray() {
    const coll = this.collection.slice();
    const array = this.operations.reduce((acc, op) => op(acc), coll);

    return array;
  }
}

export default Enumerable;
