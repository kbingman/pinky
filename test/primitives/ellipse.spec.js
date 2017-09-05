import test from 'ava';
import { context } from '../helpers/mock-context';
import { ellipse } from '../../src/primitives';

// const options = { x: 10, y: 10, rx: 2, ry: 2.5 };
const styles = { strokeStyle: 'white' };

const drawElipse = (options = {}, styles = { strokeStyle: 'white' }) => {
    const { x = 10, y = 10, rx = 2, ry = 2.5 } = options;
    ellipse(context, { x, y, rx, ry }, styles);
};

test.afterEach(() => {
    context.stroke.reset();
});

test('sets a specific color', t => {
    ellipse(context, { x: 10, y: 10, rx: 2, ry: 2.5 }, { strokeStyle: 'lime' });
    t.true(context.strokeStyle === 'lime');
});

test('sets the color to "white"', t => {
    drawElipse();
    t.true(context.strokeStyle === 'white');
});

test('calls the stroke method if a lineWidth is applied', t => {
    drawElipse({}, { lineWidth: 1, strokeStyle: 'lime' });
    t.true(context.stroke.called);
});

test('does not call the stroke method if a lineWidth is not applied', t => {
    drawElipse({}, { lineWidth: 0, strokeStyle: 'lime' });
    t.false(context.stroke.called);
});

test('calls the ellipse method with the default angle', t => {
    drawElipse();
    t.true(context.ellipse.calledWith(10, 10, 2, 2.5, 0));
});

test('calls the ellipse method with a custom angle', t => {
    const angle = Math.PI * 0.10;
    ellipse(context, { x: 10, y: 10, rx: 2, ry: 2.5, angle }, styles);
    t.true(context.ellipse.calledWith(10, 10, 2, 2.5, angle));
});

test('calls the ellipse method with a custom start', t => {
    const start = Math.PI * 0.10;
    ellipse(context, { x: 10, y: 10, rx: 2, ry: 2.5, start }, styles);
    t.true(context.ellipse.calledWith(10, 10, 2, 2.5, 0, start));
});

test('calls the ellipse method with a custom angle', t => {
    const start = Math.PI * 0.10;
    const radians = Math.PI;
    ellipse(context, { x: 10, y: 10, rx: 2, ry: 2.5, start, radians }, styles);
    t.true(context.ellipse.calledWith(10, 10, 2, 2.5, 0, start, radians));
});
