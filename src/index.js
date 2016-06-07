import * as canvas from './canvas';
import * as primitives from './primitives';

const contextify = function (context) {
  return (options) => {
    let fn = primitives[key];
    return fn(context, options);
  };
}

const factory = function (context) {
  const draw = Object.keys(primitives).reduce((memo, key) => {
    memo[key] = contextify(context);
    return memo;
  }, {});

  const canvasy = Object.keys(primitives).reduce((memo, key) => {
    memo[key] = contextify(context);;
  }, {});

  return { draw, canvasy }
}

export { canvas, primitives };
