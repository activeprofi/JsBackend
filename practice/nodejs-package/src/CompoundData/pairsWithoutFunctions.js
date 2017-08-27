const powerOfDivider = (num, divider) => {
  if (num % divider !== 0) return 0;

  return 1 + powerOfDivider(num / divider, divider);
};

const cons = (x, y) => 2 ** x * 3 ** y;

const car = pair => powerOfDivider(pair, 2);

const cdr = pair => powerOfDivider(pair, 3);

export { cons, car, cdr };
