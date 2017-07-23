const { PI } = Math;
const TAU = Math.PI * 2;

/**
 * @private - Apply Options
 * @param { Context } - canvas context
 * @param { Object } - options
 */
function applyOptions(context, options = {}) {
    return Object.keys(options).reduce((context, key) => {
        context[key] = options[key];

        return context;
    }, context);
}

/**
 * @private - draw
 * @param { Context } - canvas context
 * @param { Object } - options
 */
function draw(context, options = {}) {
    context = applyOptions(context, options);

    if (options.lineWidth) {
        context.stroke();
    }
    context.fill();

    return context;
}

/**
 * Clear
 * @param { Context } - canvas context
 * @param { Object } - options
 */
export function clear(context, { width, height }) {
    context.clearRect(0, 0, width, height);
}

/**
 * Ellipse
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export function circle(context, { x, y, r, percentage, start = 0 }, options) {
    const radians = percentage ? percentage * TAU : TAU;

    context.beginPath();
    context.arc(x, y, r, start, radians, false);

    draw(context, options);
}

/**
 * Ellipse
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export function ellipse(context, { x, y, rx, ry, angle, start = 0, radians = TAU }, options) {
    const diff = rx - ry;

    // x = x + (diff / 2);
    angle = angle || 0;

    context.beginPath();
    context.ellipse(x, y, rx, ry, angle, start, radians); //

    draw(context, options);
}

/**
 * Text
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export function rectangle(context, { x, y, w, h }, options) {
    context.beginPath();
    context.rect(x, y, w, h);

    draw(context, options);
}

/**
 * Text
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export function text(context, { x, y, text }, options) {
    context = applyOptions(context, options);
    context.fillText(text, x, y);
}

/**
 * Draw Line
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export function line(context, { x, y, x1, y1 }, options) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x1, y1);

    draw(context, options);
}

/**
 * Draw Quadratic Curve
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
export function quadraticCurve(context, { x, y, x1, y1, xc, yc }, options) {
    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(xc, yc, x1, y1);

    draw(context, options);
}
