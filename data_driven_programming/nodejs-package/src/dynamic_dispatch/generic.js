import { typeTag } from '../tagged_data/type';
import { cons, car, cdr } from 'hexlet-pairs';
import { l, reduce, cons as consList, head } from 'hexlet-pairs-data';

let table = l();

const getMethod = (self, methodName) => {
  const type = typeTag(self);
  const row = reduce((item, acc) => {
    const tag = car(item);
    const method = car(cdr(item));

    return tag === type && method === methodName
      ? consList(item, acc)
      : acc;
  }, l(), table);

  const methodBody = cdr(cdr(head(row)));
  return methodBody;
};

const definer = typeName =>
  (methodName, methodBody) =>
    table = consList(cons(typeName, cons(methodName, methodBody)), table);

export { getMethod, definer };
