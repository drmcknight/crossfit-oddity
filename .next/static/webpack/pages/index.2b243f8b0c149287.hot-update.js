"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/heroSection.tsx":
/*!************************************!*\
  !*** ./components/heroSection.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeroSection\": function() { return /* binding */ HeroSection; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/mcknigd/repos/crossfitoddity.github.io/components/heroSection.tsx\",\n    _this = undefined;\n\n\n\nvar HeroImageSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n  displayName: \"heroSection__HeroImageSection\",\n  componentId: \"sc-cakv8x-0\"\n})([\"height:421px;margin:5px;flex-basis:100%;background-image:url('/images/oddity-gym.jpg');margin:0;\"]);\n_c = HeroImageSection;\nvar HeroHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span.withConfig({\n  displayName: \"heroSection__HeroHeading\",\n  componentId: \"sc-cakv8x-1\"\n})([\"color:white;\"]);\n_c2 = HeroHeading;\nvar HeroSubHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"heroSection__HeroSubHeading\",\n  componentId: \"sc-cakv8x-2\"\n})([\"width:800px;margin:250px auto;\"]);\n_c3 = HeroSubHeading;\nvar HeroSection = function HeroSection() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeroImageSection, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeroHeading, {\n      children: \"CrossFit Oddity\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeroSubHeading, {\n      children: \"Bigger. Faster. Stronger.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, _this);\n};\n_c4 = HeroSection;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"HeroImageSection\");\n$RefreshReg$(_c2, \"HeroHeading\");\n$RefreshReg$(_c3, \"HeroSubHeading\");\n$RefreshReg$(_c4, \"HeroSection\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm9TZWN0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUMsZ0JBQWdCLEdBQUdELDRFQUFIO0VBQUE7RUFBQTtBQUFBLHdHQUF0QjtLQUFNQztBQVFOLElBQU1FLFdBQVcsR0FBR0gseUVBQUg7RUFBQTtFQUFBO0FBQUEsb0JBQWpCO01BQU1HO0FBSU4sSUFBTUUsY0FBYyxHQUFHTCxzRUFBSDtFQUFBO0VBQUE7QUFBQSxzQ0FBcEI7TUFBTUs7QUFPQyxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0VBQzdCLG9CQUNJLDhEQUFDLGdCQUFEO0lBQUEsd0JBQ0ksOERBQUMsV0FBRDtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURKLGVBSUksOERBQUMsY0FBRDtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUpKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURKO0FBUUgsQ0FUTTtNQUFNQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlcm9TZWN0aW9uLnRzeD8xZGM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IEhlcm9JbWFnZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgICBoZWlnaHQ6IDQyMXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL29kZGl0eS1neW0uanBnJyk7XG4gICAgbWFyZ2luOiAwO1xuYDtcblxuY29uc3QgSGVyb0hlYWRpbmcgPSBzdHlsZWQuc3BhbmBcbiAgICBjb2xvcjogd2hpdGU7XG5gO1xuXG5jb25zdCBIZXJvU3ViSGVhZGluZyA9IHN0eWxlZC5wYFxuICAgIHdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDI1MHB4IGF1dG87XG5cbmA7XG5cblxuZXhwb3J0IGNvbnN0IEhlcm9TZWN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxIZXJvSW1hZ2VTZWN0aW9uPlxuICAgICAgICAgICAgPEhlcm9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIENyb3NzRml0IE9kZGl0eVxuICAgICAgICAgICAgPC9IZXJvSGVhZGluZz5cbiAgICAgICAgICAgIDxIZXJvU3ViSGVhZGluZz5CaWdnZXIuIEZhc3Rlci4gU3Ryb25nZXIuPC9IZXJvU3ViSGVhZGluZz5cbiAgICAgICAgPC9IZXJvSW1hZ2VTZWN0aW9uPlxuICAgICk7XG59Il0sIm5hbWVzIjpbInN0eWxlZCIsIkhlcm9JbWFnZVNlY3Rpb24iLCJzZWN0aW9uIiwiSGVyb0hlYWRpbmciLCJzcGFuIiwiSGVyb1N1YkhlYWRpbmciLCJwIiwiSGVyb1NlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/heroSection.tsx\n"));

/***/ })

});