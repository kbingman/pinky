import test from 'ava';
import { context } from './helpers/mock-context';
import { createEllipse } from '../src/primitives';

test.beforeEach(() => {
  createEllipse(context, {x: 10, y: 10, radiusX: 2, radiusY: 2.5});
});

test('sets a specific color', (t) => {
  createEllipse(context, {x: 10, y: 10, radiusX: 2, radiusY: 2.5, color: 'lime' });
  t.deepEqual(context.strokeStyle, 'lime');
});

test('sets the default color to \"hsla(0, 100%, 100%, 0.3)\"', (t) => {
  t.deepEqual(context.strokeStyle, 'hsla(0, 100%, 100%, 0.3)');
});

test('calls the stroke method', (t) => {
  t.deepEqual(context.stroke.called, true);
});

test('calls the ellipse method with the default angle', (t) => {
  t.deepEqual(context.ellipse.calledWith(9.75, 10, 2, 2.5, 0), true);
});

test('calls the ellipse method with the default angle', (t) => {
  createEllipse(context, {x: 10, y: 10, radiusX: 2, radiusY: 2.5, angle: 10});
  t.deepEqual(context.ellipse.calledWith(9.75, 10, 2, 2.5, 10), true);
});