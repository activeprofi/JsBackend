import { l, head, tail, isEmpty, cons } from 'hexlet-pairs-data';

const take = (num, list) => {
  if (isEmpty(list)) return l();

  if (num === 0) return l();

  return cons(head(list), take(num - 1, tail(list)));
};

export default take;
