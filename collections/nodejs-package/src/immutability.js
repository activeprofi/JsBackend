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
    const slicedCollection = this.collection.slice();

    const sortedCollection = sortDirection === 'asc'
      ? slicedCollection.sort((a, b) => fn(a) - fn(b))
      : slicedCollection.sort((a, b) => fn(b) - fn(a));

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
