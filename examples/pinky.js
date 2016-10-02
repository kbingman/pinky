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

	var _primitives = __webpack_require__(2);

	var primitives = _interopRequireWildcard(_primitives);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var factory = function factory(canvas, _ref) {
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
	};

	var contextify = function contextify(context, key) {
	  return function (options) {
	    var fn = primitives[key];
	    return fn(context, options);
	  };
	};

	var init = function init(canvas, options) {
	  var context = factory(canvas, options);
	  var methods = { canvas: canvas, context: context };

	  return Object.keys(primitives).reduce(function (memo, key) {
	    memo[key] = contextify(context, key);
	    return memo;
	  }, methods);
	};

	exports.init = init;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var PI = Math.PI;
	var TAU = Math.PI * 2;

	var setup = function setup(context, _ref) {
	    var color = _ref.color;
	    var stroke = _ref.stroke;

	    if (stroke !== null) {
	        context.strokeStyle = color || 'white';
	        context.lineWidth = stroke || 1;
	    }

	    return context;
	};

	var draw = function draw(context, options) {
	    var fill = options && options.fill;
	    context.stroke();

	    if (fill) {
	        context.fillStyle = fill;
	        context.fill();
	    }

	    return context;
	};

	/**
	 * Clear canvas
	 */
	var clear = function clear(context, _ref2) {
	    var width = _ref2.width;
	    var height = _ref2.height;

	    context.clearRect(0, 0, width, height);
	};

	/**
	 * Draw circle
	 */
	var circle = function circle(context, _ref3) {
	    var x = _ref3.x;
	    var y = _ref3.y;
	    var r = _ref3.r;
	    var percentage = _ref3.percentage;
	    var color = _ref3.color;
	    var stroke = _ref3.stroke;
	    var fill = _ref3.fill;
	    var rotate = _ref3.rotate;

	    var radians = percentage ? percentage * TAU : TAU;
	    context = setup(context, { color: color, stroke: stroke });

	    context.beginPath();
	    context.arc(x, y, r, 0, radians, false);

	    draw(context, { fill: fill });
	};

	/**
	 * Draw dot
	 */
	var dot = function dot(context, _ref4) {
	    var x = _ref4.x;
	    var y = _ref4.y;
	    var r = _ref4.r;
	    var color = _ref4.color;

	    circle(context, { x: x, y: y, r: r, fill: color, stroke: null });
	};

	/**
	 * Draw ellipse
	 */
	var ellipse = function ellipse(context, _ref5) {
	    var x = _ref5.x;
	    var y = _ref5.y;
	    var rx = _ref5.rx;
	    var ry = _ref5.ry;
	    var color = _ref5.color;
	    var angle = _ref5.angle;
	    var stroke = _ref5.stroke;
	    var fill = _ref5.fill;

	    var diff = rx - ry;

	    x = x + diff / 2;
	    angle = angle || 0;

	    context = setup(context, { color: color, stroke: stroke });
	    context.beginPath();
	    context.ellipse(x, y, rx, ry, angle, 0, 2 * Math.PI); //

	    draw(context, { fill: fill });
	};

	/**
	 * Draw rectangle
	 */
	var rectangle = function rectangle(context, _ref6) {
	    var x = _ref6.x;
	    var y = _ref6.y;
	    var w = _ref6.w;
	    var h = _ref6.h;
	    var color = _ref6.color;
	    var stroke = _ref6.stroke;
	    var fill = _ref6.fill;

	    context = setup(context, { color: color, stroke: stroke });
	    context.beginPath();
	    context.rect(x, y, w, h);

	    draw(context, { fill: fill });
	};

	/**
	 * Render text
	 */
	var text = function text(context, _ref7) {
	    var x = _ref7.x;
	    var y = _ref7.y;
	    var _text = _ref7.text;
	    var font = _ref7.font;
	    var fill = _ref7.fill;
	    var size = _ref7.size;
	    var weight = _ref7.weight;

	    font = font || 'Helvetica';
	    size = size || 16;
	    weight = weight || 100;

	    var settings = weight + ' ' + size + 'px ' + font;

	    context.fillStyle = fill || 'white';
	    context.font = settings;
	    context.fillText(_text, x, y);
	};

	/**
	 * Draw line
	 */
	var line = function line(context, _ref8) {
	    var x = _ref8.x;
	    var y = _ref8.y;
	    var x1 = _ref8.x1;
	    var y1 = _ref8.y1;
	    var color = _ref8.color;
	    var stroke = _ref8.stroke;

	    context = setup(context, { color: color, stroke: stroke });

	    context.beginPath();
	    context.moveTo(x, y);
	    context.lineTo(x1, y1);

	    draw(context);
	};

	var quadraticCurve = function quadraticCurve(context, _ref9) {
	    var x = _ref9.x;
	    var y = _ref9.y;
	    var x1 = _ref9.x1;
	    var y1 = _ref9.y1;
	    var xc = _ref9.xc;
	    var yc = _ref9.yc;
	    var color = _ref9.color;
	    var stroke = _ref9.stroke;

	    context = setup(context, { color: color, stroke: stroke });

	    context.beginPath();
	    context.moveTo(x, y);
	    context.quadraticCurveTo(xc, yc, x1, y1);

	    draw(context);
	};

	exports.clear = clear;
	exports.circle = circle;
	exports.ellipse = ellipse;
	exports.dot = dot;
	exports.rectangle = rectangle;
	exports.text = text;
	exports.line = line;
	exports.quadraticCurve = quadraticCurve;

/***/ }
/******/ ])
});
;