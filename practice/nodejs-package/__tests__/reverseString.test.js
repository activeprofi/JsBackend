import reverseString from '../src/reverseString';

test('reverseString tests', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('cat')).toBe('tac');
  expect(reverseString('')).toBe('');
});
