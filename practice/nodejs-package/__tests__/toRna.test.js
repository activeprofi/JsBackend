import toRna from '../src/toRna';

test('toRna tests', () => {
  expect(toRna('ACGTGGTCTTAA')).toBe('UGCACCAGAAUU');
  expect(toRna('ATGCATGGGATTTCC')).toBe('UACGUACCCUAAAGG');
  expect(toRna('')).toBe('');
});
