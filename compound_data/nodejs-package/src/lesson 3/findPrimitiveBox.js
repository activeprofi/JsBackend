import { cons, car, cdr, isPair, toString } from 'hexlet-pairs'; // eslint-disable-line

const findPrimitiveBox = (pair) => {
  if (
    !isPair(car(pair)) && !isPair(cdr(pair))
  ) {
    return pair;
  }

  return isPair(car(pair)) ? findPrimitiveBox(car(pair)) : findPrimitiveBox(cdr(pair));
};

export default findPrimitiveBox;

