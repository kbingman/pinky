'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = init;
/**
 * Basic fullscreen canvas
 */
function init(canvas, _ref) {
    var width = _ref.width,
        height = _ref.height,
        ratio = _ref.ratio;

    var context = canvas.getContext('2d');
    ratio = ratio || 1;

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    context.scale(ratio, ratio);

    return context;
}