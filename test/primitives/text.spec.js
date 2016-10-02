import test from 'ava';
import { context } from '../helpers/mock-context';
import { text } from '../../src/primitives';

test.beforeEach(t => {
    text(context, { x: 10, y: 10, text: 'Hello World!' });
});

test('works', t => {
    t.true(true);
});

test('sets the default color', t => {
    t.true(context.fillStyle === 'white');
});

test('sets the default font settings', t => {
    t.true(context.font === '400 16px Helvetica');
});

test('calls fillText with the correct params', t => {
    t.true(context.fillText.calledWith('Hello World!', 10, 10));
});
