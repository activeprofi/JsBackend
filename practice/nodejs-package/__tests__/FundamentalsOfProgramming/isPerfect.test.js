import isPerfect from '../../src/FundamentalsOfProgramming/isPerfect';

test('isPerfect tests', () => {
  expect(isPerfect(1)).toBe(false);
  expect(isPerfect(15)).toBe(false);
  expect(isPerfect(6)).toBe(true);
  expect(isPerfect(28)).toBe(true);
  expect(isPerfect(496)).toBe(true);
  expect(isPerfect(8128)).toBe(true);
  expect(isPerfect(33550336)).toBe(true);
});
