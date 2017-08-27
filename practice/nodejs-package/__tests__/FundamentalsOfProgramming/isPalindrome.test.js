import isPalindrome from '../../src/FundamentalsOfProgramming/isPalindrome';

test('isPalindrome tests', () => {
  expect(isPalindrome('w')).toBe(true);
  expect(isPalindrome('c')).toBe(true);
  expect(isPalindrome('cac')).toBe(true);
  expect(isPalindrome('radar')).toBe(true);
  expect(isPalindrome('meow')).toBe(false);
  expect(isPalindrome('hello')).toBe(false);
});
