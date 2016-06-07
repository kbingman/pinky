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
	exports.primitives = exports.canvas = undefined;

	var _canvas = __webpack_require__(2);

	var canvas = _interopRequireWildcard(_canvas);

	var _primitives = __webpack_require__(3);

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

/***/ },
/* 2 */
/***/ function(module, exports) {

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

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clear = clear;
	exports.circle = circle;
	exports.dot = dot;
	exports.ellipse = ellipse;
	exports.crosshair = crosshair;
	exports.line = line;
	exports.quadraticCurve = quadraticCurve;
	var PI = Math.PI;
	var TAU = Math.PI * 2;

	/**
	 * Clear canvas
	 */
	function clear(context, _ref) {
	  var width = _ref.width;
	  var height = _ref.height;

	  context.clearRect(0, 0, width, height);
	};

	function circle(context, _ref2) {
	  var x = _ref2.x;
	  var y = _ref2.y;
	  var radius = _ref2.radius;
	  var color = _ref2.color;
	  var stroke = _ref2.stroke;
	  var fill = _ref2.fill;
	  var percentage = _ref2.percentage;

	  var radians = percentage ? percentage * TAU : TAU;
	  console.log(context);

	  context.beginPath();
	  context.lineWidth = stroke || 1;
	  context.strokeStyle = color || 'hsla(0, 100%, 100%, 0.7)';
	  // context.fillStyle = fill;
	  context.arc(x, y, radius, 0, radians, false);
	  context.stroke();
	}

	function dot(context, _ref3) {
	  var x = _ref3.x;
	  var y = _ref3.y;
	  var radius = _ref3.radius;
	  var color = _ref3.color;

	  circle(context, { pos: pos, radius: radius, fill: color });
	}

	function ellipse(context, _ref4) {
	  var x = _ref4.x;
	  var y = _ref4.y;
	  var radiusX = _ref4.radiusX;
	  var radiusY = _ref4.radiusY;
	  var color = _ref4.color;
	  var angle = _ref4.angle;
	  var stroke = _ref4.stroke;

	  var diff = radiusX - radiusY;

	  x = x + diff / 2;
	  angle = angle || 0;

	  context.beginPath();
	  context.strokeStyle = color || 'hsla(0, 100%, 100%, 0.3)';
	  context.lineWidth = stroke;
	  context.ellipse(x, y, radiusX, radiusY, angle, 0, 2 * Math.PI); //
	  context.stroke();
	}

	function crosshair(context, _ref5) {
	  var x = _ref5.x;
	  var y = _ref5.y;
	  var size = _ref5.size;
	  var color = _ref5.color;

	  var l = size ? size / 2 : 20;

	  context.beginPath();
	  context.strokeStyle = color || 'hsla(0, 100%, 100%, 0.3)';
	  context.moveTo(x - l, y);
	  context.lineTo(x + l, y);
	  context.moveTo(x, y - l);
	  context.lineTo(x, y + l);
	  context.stroke();
	}

	function line(context, _ref6) {
	  var x = _ref6.x;
	  var y = _ref6.y;
	  var x1 = _ref6.x1;
	  var y1 = _ref6.y1;
	  var color = _ref6.color;
	  var stroke = _ref6.stroke;

	  context.beginPath();
	  context.strokeStyle = color || 'hsla(0, 100%, 100%, 0.3)';
	  context.moveTo(x, y);
	  context.lineTo(x1, y1);
	  context.stroke();
	}

	function quadraticCurve(context, _ref7) {
	  var x = _ref7.x;
	  var y = _ref7.y;
	  var x1 = _ref7.x1;
	  var y1 = _ref7.y1;
	  var xc = _ref7.xc;
	  var yc = _ref7.yc;
	  var color = _ref7.color;

	  context.beginPath();
	  context.strokeStyle = color || 'hsla(0, 100%, 100%, 0.3)';
	  context.moveTo(x, y);
	  context.quadraticCurveTo(xc, yc, x1, y1);
	  context.stroke();
	}

/***/ }
/******/ ])
});
;