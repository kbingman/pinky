/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Pinky = __webpack_require__(1);

window.Pinky = Pinky.default;
module.exports = Pinky;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _primitives = __webpack_require__(2);

var primitives = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Basic fullscreen canvas
 */
var init = function init(canvas, _ref) {
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
};

var contextify = function contextify(context, key) {
    return function (options, styles) {
        var fn = primitives[key];
        return fn(context, options, styles);
    };
};

var Pinky = function Pinky(canvas, options) {
    var context = init(canvas, options);

    return Object.keys(primitives).reduce(function (memo, key) {
        memo[key] = contextify(context, key);
        return memo;
    }, { canvas: canvas, context: context, options: options });
};

exports.default = Pinky;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var PI = Math.PI;

var TAU = Math.PI * 2;

/**
 * @private - Apply Options
 * @param { Context } - canvas context
 * @param { Object } - options
 */
var applyOptions = function applyOptions(context) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(options).reduce(function (context, key) {
        context[key] = options[key];

        return context;
    }, context);
};

/**
 * @private - draw
 * @param { Context } - canvas context
 * @param { Object } - options
 */
var draw = function draw(context) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
var clear = exports.clear = function clear(context, _ref) {
    var width = _ref.width,
        height = _ref.height;

    context.clearRect(0, 0, width, height);
};

/**
 * Circle
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
var circle = exports.circle = function circle(context, position, options) {
    var x = position.x,
        y = position.y,
        r = position.r,
        percentage = position.percentage,
        _position$start = position.start,
        start = _position$start === undefined ? 0 : _position$start;

    var radians = percentage ? percentage * TAU : TAU;

    console.log(x, y);
    console.log(options);

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
var ellipse = exports.ellipse = function ellipse(context, position, options) {
    var x = position.x,
        y = position.y,
        rx = position.rx,
        ry = position.ry,
        _position$angle = position.angle,
        angle = _position$angle === undefined ? 0 : _position$angle,
        _position$start2 = position.start,
        start = _position$start2 === undefined ? 0 : _position$start2,
        _position$radians = position.radians,
        radians = _position$radians === undefined ? TAU : _position$radians;

    var diff = rx - ry;

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
var rectangle = exports.rectangle = function rectangle(context, _ref2, options) {
    var x = _ref2.x,
        y = _ref2.y,
        w = _ref2.w,
        h = _ref2.h;

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
var text = exports.text = function text(context, _ref3, options) {
    var x = _ref3.x,
        y = _ref3.y,
        text = _ref3.text;

    context = applyOptions(context, options);
    context.fillText(text, x, y);
};

/**
 * Line
 * @param { Context } - canvas context
 * @param { Object } - options
 * @param { Object } - styles
 */
var line = exports.line = function line(context, _ref4, options) {
    var x = _ref4.x,
        y = _ref4.y,
        x1 = _ref4.x1,
        y1 = _ref4.y1;

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
var quadraticCurve = exports.quadraticCurve = function quadraticCurve(context, _ref5, options) {
    var x = _ref5.x,
        y = _ref5.y,
        x1 = _ref5.x1,
        y1 = _ref5.y1,
        xc = _ref5.xc,
        yc = _ref5.yc;

    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(xc, yc, x1, y1);

    draw(context, options);
};

/***/ })
/******/ ]);