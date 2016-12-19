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
	exports.init = undefined;

	var _init = __webpack_require__(2);

	var _init2 = _interopRequireDefault(_init);

	var _primitives = __webpack_require__(3);

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
	    }, {});
	};

	exports.init = init;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = init;
	/**
	 * Basic fullscreen canvas
	 */
	function init(canvas, _ref) {
	  var width = _ref.width;
	  var height = _ref.height;
	  var ratio = _ref.ratio;

	  var context = canvas.getContext('2d');
	  ratio = ratio || 1;

	  canvas.width = width * ratio;
	  canvas.height = height * ratio;
	  canvas.style.width = width + 'px';
	  canvas.style.height = height + 'px';
	  context.scale(ratio, ratio);

	  return context;
	}

/***/ },
/* 3 */
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

	/* function applyStyles (context, { strokeStyle, lineWidth }) {
	  context.strokeStyle = strokeStyle;
	  context.lineWidth = lineWidth;

	  return context;
	} */

	function draw(context, _ref) {
	    var fillStyle = _ref.fillStyle;
	    var strokeStyle = _ref.strokeStyle;
	    var lineWidth = _ref.lineWidth;

	    context.strokeStyle = strokeStyle;
	    context.lineWidth = lineWidth;
	    console.log(lineWidth);
	    context.fillStyle = fillStyle;
	    if (lineWidth) {
	        context.stroke();
	    }
	    context.fill();

	    return context;
	}

	/**
	 * Clear canvas
	 */
	function clear(context, _ref2) {
	    var width = _ref2.width;
	    var height = _ref2.height;

	    context.clearRect(0, 0, width, height);
	}

	function circle(context, _ref3) {
	    var x = _ref3.x;
	    var y = _ref3.y;
	    var r = _ref3.r;
	    var percentage = _ref3.percentage;
	    var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    var radians = percentage ? percentage * TAU : TAU;

	    context.beginPath();
	    context.arc(x, y, r, 0, radians, false);

	    draw(context, styles);
	}

	function ellipse(context, _ref4) {
	    var x = _ref4.x;
	    var y = _ref4.y;
	    var rx = _ref4.rx;
	    var ry = _ref4.ry;
	    var angle = _ref4.angle;
	    var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    var diff = rx - ry;

	    x = x + diff / 2;
	    angle = angle || 0;

	    context.beginPath();
	    context.ellipse(x, y, rx, ry, angle, 0, TAU); //

	    draw(context, styles);
	}

	function rectangle(context, _ref5) {
	    var x = _ref5.x;
	    var y = _ref5.y;
	    var w = _ref5.w;
	    var h = _ref5.h;
	    var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    context.beginPath();
	    context.rect(x, y, w, h);

	    draw(context, style);
	}

	function text(context, _ref6, _ref7) {
	    var x = _ref6.x;
	    var y = _ref6.y;
	    var text = _ref6.text;
	    var font = _ref7.font;
	    var fillStyle = _ref7.fillStyle;
	    var strokeStyle = _ref7.strokeStyle;

	    context.fillStyle = fillStyle;
	    context.font = font;
	    context.fillText(text, x, y);
	}

	// export function crosshair (context, { x, y, size, color }) {
	//   const l = size ? size / 2 : 20;
	//
	//   context.beginPath();
	//   context.strokeStyle = color || 'hsla(0, 100%, 100%, 0.3)';
	//   context.moveTo(x - l, y);
	//   context.lineTo(x + l, y);
	//   context.moveTo(x, y - l);
	//   context.lineTo(x, y + l);
	//   context.stroke();
	// }

	function line(context, _ref8) {
	    var x = _ref8.x;
	    var y = _ref8.y;
	    var x1 = _ref8.x1;
	    var y1 = _ref8.y1;
	    var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


	    context.beginPath();
	    context.moveTo(x, y);
	    context.lineTo(x1, y1);

	    draw(context, styles);
	}

	function quadraticCurve(context, _ref9, styles) {
	    var x = _ref9.x;
	    var y = _ref9.y;
	    var x1 = _ref9.x1;
	    var y1 = _ref9.y1;
	    var xc = _ref9.xc;
	    var yc = _ref9.yc;


	    context.beginPath();
	    context.moveTo(x, y);
	    context.quadraticCurveTo(xc, yc, x1, y1);

	    draw(context, styles);
	}

/***/ }
/******/ ])
});
;