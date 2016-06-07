'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.primitives = exports.canvas = undefined;

var _canvas = require('./canvas');

var canvas = _interopRequireWildcard(_canvas);

var _primitives = require('./primitives');

var primitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var contextify = function contextify(context) {
  return function (options) {
    var fn = primitives[key];
    return fn(context, options);
  };
};

var factory = function factory(context) {
  var draw = Object.keys(primitives).reduce(function (memo, key) {
    memo[key] = contextify(context);
    return memo;
  }, {});

  var canvasy = Object.keys(primitives).reduce(function (memo, key) {
    memo[key] = contextify(context);;
  }, {});

  return { draw: draw, canvasy: canvasy };
};

exports.canvas = canvas;
exports.primitives = primitives;