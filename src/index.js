import * as primitives from './primitives';

const factory = function (canvas, { width, height, ratio }) {
  const context = canvas.getContext('2d');
  ratio = ratio || 1;

  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  context.scale(ratio, ratio);

  return context;
}

const contextify = function (context, key) {
  return (options) => {
    const fn = primitives[key];
    return fn(context, options);
  };
}

const init = function (canvas, options) {
  const context = factory(canvas, options);
  const methods = { canvas, context };

  return Object.keys(primitives).reduce((memo, key) => {
    memo[key] = contextify(context, key);
    return memo;
  }, methods);
}

export { init };
