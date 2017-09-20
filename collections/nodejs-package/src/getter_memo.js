/*
 solution.js
 Реализуйте свойство length используя getter.
 Реализуйте мемоизацию в методе toArray. Используйте свойство memo для хранения результата вычислений.

 solution.js
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

  get length() {
    return this.toArray().length;
  }

  toArray() {
    const coll = this.collection.slice();
    const array = this.operations.reduce((acc, op) => op(acc), coll);

    if (!this.memo) {
      this.memo = array;
    }

    return this.memo;
  }
}

export default Enumerable;
