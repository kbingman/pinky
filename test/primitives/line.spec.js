import test from 'ava';
import { context } from '../helpers/mock-context';
import { line } from '../../src/primitives';

test.beforeEach(t => {
    line(context, { x: 10, y: 10, x1: 20, y1: 20 });
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

test('receives the start coordinates', t => {
    t.true(context.moveTo.calledWith(10, 10));
});

test('receives the end coordinates', t => {
  t.true(context.lineTo.calledWith(20, 20));
});
