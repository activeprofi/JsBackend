import { l, head, tail, reduce, has, cons, isEmpty, reverse } from 'hexlet-pairs-data';

const append = (list1, list2) => {
  if (isEmpty(list1)) return list2;

  return cons(head(list1), append(tail(list1), list2));
};

const union = (list1, list2) => {
  const list = append(list1, list2);

  const result = reduce((el, acc) => {
    if (!has(acc, el)) {
      return cons(el, acc);
    }

    return acc;
  },
  l(), list);

  return reverse(result);
};

export default union;
