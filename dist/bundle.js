/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var toolList = document.querySelector(\".tool-list\");\n  fetch(\"./data/content.json\").then(function (response) {\n    if (!response.ok) {\n      throw new Error(\"Network response was not ok\");\n    }\n    return response.json();\n  }).then(function (data) {\n    data.forEach(function (tool) {\n      toolList.innerHTML += \"\\n                <li>\\n                    <h3>\".concat(tool.name, \"</h3>\\n                    <p>\").concat(tool.description, \"</p>\\n                </li>\\n            \");\n    });\n  })[\"catch\"](function (error) {\n    return console.error(\"Error:\", error);\n  });\n});\n\n//# sourceURL=webpack://build-tool-showcase/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;