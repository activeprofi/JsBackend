/*
Рассмотренный в уроке способ создания пар не является единственным возможным, 
даже если мы говорим только про реализацию на функциях.
Напишите и экспортируйте функции car и cdr основываясь на том, как реализована функция cons:

export const cons = (x, y) => (m) => m(x, y);
*/
export const cons = (x, y) => m => m(x, y);

export const car = pair => pair((a, b) => a);

export const cdr = pair => pair((a, b) => b);

export const toString = pair => `(${car(pair)}, ${cdr(pair)})`;
