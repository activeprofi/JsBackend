import { cons, car, cdr } from 'hexlet-pairs';
import { attach, content } from './type';

const make = (name, damage) => attach('SimpleCard', cons(name, damage));

const getName = card => car(content(card));

const damage = card => cdr(content(card));

export { make, getName, damage };
