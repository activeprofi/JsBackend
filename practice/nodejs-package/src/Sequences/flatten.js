import { l, cons, concat, isEmpty, isList, head, tail, reduce, toString, reverse } from 'hexlet-pairs-data';

const flatten = (tree) => {
  if (!isList(tree)) return tree;

  if (isEmpty(tree)) return l();

  if (!isList(head(tree))) {
    return concat(l(head(tree)), flatten(tail(tree)));
  }

  return concat(flatten(head(tree)), flatten(tail(tree)));

};

// const flatten = tree =>
//   reverse(reduce((el, acc) => {
//     const isItemList = isList(el);
//     const newAcc = isItemList ? concat(flatten(el), acc) : acc;

//     return isItemList ? newAcc : concat(l(el), newAcc);
//   }, l(), tree));

export default flatten;
