/**
 * Реализуйте и экспортируйте функцию по умолчанию, 
 * которая принимает на вход массив и число, которое задает размер чанка (куска). 
 * Функция должна вернуть массив, состоящий из чанков указанной размерности.
 */

const chunk = (arr, col) => {
  if (arr.length === 0) return [];

  return [arr.slice(0, col > arr.length ? arr.length : col)]
    .concat(chunk(arr.slice(col), col));
};

export default chunk;
