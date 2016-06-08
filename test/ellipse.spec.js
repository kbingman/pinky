import test from 'ava';
import { context } from './helpers/mock-context';
import { ellipse, clear } from '../src/primitives';

test.beforeEach(t => {
  ellipse(context, { x: 10, y: 10, rx: 2, ry: 2.5 });
});

test('sets a specific color', (t) => {
  ellipse(context, {x: 10, y: 10, rx: 2, ry: 2.5, color: 'lime' });
  t.true(context.strokeStyle === 'lime');
});

test('sets the default color to \"white"', (t) => {
  t.true(context.strokeStyle === 'white');
});

test('calls the stroke method', (t) => {
  t.true(context.stroke.called);
});

test('calls the ellipse method with the default angle', (t) => {
  t.true(context.ellipse.calledWith(9.75, 10, 2, 2.5, 0));
});

test('calls the ellipse method with the default angle', (t) => {
  ellipse(context, {x: 10, y: 10, rx: 2, ry: 2.5, angle: 10});
  t.true(context.ellipse.calledWith(9.75, 10, 2, 2.5, 10));
});

test('clear canvas', t => {
  clear(context, { width: 256, height: 256 });
  t.true(context.clearRect.calledWith(0, 0, 256, 256));
});
