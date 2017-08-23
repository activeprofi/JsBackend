import isHappyNumber from '../src/isHappyNumber';

test('isHappyNumber tests', () => {
  expect(isHappyNumber(7)).toBe(true);
  expect(isHappyNumber(1)).toBe(true);
  expect(isHappyNumber(0)).toBe(false);
});
