import * as primitives from './primitives';

/**
 * Basic fullscreen canvas
 */
export const init = (canvas, { width, height, ratio }) => {
    const context = canvas.getContext('2d');
    ratio = ratio || 1;

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    context.scale(ratio, ratio);

    return context;
};

export const contextify = (context, key) => {
    return (options, styles) => {
        const fn = primitives[key];
        return fn(context, options, styles);
    };
};

const Pinky = (canvas, options) => {
    const context = init(canvas, options);

    return Object.keys(primitives).reduce(
        (memo, key) => {
            memo[key] = contextify(context, key);
            return memo;
        },
        { canvas, context, options }
    );
};

export default Pinky;
