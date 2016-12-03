import factory from './init';
import * as primitives from './primitives';

const contextify = function (context, key) {
  return (options) => {
    const fn = primitives[key];
    return fn(context, options);
  };
}

const init = function (canvas, options) {
  const context = factory(canvas, options);

  return Object.keys(primitives).reduce((memo, key) => {
    memo[key] = contextify(context, key);
    return memo;
  }, {});
}

export { init };
