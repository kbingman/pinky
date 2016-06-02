import test from 'ava';
import { context, canvas } from './helpers/mock-context';
import { initCanvas, clearCanvas } from '../src/index';

test('it should set the height and width of the canvas', t => {
    const ctx = initCanvas(canvas, { width: 256, height: 256, ratio: 1 });
    t.true(canvas.width === 256);
    t.true(canvas.height === 256);
});

test('it should set the height and width of the canvas based on the device ratio', t => {
    const ctx = initCanvas(canvas, { width: 256, height: 256, ratio: 2 });
    t.true(canvas.width === 512);
    t.true(canvas.height === 512);
});

test('it should set the height and width of the canvas styles on the device ratio', t => {
    const ctx = initCanvas(canvas, { width: 256, height: 256, ratio: 2 });
    t.true(canvas.style.width === '256px');
    t.true(canvas.style.height === '256px');
});

test('it should set the height and width of the canvas styles on the device ratio', t => {
    const ctx = initCanvas(canvas, { width: 256, height: 256, ratio: 1 });
    t.true(canvas.style.width === '256px');
    t.true(canvas.style.height === '256px');
});

test('clear canvas', t => {
    const ctx = initCanvas(canvas, { width: 256, height: 256, ratio: 2 });
    clearCanvas(ctx, { width: 256, height: 256 });
    t.true(context.clearRect.calledWith(0, 0, 256, 256));
});