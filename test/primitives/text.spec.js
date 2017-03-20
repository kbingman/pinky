import test from 'ava';
import { context } from '../helpers/mock-context';
import { text } from '../../src/primitives';

test.beforeEach(t => {
    text(context,
        { x: 10, y: 10, text: 'Hello World!' },
        { font: '400 16px Roboto', fillStyle: 'lime' }
    );
});

test('sets the color', t => {
    t.true(context.fillStyle === 'lime');
});

test('sets the font settings', t => {
    t.true(context.font === '400 16px Roboto');
});

test('calls fillText with the correct params', t => {
    t.true(context.fillText.calledWith('Hello World!', 10, 10));
});
