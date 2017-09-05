import test from 'ava';
import sinon from 'sinon';

import { context, canvas } from './helpers/mock-context';
import init from '../src/';

test('sets the height and width of the canvas', t => {
    const ctx = init(canvas, { width: 256, height: 256, ratio: 1 });
    t.true(canvas.width === 256);
    t.true(canvas.height === 256);
});

test('sets the height and width of the canvas with no ratio', t => {
    const ctx = init(canvas, { width: 256, height: 256 });
    t.true(canvas.width === 256);
    t.true(canvas.height === 256);
});

test('sets the height and width of the canvas based on the device ratio', t => {
    const ctx = init(canvas, { width: 256, height: 256, ratio: 2 });
    t.true(canvas.width === 512);
    t.true(canvas.height === 512);
});

test('sets the height and width of the canvas styles on the device ratio', t => {
    const ctx = init(canvas, { width: 256, height: 256, ratio: 2 });
    t.true(canvas.style.width === '256px');
    t.true(canvas.style.height === '256px');
});

test('sets the height and width of the canvas styles on the device ratio', t => {
    const ctx = init(canvas, { width: 256, height: 256, ratio: 1 });
    t.true(canvas.style.width === '256px');
    t.true(canvas.style.height === '256px');
});

test('returns the adjusted width and height', t => {
    const ctx = init(canvas, { width: 256, height: 256, ratio: 1 });
    t.true(ctx.width === 256);
    t.true(ctx.height === 256);
});

test('returns the adjusted width and height with a different pixel ratio', t => {
    const ctx = init(canvas, { width: 256, height: 256, ratio: 2 });

    t.true(ctx.width === 256);
    t.true(ctx.height === 256);
});

test('calls the assigned methods', t => {
    const ctx = init(canvas, { width: 256, height: 256, ratio: 2 });
    const styles = {};
    const options = {};
    ctx.circle(styles, options);

    t.true(context.arc.calledOnce);
});
