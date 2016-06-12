import test from 'ava';
import { context } from '../helpers/mock-context';
import { circle } from '../../src/primitives';

test.beforeEach(t => {
  circle(context, { x: 10, y: 10, r: 2 });
});

test('calls the beginPath method', (t) => {
  t.true(context.beginPath.called);
});

test('calls the stroke method', (t) => {
  t.true(context.stroke.called);
});

test('sets the default color', t => {
  t.true(context.strokeStyle === 'white');
});

test('receives the coordinates and radius', t => {
  t.true(context.arc.calledWith(10, 10, 2));
});
