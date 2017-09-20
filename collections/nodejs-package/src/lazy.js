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
    const order = sortDirection === 'asc' ? 1 : -1;
    const comparer = (a, b) => {
      const fnA = fn(a);
      const fnB = fn(b);

      if (fnA > fnB) return order;
      if (fnA < fnB) return -order;

      return 0;
    };

    return this.built(coll => coll.sort(comparer));
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
