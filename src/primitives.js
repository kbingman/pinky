const { PI } = Math;
const TAU = Math.PI * 2;

/**
 * @private - Apply Options
 * @param { Context } - canvas context
 * @param { Object } - options
 */
const applyOptions = (context, options = {}) => {
    return Object.keys(options).reduce((context, key) => {
        context[key] = options[key];

        return context;
    }, context);
};

/**
 * @private - draw
 * @param { Context } - canvas context
 * @param { Object } - options
 */
const draw = (context, options = {}) => {
    context = applyOptions(context, options);

    if (options.lineWidth) {
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
export const circle = (context, position, options) => {
    const { x, y, r, percentage, start = 0 } = position;
    const radians = percentage ? percentage * TAU : TAU;

    context.beginPath();
    context.arc(x, y, r, start, radians, false);

    draw(context, options);
};

/**
 * Ellipse
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export const ellipse = (context, position, options) => {
    const { x, y, rx, ry, angle = 0, start = 0, radians = TAU } = position;
    const diff = rx - ry;

    context.beginPath();
    context.ellipse(x, y, rx, ry, angle, start, radians); //

    draw(context, options);
};

/**
 * Rectangle
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export const rectangle = (context, { x, y, w, h }, options) => {
    context.beginPath();
    context.rect(x, y, w, h);

    draw(context, options);
};

/**
 * Text
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export const text = (context, { x, y, text }, options) => {
    context = applyOptions(context, options);
    context.fillText(text, x, y);
};

/**
 * Line
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export const line = (context, { x, y, x1, y1 }, options) => {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x1, y1);

    draw(context, options);
};

/**
 * Draw Quadratic Curve
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export const quadraticCurve = (context, { x, y, x1, y1, xc, yc }, options) => {
    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(xc, yc, x1, y1);

    draw(context, options);
};
