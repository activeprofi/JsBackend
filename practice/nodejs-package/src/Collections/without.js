/**
 * Реализуйте и экспортируйте функцию по умолчанию, 
 * которая принимает на вход массив и элементы, 
 * которые должны отсутствовать в возвращаемом массиве.
 */

const without = (arr, ...elements) =>
  arr.filter(item => !elements.includes(item));

export default without;
