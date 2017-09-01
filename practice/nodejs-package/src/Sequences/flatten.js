import { l, head, tail, isEmpty, isList, cons } from 'hexlet-pairs-data';

const append = (list1, list2) => {
  if (isEmpty(list1)) return list2;

  return cons(head(list1), append(tail(list1), list2));
};

const flatten = (tree) => {
  if (!isList(tree)) return tree;

  if (isEmpty(tree)) return l();

  if (!isList(head(tree))) {
    return append(l(head(tree)), flatten(tail(tree)));
  }

  return append(flatten(head(tree)), flatten(tail(tree)));

};

export default flatten;
