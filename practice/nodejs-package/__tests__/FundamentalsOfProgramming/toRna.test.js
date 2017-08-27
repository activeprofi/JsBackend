import toRna from '../../src/FundamentalsOfProgramming/toRna';

test('toRna tests', () => {
  expect(toRna('ACGTGGTCTTAA')).toBe('UGCACCAGAAUU');
  expect(toRna('ATGCATGGGATTTCC')).toBe('UACGUACCCUAAAGG');
  expect(toRna('')).toBe('');
});
