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
	  return function (options) {
	    var fn = primitives[key];
	    return fn(context, options);
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clear = clear;
	exports.circle = circle;
	exports.dot = dot;
	exports.ellipse = ellipse;
	exports.rectangle = rectangle;
	exports.text = text;
	exports.line = line;
	exports.quadraticCurve = quadraticCurve;
	var PI = Math.PI;
	var TAU = Math.PI * 2;

	function setup(context, _ref) {
	  var color = _ref.color;
	  var stroke = _ref.stroke;

	  context.strokeStyle = color || 'white';
	  context.lineWidth = stroke || 1;

	  return context;
	}

	function draw(context, _ref2) {
	  var fill = _ref2.fill;

	  context.stroke();
	  if (fill) {
	    context.fillStyle = fill;
	    context.fill();
	  }

	  return context;
	}

	/**
	 * Clear canvas
	 */
	function clear(context, _ref3) {
	  var width = _ref3.width;
	  var height = _ref3.height;

	  context.clearRect(0, 0, width, height);
	};

	function circle(context, _ref4) {
	  var x = _ref4.x;
	  var y = _ref4.y;
	  var r = _ref4.r;
	  var percentage = _ref4.percentage;
	  var color = _ref4.color;
	  var stroke = _ref4.stroke;
	  var fill = _ref4.fill;

	  var radians = percentage ? percentage * TAU : TAU;
	  context = setup(context, { color: color, stroke: stroke });

	  context.beginPath();
	  context.arc(x, y, r, 0, radians, false);

	  draw(context, { fill: fill });
	}

	function dot(context, _ref5) {
	  var x = _ref5.x;
	  var y = _ref5.y;
	  var r = _ref5.r;
	  var color = _ref5.color;

	  circle(context, { x: x, y: y, r: r, fill: color });
	}

	function ellipse(context, _ref6) {
	  var x = _ref6.x;
	  var y = _ref6.y;
	  var rx = _ref6.rx;
	  var ry = _ref6.ry;
	  var color = _ref6.color;
	  var angle = _ref6.angle;
	  var stroke = _ref6.stroke;
	  var fill = _ref6.fill;

	  var diff = rx - ry;

	  x = x + diff / 2;
	  angle = angle || 0;

	  context = setup(context, { color: color, stroke: stroke });
	  context.beginPath();
	  context.ellipse(x, y, rx, ry, angle, 0, 2 * Math.PI); //

	  draw(context, { fill: fill });
	}

	function rectangle(context, _ref7) {
	  var x = _ref7.x;
	  var y = _ref7.y;
	  var w = _ref7.w;
	  var h = _ref7.h;
	  var color = _ref7.color;
	  var stroke = _ref7.stroke;
	  var fill = _ref7.fill;

	  context = setup(context, { color: color, stroke: stroke });
	  context.beginPath();
	  context.rect(x, y, w, h);

	  draw(context, { fill: fill });
	}

	function text(context, _ref8) {
	  var x = _ref8.x;
	  var y = _ref8.y;
	  var text = _ref8.text;
	  var font = _ref8.font;
	  var fill = _ref8.fill;

	  context.fillStyle = fill || 'white';
	  context.font = '' + font;
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

	function line(context, _ref9) {
	  var x = _ref9.x;
	  var y = _ref9.y;
	  var x1 = _ref9.x1;
	  var y1 = _ref9.y1;
	  var color = _ref9.color;
	  var stroke = _ref9.stroke;

	  context = setup(context, { color: color, stroke: stroke });

	  context.beginPath();
	  context.moveTo(x, y);
	  context.lineTo(x1, y1);

	  draw(context);
	}

	function quadraticCurve(context, _ref10) {
	  var x = _ref10.x;
	  var y = _ref10.y;
	  var x1 = _ref10.x1;
	  var y1 = _ref10.y1;
	  var xc = _ref10.xc;
	  var yc = _ref10.yc;
	  var color = _ref10.color;
	  var stroke = _ref10.stroke;

	  context = setup(context, { color: color, stroke: stroke });

	  context.beginPath();
	  context.moveTo(x, y);
	  context.quadraticCurveTo(xc, yc, x1, y1);

	  draw(context);
	}

/***/ }
/******/ ])
});
;