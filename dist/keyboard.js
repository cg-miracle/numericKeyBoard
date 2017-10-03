(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Keyboard"] = factory();
	else
		root["Keyboard"] = factory();
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
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\n\nvar _keyboard = __webpack_require__(1);\n\nvar _keyboard2 = _interopRequireDefault(_keyboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log(_keyboard2.default);\n\nexports.default = _keyboard2.default;\nmodule.exports = exports['default'];\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz8zNDc5Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O0FBQ0FBLFFBQVFDLEdBQVIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLZXlib2FyZCBmcm9tICcuL2tiL2tleWJvYXJkJ1xuY29uc29sZS5sb2coIEtleWJvYXJkIClcblxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nexports.__esModule = true;\nvar a = console.log('hello');\nconsole.log(22222);\nexports.default = a;\nmodule.exports = exports['default'];\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMva2Iva2V5Ym9hcmQuanM/OGVhOCJdLCJuYW1lcyI6WyJhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBSUEsSUFBSUMsUUFBUUMsR0FBUixDQUFhLE9BQWIsQ0FBUjtBQUNBRCxRQUFRQyxHQUFSLENBQVksS0FBWjtrQkFDZUYsQyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGEgPSBjb25zb2xlLmxvZyggJ2hlbGxvJyApXG5jb25zb2xlLmxvZygyMjIyMilcbmV4cG9ydCBkZWZhdWx0IGFcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva2Iva2V5Ym9hcmQuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ])
});
;