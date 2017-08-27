import { If, True, False } from '../../src/CompoundData/logicWithoutLogic';

test('Boolean', () => {
  expect(If(True)('foo')('bar')).toBe('foo');
  expect(If(False)('foo')('bar')).toBe('bar');
});
