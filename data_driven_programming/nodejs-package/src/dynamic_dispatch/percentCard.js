import { cons, car, cdr } from 'hexlet-pairs';
import { definer } from './generic';
import { attach } from '../tagged_data/type';

const defmethod = definer('PercentCard');

const make = (name, percent) =>
  attach('PercentCard', cons(name, percent));

defmethod('getName', card => car(card));
defmethod('damage', (card, health) => health * (cdr(card) / 100));

export { make };
