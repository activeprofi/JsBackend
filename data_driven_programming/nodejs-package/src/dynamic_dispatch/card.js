import { getMethod } from './generic';
import { content } from '../tagged_data/type';

const getName = self =>
  getMethod(self, 'getName')(content(self));

const damage = (self, health) =>
  getMethod(self, 'damage')(content(self), health);

export { getName, damage };
