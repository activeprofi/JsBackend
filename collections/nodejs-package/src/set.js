/* 
 solution.js
 Реализуйте и экспортируйте функцию по-умолчанию, которая принимает на вход два множества и возвращает множество,
 составленное из таких элементов, которые есть в первом множестве, но нет во втором.

 difference(new Set([2, 1]), new Set([2, 3]));
 → [1]

 solutions.js
*/

const difference = (s1, s2) => {
  const diff = new Set();

  s1.forEach((elem) => {
    if (!s2.has(elem)) {
      diff.add(elem);
    }
  });

  return diff;
};

export default difference;
