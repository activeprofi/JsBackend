/*
 solution.js
 Реализуйте функции select, orderBy используя подход без мутации состояния.
*/

class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    const selectedCollection = this.collection.map(fn);
    return new Enumerable(selectedCollection);
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

    const slicedCollection = this.collection.slice();
    const sortedCollection = slicedCollection.sort(comparer);

    return new Enumerable(sortedCollection);
  }

  where(fn) {
    const filteredCollection = this.collection.filter(fn);
    return new Enumerable(filteredCollection);
  }

  toArray() {
    return this.collection;
  }
}


export default Enumerable;
