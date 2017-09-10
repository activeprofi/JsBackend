import { cons, car, cdr } from 'hexlet-pairs';

const attach = (tag, data) => cons(tag, data);

const typeTag = taggedData => car(taggedData);

const content = taggedData => cdr(taggedData);

export { attach, typeTag, content };
