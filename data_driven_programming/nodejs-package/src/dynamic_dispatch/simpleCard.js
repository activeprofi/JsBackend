import { cons, car, cdr } from 'hexlet-pairs';
import { definer } from './generic';
import { attach } from '../tagged_data/type';

const defmethod = definer('SimpleCard');

const make = (name, damage) =>
  attach('SimpleCard', cons(name, damage));

defmethod('getName', card => car(card));
defmethod('damage', card => cdr(card));

export { make };
