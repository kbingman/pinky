const { PI } = Math;
const TAU = PI * 2;

/**
 * @private - Apply Options
 * @param { Context } - canvas context
 * @param { Object } - options
 */
const _applyOptions = (context, styles) => {
    return Object.keys(styles).reduce((context, key) => {
        context[key] = styles[key];

        return context;
    }, context);
};

/**
 * @private - draw
 * @param { Context } - canvas context
 * @param { Object } - options
 */
const _draw = (context, styles) => {
    context = _applyOptions(context, styles);

    if (context.lineWidth) {
        context.stroke();
    }
    context.fill();

    return context;
};

/**
 * Clear
 * @param { Context } - canvas context
 * @param { Object } - options
 */
export const clear = (context, { width, height }) => {
    context.clearRect(0, 0, width, height);
};

/**
 * Circle
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export const circle = (context, position, styles) => {
    const { x, y, r, percentage, start = 0 } = position;
    const radians = percentage ? percentage * TAU : TAU;

    context.beginPath();
    context.arc(x, y, r, start, radians, false);

    _draw(context, styles);
};

/**
 * Ellipse
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export const ellipse = (context, position, styles) => {
    const { x, y, rx, ry, angle = 0, start = 0, radians = TAU } = position;

    context.beginPath();
    context.ellipse(x, y, rx, ry, angle, start, radians); //

    _draw(context, styles);
};

/**
 * Rectangle
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export const rectangle = (context, { x, y, w, h }, styles) => {
    context.beginPath();
    context.rect(x, y, w, h);

    _draw(context, styles);
};

/**
 * Text
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export const text = (context, { x, y, text }, styles) => {
    context = _applyOptions(context, styles);
    context.fillText(text, x, y);
};

/**
 * Line
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export const line = (context, { x, y, x1, y1 }, styles) => {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x1, y1);

    _draw(context, styles);
};

/**
 * Quadratic Curve
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export const quadraticCurve = (context, { x, y, x1, y1, xc, yc }, options) => {
    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(xc, yc, x1, y1);

    _draw(context, options);
};
