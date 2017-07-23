"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clear = clear;
exports.circle = circle;
exports.ellipse = ellipse;
exports.rectangle = rectangle;
exports.text = text;
exports.line = line;
exports.quadraticCurve = quadraticCurve;
var PI = Math.PI;

var TAU = Math.PI * 2;

/**
 * @private - Apply Options
 * @param { Context } - canvas context
 * @param { Object } - options
 */
function applyOptions(context) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(options).reduce(function (context, key) {
        context[key] = options[key];

        return context;
    }, context);
}

/**
 * @private - draw
 * @param { Context } - canvas context
 * @param { Object } - options
 */
function draw(context) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
function clear(context, _ref) {
    var width = _ref.width,
        height = _ref.height;

    context.clearRect(0, 0, width, height);
}

/**
 * Ellipse
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
function circle(context, _ref2, options) {
    var x = _ref2.x,
        y = _ref2.y,
        r = _ref2.r,
        percentage = _ref2.percentage,
        _ref2$start = _ref2.start,
        start = _ref2$start === undefined ? 0 : _ref2$start;

    var radians = percentage ? percentage * TAU : TAU;

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
function ellipse(context, _ref3, options) {
    var x = _ref3.x,
        y = _ref3.y,
        rx = _ref3.rx,
        ry = _ref3.ry,
        angle = _ref3.angle,
        _ref3$start = _ref3.start,
        start = _ref3$start === undefined ? 0 : _ref3$start,
        _ref3$radians = _ref3.radians,
        radians = _ref3$radians === undefined ? TAU : _ref3$radians;

    var diff = rx - ry;

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
function rectangle(context, _ref4, options) {
    var x = _ref4.x,
        y = _ref4.y,
        w = _ref4.w,
        h = _ref4.h;

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
function text(context, _ref5, options) {
    var x = _ref5.x,
        y = _ref5.y,
        text = _ref5.text;

    context = applyOptions(context, options);
    context.fillText(text, x, y);
}

/**
 * Draw Line
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
function line(context, _ref6, options) {
    var x = _ref6.x,
        y = _ref6.y,
        x1 = _ref6.x1,
        y1 = _ref6.y1;

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
function quadraticCurve(context, _ref7, options) {
    var x = _ref7.x,
        y = _ref7.y,
        x1 = _ref7.x1,
        y1 = _ref7.y1,
        xc = _ref7.xc,
        yc = _ref7.yc;

    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(xc, yc, x1, y1);

    draw(context, options);
}