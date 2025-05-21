/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var use_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-local-storage */ \"use-local-storage\");\n/* harmony import */ var use_local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_local_storage__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n // Import global styles\n\n\n\nfunction App({ Component, pageProps }) {\n    // Check if the system prefers dark mode\n    const defaultDark =  false && 0;\n    // State to store the theme (default is dark if preferred)\n    const [theme, setTheme] = use_local_storage__WEBPACK_IMPORTED_MODULE_3___default()(\"theme\", defaultDark ? \"dark\" : \"light\");\n    // State to ensure theme is applied before rendering\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // Ensure the theme is applied after mounting\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"App.useEffect\": ()=>{\n            setMounted(true);\n            document.documentElement.className = theme; // Set the theme class on <html>\n        }\n    }[\"App.useEffect\"], [\n        theme\n    ]);\n    // Toggle theme between light and dark\n    const toggleTheme = ()=>{\n        setTheme(theme === \"dark\" ? \"light\" : \"dark\");\n    };\n    // Avoid rendering until mounted to prevent hydration mismatch\n    if (!mounted) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\avata\\\\OneDrive\\\\Desktop\\\\My-Portfolio\\\\pages\\\\_app.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\avata\\\\OneDrive\\\\Desktop\\\\My-Portfolio\\\\pages\\\\_app.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: theme,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"bg-gray-800 text-white p-4 flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold\",\n                                children: \"My Portfolio\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\avata\\\\OneDrive\\\\Desktop\\\\My-Portfolio\\\\pages\\\\_app.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleTheme,\n                                className: \"bg-gray-700 text-white p-2 rounded\",\n                                children: theme === \"dark\" ? \"Light Mode\" : \"Dark Mode\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\avata\\\\OneDrive\\\\Desktop\\\\My-Portfolio\\\\pages\\\\_app.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\avata\\\\OneDrive\\\\Desktop\\\\My-Portfolio\\\\pages\\\\_app.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\avata\\\\OneDrive\\\\Desktop\\\\My-Portfolio\\\\pages\\\\_app.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\avata\\\\OneDrive\\\\Desktop\\\\My-Portfolio\\\\pages\\\\_app.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQixDQUFDLHVCQUF1QjtBQUNYO0FBQ0k7QUFDbkI7QUFFZCxTQUFTSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHdDQUF3QztJQUN4QyxNQUFNQyxjQUNKLE1BQTZCLElBQzdCQyxDQUF5RDtJQUUzRCwwREFBMEQ7SUFDMUQsTUFBTSxDQUFDRyxPQUFPQyxTQUFTLEdBQUdWLHdEQUFlQSxDQUFDLFNBQVNLLGNBQWMsU0FBUztJQUUxRSxvREFBb0Q7SUFDcEQsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDO0lBRXZDLDZDQUE2QztJQUM3Q0QsZ0RBQVNBO3lCQUFDO1lBQ1JjLFdBQVc7WUFDWEMsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLEdBQUdOLE9BQU8sZ0NBQWdDO1FBQzlFO3dCQUFHO1FBQUNBO0tBQU07SUFFVixzQ0FBc0M7SUFDdEMsTUFBTU8sY0FBYztRQUNsQk4sU0FBU0QsVUFBVSxTQUFTLFVBQVU7SUFDeEM7SUFFQSw4REFBOEQ7SUFDOUQsSUFBSSxDQUFDRSxTQUFTO1FBQ1osT0FBTztJQUNUO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDVixrREFBSUE7MEJBQ0gsNEVBQUNnQjtvQkFBS0MsTUFBSztvQkFBV0MsU0FBUTs7Ozs7Ozs7Ozs7MEJBR2hDLDhEQUFDQztnQkFBSUwsV0FBV047O2tDQUVkLDhEQUFDWTt3QkFBSU4sV0FBVTs7MENBQ2IsOERBQUNPO2dDQUFHUCxXQUFVOzBDQUFxQjs7Ozs7OzBDQUNuQyw4REFBQ1E7Z0NBQ0NDLFNBQVNSO2dDQUNURCxXQUFVOzBDQUVUTixVQUFVLFNBQVMsZUFBZTs7Ozs7Ozs7Ozs7O2tDQUt2Qyw4REFBQ047d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXZhdGFcXE9uZURyaXZlXFxEZXNrdG9wXFxNeS1Qb3J0Zm9saW9cXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiOyAvLyBJbXBvcnQgZ2xvYmFsIHN0eWxlc1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUxvY2FsU3RvcmFnZSBmcm9tIFwidXNlLWxvY2FsLXN0b3JhZ2VcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAvLyBDaGVjayBpZiB0aGUgc3lzdGVtIHByZWZlcnMgZGFyayBtb2RlXG4gIGNvbnN0IGRlZmF1bHREYXJrID1cbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXM7XG5cbiAgLy8gU3RhdGUgdG8gc3RvcmUgdGhlIHRoZW1lIChkZWZhdWx0IGlzIGRhcmsgaWYgcHJlZmVycmVkKVxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZUxvY2FsU3RvcmFnZShcInRoZW1lXCIsIGRlZmF1bHREYXJrID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIpO1xuXG4gIC8vIFN0YXRlIHRvIGVuc3VyZSB0aGVtZSBpcyBhcHBsaWVkIGJlZm9yZSByZW5kZXJpbmdcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEVuc3VyZSB0aGUgdGhlbWUgaXMgYXBwbGllZCBhZnRlciBtb3VudGluZ1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSA9IHRoZW1lOyAvLyBTZXQgdGhlIHRoZW1lIGNsYXNzIG9uIDxodG1sPlxuICB9LCBbdGhlbWVdKTtcblxuICAvLyBUb2dnbGUgdGhlbWUgYmV0d2VlbiBsaWdodCBhbmQgZGFya1xuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcbiAgICBzZXRUaGVtZSh0aGVtZSA9PT0gXCJkYXJrXCIgPyBcImxpZ2h0XCIgOiBcImRhcmtcIik7XG4gIH07XG5cbiAgLy8gQXZvaWQgcmVuZGVyaW5nIHVudGlsIG1vdW50ZWQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgaWYgKCFtb3VudGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoZW1lfT5cbiAgICAgICAgey8qIE5hdmJhciAqL31cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIHAtNCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+TXkgUG9ydGZvbGlvPC9oMT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVUaGVtZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNzAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGVtZSA9PT0gXCJkYXJrXCIgPyBcIkxpZ2h0IE1vZGVcIiA6IFwiRGFyayBNb2RlXCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIHsvKiBQYWdlIENvbnRlbnQgKi99XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTG9jYWxTdG9yYWdlIiwiSGVhZCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRlZmF1bHREYXJrIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZSIsInNldFRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTmFtZSIsInRvZ2dsZVRoZW1lIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiZGl2IiwibmF2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "use-local-storage":
/*!************************************!*\
  !*** external "use-local-storage" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("use-local-storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();