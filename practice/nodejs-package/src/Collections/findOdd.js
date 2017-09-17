/*
Дан массив чисел. Каждое число в массие встречается четное количество раз, кроме одного.

Реализуйте и экспортируйте функцию по умолчанию, которая принимает массив чисел и возвращает число, который встречается нечетное количество раз.
*/

const findOdd = (arr) => {
  const oddItems = [];

  const mapOfItems = arr.reduce((acc, item) => {
    if (!acc.has(item)) {
      return acc.set(item, 1);
    }

    return acc.set(item, acc.get(item) + 1);
  }, new Map());

  mapOfItems.forEach((value, key) => {
    if (value % 2 !== 0) {
      oddItems.push(key);
    }
  });

  return oddItems;
};

export default findOdd;
