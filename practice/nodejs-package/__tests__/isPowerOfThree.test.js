import isPowerOfThree from '../src/isPowerOfThree';

test('isPowerOfThree tests', () => {
  expect(isPowerOfThree(1)).toBe(true);
  expect(isPowerOfThree(2)).toBe(false);
  expect(isPowerOfThree(9)).toBe(true);
});
