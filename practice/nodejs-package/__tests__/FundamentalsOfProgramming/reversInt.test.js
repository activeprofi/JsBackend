import reverseInt from '../../src/FundamentalsOfProgramming/reverseInt';

test('reverseInt tests', () => {
  expect(reverseInt(13)).toBe(31);
  expect(reverseInt(1253)).toBe(3521);
  expect(reverseInt(0)).toBe(0);
});
