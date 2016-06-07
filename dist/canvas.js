'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
/**
 * Basic fullscreen canvas
 */
function init(canvas, _ref) {
  var width = _ref.width;
  var height = _ref.height;
  var ratio = _ref.ratio;

  var context = canvas.getContext('2d');

  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  context.scale(ratio, ratio);

  return context;
}