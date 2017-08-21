import formatTime from '../src/formatTime';

test('formatTime tests', () => {
  expect(formatTime(60)).toBe('01:00');
  expect(formatTime(5)).toBe('00:05');
  expect(formatTime(15)).toBe('00:15');
  expect(formatTime(175)).toBe('02:55');
  expect(formatTime(67)).toBe('01:07');
});
