import { l, head, tail, filter, cons, isEmpty } from 'hexlet-pairs-data';

const isEven = n => n % 2 === 0;

const isSameParity = (f, s) => {
  if (
    (isEven(f) && isEven(s)) ||
    (!isEven(f) && !isEven(s))
  ) {
    return true;
  }

  return false;
};

const sameParity = (list) => {
  if (isEmpty(list)) return l();

  const h = head(list);
  const t = tail(list);

  return cons(h, filter(el => isSameParity(h, el), t));
};

export default sameParity;
