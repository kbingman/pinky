import test from 'ava';
import { context, canvas } from './helpers/mock-context';
import init from '../src/init';

test('it should set the height and width of the canvas', t => {
    const ctx = init(canvas, { width: 256, height: 256, ratio: 1 });
    t.true(canvas.width === 256);
    t.true(canvas.height === 256);
});

test('it should set the height and width of the canvas with no ratio', t => {
    const ctx = init(canvas, { width: 256, height: 256 });
    t.true(canvas.width === 256);
    t.true(canvas.height === 256);
});

test('it should set the height and width of the canvas based on the device ratio', t => {
    const ctx = init(canvas, { width: 256, height: 256, ratio: 2 });
    t.true(canvas.width === 512);
    t.true(canvas.height === 512);
});

test('it should set the height and width of the canvas styles on the device ratio', t => {
    const ctx = init(canvas, { width: 256, height: 256, ratio: 2 });
    t.true(canvas.style.width === '256px');
    t.true(canvas.style.height === '256px');
});

test('it should set the height and width of the canvas styles on the device ratio', t => {
    const ctx = init(canvas, { width: 256, height: 256, ratio: 1 });
    t.true(canvas.style.width === '256px');
    t.true(canvas.style.height === '256px');
});
