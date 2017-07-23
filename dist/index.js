'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _init = require('./init');

var _init2 = _interopRequireDefault(_init);

var _primitives = require('./primitives');

var primitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contextify = function contextify(context, key) {
    return function (options, styles) {
        var fn = primitives[key];
        return fn(context, options, styles);
    };
};

var init = function init(canvas, options) {
    var context = (0, _init2.default)(canvas, options);

    return Object.keys(primitives).reduce(function (memo, key) {
        memo[key] = contextify(context, key);
        return memo;
    }, { canvas: canvas, context: context, options: options });
};

var Pinky = { init: init };

exports.default = Pinky;