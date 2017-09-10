import { cons, car, cdr } from 'hexlet-pairs';
import { attach, content } from './type';

const make = (name, percent) => attach('PercentCard', cons(name, percent));

const getName = card => car(content(card));

const damage = (card, health) => {
  const percent = cdr(content(card));
  return Math.round(health * (percent / 100));
};

export { make, getName, damage };
