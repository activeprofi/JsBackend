/**
 * Реализуйте и экспортируйте функцию по умолчанию, которая находит пересечение двух массивов.
 */

const intersection = (arr1, arr2) =>
  arr1.reduce((acc, item) => {
    if (arr2.includes(item) && !acc.includes(item)) {
      acc.push(item);
      return acc;
    }

    return acc;
  }, []);

export default intersection;
