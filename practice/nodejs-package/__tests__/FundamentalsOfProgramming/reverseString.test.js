import reverseString from '../../src/FundamentalsOfProgramming/reverseString';

test('reverseString tests', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('cat')).toBe('tac');
  expect(reverseString('')).toBe('');
});
