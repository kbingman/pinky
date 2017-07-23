import test from 'ava';
import { context } from '../helpers/mock-context';
import { ellipse } from '../../src/primitives';

const defualts = {
    options: { x: 10, y: 10, rx: 2, ry: 2.5 },
    styles: { strokeStyle: 'white' }
}

const drawElipse = (options = {}, styles = { strokeStyle: 'white' }) => {
    const { x = 10, y = 10, rx = 2, ry = 2.5 } = options;
    ellipse(context, { x, y, rx, ry }, styles);
};

test.afterEach(t => {
    context.stroke.reset();
});

test('sets a specific color', t => {
    ellipse(context, { x: 10, y: 10, rx: 2, ry: 2.5 }, { strokeStyle: 'lime' });
    t.true(context.strokeStyle === 'lime');
});

test('sets the color to \"white"', t => {
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

// test('calls the ellipse method with the default angle', t => {
//     drawElipse();
//     t.true(context.ellipse.calledWith(9.75, 10, 2, 2.5, 0));
// });
//
// test('calls the ellipse method with the default angle', t => {
//     ellipse(context, { x: 10, y: 10, rx: 2, ry: 2.5, angle: 10 });
//     t.true(context.ellipse.calledWith(9.75, 10, 2, 2.5, 10));
// });
