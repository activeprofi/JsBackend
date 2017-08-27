import flip from '../src/firstCitizens';

test('flip', () => {
  expect(flip(Math.pow)(2, 4)).toBe(16);
  expect(flip((a, b) => a - b)(4, 5)).toBe(1);
});
