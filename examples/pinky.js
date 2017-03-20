(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Pinky"] = factory();
	else
		root["Pinky"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _primitives = __webpack_require__(2);

	var primitives = _interopRequireWildcard(_primitives);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * @param { Canvas } - canvas DOM object
	 * @param { Object } - options
	 */
	var factory = function factory(canvas, _ref) {
	    var width = _ref.width,
	        height = _ref.height,
	        ratio = _ref.ratio,
	        devicePixelRatio = _ref.devicePixelRatio;

	    var context = canvas.getContext('2d');
	    ratio = devicePixelRatio || ratio || 1;

	    canvas.width = width * ratio;
	    canvas.height = height * ratio;
	    canvas.style.width = width + 'px';
	    canvas.style.height = height + 'px';
	    context.scale(ratio, ratio);

	    return context;
	};

	/**
	 * @param { Context } - context
	 * @param { String } - key
	 */
	var contextify = function contextify(context, key) {
	    return function (options) {
	        var func = primitives[key];
	        return func(context, options);
	    };
	};

	/**
	 * @param { Canvas } - canvas DOM object
	 * @param { Object } - options
	 */
	var init = function init(canvas, options) {
	    var context = factory(canvas, options);

	    return Object.keys(primitives).reduce(function (memo, key) {
	        memo[key] = contextify(context, key);
	        return memo;
	    }, { canvas: canvas, context: context });
	};

	var Pinky = { init: init };

	exports.default = Pinky;

/***/ },
/* 2 */
/***/ function(module, exports) {

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
	        percentage = _ref2.percentage;

	    var radians = percentage ? percentage * TAU : TAU;

	    context.beginPath();
	    context.arc(x, y, r, 0, radians, false);

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
	        angle = _ref3.angle;

	    var diff = rx - ry;

	    x = x + diff / 2;
	    angle = angle || 0;

	    context.beginPath();
	    context.ellipse(x, y, rx, ry, angle, 0, TAU); //

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

/***/ }
/******/ ])
});
;