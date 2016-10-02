import test from 'ava';
import { context } from '../helpers/mock-context';
import { rectangle } from '../../src/primitives';

test.beforeEach(t => {
    rectangle(context, { x: 10, y: 10, w: 20, h: 20 });
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

test('receives the rectangle coordinates', t => {
    t.true(context.rect.calledWith(10, 10, 20, 20));
});
