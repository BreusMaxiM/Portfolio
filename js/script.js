/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./src/js/modules/menu.js\");\n/* harmony import */ var _modules_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/progress */ \"./src/js/modules/progress.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n'use stricti';\r\n\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_progress__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://gulp-start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst menu = () => {\r\n    const hamburger = document.querySelector('.hamburger'),\r\n          menu = document.querySelector('.menu'),\r\n          closeElem = document.querySelector('.menu__close'),\r\n          whiteSpace = document.querySelector('.menu__overlay');\r\n    \r\n    hamburger.addEventListener('click', ()=>{\r\n        menu.classList.add('active');\r\n    })\r\n    closeElem.addEventListener('click', closeMenu);\r\n    whiteSpace.addEventListener('click', closeMenu)\r\n\r\n    function closeMenu(){\r\n        menu.classList.remove('active');\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/menu.js?");

/***/ }),

/***/ "./src/js/modules/progress.js":
/*!************************************!*\
  !*** ./src/js/modules/progress.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst progress = () => {\r\n    const protsent = document.querySelectorAll('.skills__power_progres'),\r\n          bar = document.querySelectorAll('.skills__power_bar');\r\n\r\n        for(let i = 0; i<(protsent.length); i++){\r\n            bar[i].style.width= (protsent[i].innerHTML);\r\n        }\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (progress);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/progress.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;