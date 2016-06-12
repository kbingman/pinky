import test from 'ava';
import { context } from '../helpers/mock-context';
import { clear } from '../../src/primitives';

test('clear canvas', t => {
  clear(context, { width: 256, height: 256 });
  t.true(context.clearRect.calledWith(0, 0, 256, 256));
});
