import { l, get, length, isEmpty, cons, reverse } from 'hexlet-pairs-data';

const zip = (list1, list2) => {
  const minLength = Math.min(length(list1), length(list2));

  if (isEmpty(list1) || isEmpty(list2)) return l();

  const iter = (index, acc) => {
    if (index === minLength) return reverse(acc);

    return iter(index + 1, cons(l(get(index, list1), get(index, list2)), acc));
  };

  return iter(0, l());
};

export default zip;

