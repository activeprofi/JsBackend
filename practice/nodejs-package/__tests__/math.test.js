import cube, { sum, sub, sqrt, pow, multi } from '../src/math';

test('math', () => {
  expect(cube(3)).toBe(27);
  expect(sum(1, 3)).toBe(4);
  expect(sub(1, 3)).toBe(-2);
  expect(sqrt(4)).toBe(2);
  expect(pow(4, 2)).toBe(16);
  expect(multi(4, 2)).toBe(8);
});
