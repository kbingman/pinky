import test from 'ava';
import { context } from '../helpers/mock-context';
import { circle } from '../../src/primitives';

const drawCircle = (options = {}, styles = { strokeStyle: 'white' }) => {
    const { x = 10, y = 10, r = 2 } = options;
    circle(context, { x, y, r }, styles);
};

test('calls the beginPath method', t => {
  drawCircle();
  t.true(context.beginPath.called);
});

test('calls the stroke method if a lineWidth is applied', t => {
  drawCircle({}, { lineWidth: 1, strokeStyle: 'lime' });
  t.true(context.stroke.called);
});

test('does not call the stroke method if a lineWidth is not applied', t => {
  drawCircle({}, { lineWidth: 0, strokeStyle: 'lime' });

  t.false(context.stroke.called);
});

test('sets the default color', t => {
  drawCircle();
  t.true(context.strokeStyle === 'white');
});

test('receives the coordinates and radius', t => {
  drawCircle();
  t.true(context.arc.calledWith(10, 10, 2));
});
