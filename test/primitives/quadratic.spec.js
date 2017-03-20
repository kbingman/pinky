import test from 'ava';
import { context } from '../helpers/mock-context';
import { quadraticCurve } from '../../src/primitives';

test.beforeEach(t => {
    quadraticCurve(context,
        { x: 0, y: 0, x1: 100, y1: 100, xc: 50, yc: 50, },
        { lineWidth: 0.5, strokeStyle: 'black' }
    );
});

test('calls the beginPath method', (t) => {
    t.true(context.beginPath.called);
});

test('calls the stroke method', (t) => {
    t.true(context.stroke.called);
});

test('sets the color', t => {
    t.true(context.strokeStyle === 'black');
});

test('receives the start coordinates', t => {
    t.true(context.moveTo.calledWith(0, 0));
});

test('receives the end coordinates', t => {
    t.true(context.quadraticCurveTo.calledWith(50, 50, 100, 100));
});
