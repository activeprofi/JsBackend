import invertCase from '../../src/FundamentalsOfProgramming/invertCase';

test('invertCase tests', () => {
  expect(invertCase('Hello, World!')).toBe('hELLO, wORLD!');
  expect(invertCase('I loVe JS')).toBe('i LOvE js');
});
