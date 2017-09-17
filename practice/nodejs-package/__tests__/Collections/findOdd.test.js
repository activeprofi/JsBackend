import findOdd from '../../src/Collections/findOdd';

describe('findOdd', () => {
  test('findOdd', () => {
    const numbers = [1, 2, 4, 2, 4, 1, 5, 3, 3];

    expect(findOdd(numbers)).toEqual([5]);
    expect(findOdd([0, 0, 0, 0, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 4, 9])).toEqual([2, 9]);
    expect(findOdd([])).toEqual([]);
  });
});
