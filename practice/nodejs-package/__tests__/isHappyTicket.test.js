import isHappyTicket from '../src/isHappyTicket';

test('isHappyTicket tests', () => {
  expect(isHappyTicket(385916)).toBe(true);
  expect(isHappyTicket(231002)).toBe(false);
  expect(isHappyTicket(128722)).toBe(true);
  expect(isHappyTicket('054702')).toBe(true);
});
