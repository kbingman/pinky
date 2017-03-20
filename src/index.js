import * as primitives from './primitives';

/**
 * @param { Canvas } - canvas DOM object
 * @param { Object } - options
 */
const factory = function (canvas, { width, height, ratio, devicePixelRatio }) {
    const context = canvas.getContext('2d');
    ratio = devicePixelRatio || ratio || 1;

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    context.scale(ratio, ratio);

    return context;
}

/**
 * @param { Context } - context
 * @param { String } - key
 */
const contextify = function (context, key) {
    return (options) => {
        const func = primitives[key];
        return func(context, options);
    };
}

/**
 * @param { Canvas } - canvas DOM object
 * @param { Object } - options
 */
export const init = function (canvas, options) {
    const context = factory(canvas, options);

    return Object.keys(primitives).reduce((memo, key) => {
        memo[key] = contextify(context, key);
        return memo;
    }, { canvas, context });
};
