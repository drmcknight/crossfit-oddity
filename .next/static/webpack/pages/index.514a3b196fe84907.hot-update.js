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

/***/ "./components/locationSection.tsx":
/*!****************************************!*\
  !*** ./components/locationSection.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LocationSection\": function() { return /* binding */ LocationSection; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/mcknigd/repos/crossfitoddity.github.io/components/locationSection.tsx\",\n    _this = undefined;\n\n\n\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n  displayName: \"locationSection__Item\",\n  componentId: \"sc-1i5cnyo-0\"\n})([\"width:450px;max-height:250px;background-color:red;margin:0;flex-grow:1;background-image:url('/images/oddity-location.png');\"]);\n_c = Item;\nvar ItemHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2.withConfig({\n  displayName: \"locationSection__ItemHeader\",\n  componentId: \"sc-1i5cnyo-1\"\n})([\"font-family:Oswald;text-align:center;\"]);\nvar ItemDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"locationSection__ItemDescription\",\n  componentId: \"sc-1i5cnyo-2\"\n})([\"padding:15px;\"]);\nvar HeroImageSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n  displayName: \"locationSection__HeroImageSection\",\n  componentId: \"sc-1i5cnyo-3\"\n})([\"flex-basis:100%;margin:0;\"]);\nvar Address = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"locationSection__Address\",\n  componentId: \"sc-1i5cnyo-4\"\n})([\"background-color:rgba(0,0,0,0.4);width:100%;height:100%;color:white;\"]);\n_c2 = Address;\nvar LocationSection = function LocationSection() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Address, {\n      children: \"102 Research Blvd, Madison, AL 35758\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, _this);\n};\n_c3 = LocationSection;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Item\");\n$RefreshReg$(_c2, \"Address\");\n$RefreshReg$(_c3, \"LocationSection\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvY2F0aW9uU2VjdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLElBQUksR0FBR0QsNEVBQUg7RUFBQTtFQUFBO0FBQUEsbUlBQVY7S0FBTUM7QUFTTixJQUFNRSxVQUFVLEdBQUdILHVFQUFIO0VBQUE7RUFBQTtBQUFBLDZDQUFoQjtBQUtBLElBQU1LLGVBQWUsR0FBR0wsc0VBQUg7RUFBQTtFQUFBO0FBQUEscUJBQXJCO0FBSUEsSUFBTU8sZ0JBQWdCLEdBQUdQLDRFQUFIO0VBQUE7RUFBQTtBQUFBLGlDQUF0QjtBQUtBLElBQU1RLE9BQU8sR0FBR1Isd0VBQUg7RUFBQTtFQUFBO0FBQUEsNEVBQWI7TUFBTVE7QUFPQyxJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07RUFDakMsb0JBQ0ksOERBQUMsSUFBRDtJQUFBLHVCQUNJLDhEQUFDLE9BQUQ7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFESjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREo7QUFLSCxDQU5NO01BQU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbG9jYXRpb25TZWN0aW9uLnRzeD8wNDdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuc2VjdGlvbmBcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIG1hcmdpbjogMDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL29kZGl0eS1sb2NhdGlvbi5wbmcnKTtcbmA7XG5cbmNvbnN0IEl0ZW1IZWFkZXIgPSBzdHlsZWQuaDJgXG4gICAgZm9udC1mYW1pbHk6IE9zd2FsZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBJdGVtRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgICBwYWRkaW5nOiAxNXB4O1xuYDtcblxuY29uc3QgSGVyb0ltYWdlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuYDtcblxuY29uc3QgQWRkcmVzcyA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuYDtcblxuZXhwb3J0IGNvbnN0IExvY2F0aW9uU2VjdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SXRlbT5cbiAgICAgICAgICAgIDxBZGRyZXNzPjEwMiBSZXNlYXJjaCBCbHZkLCBNYWRpc29uLCBBTCAzNTc1ODwvQWRkcmVzcz5cbiAgICAgICAgPC9JdGVtPlxuICAgICk7XG59Il0sIm5hbWVzIjpbInN0eWxlZCIsIkl0ZW0iLCJzZWN0aW9uIiwiSXRlbUhlYWRlciIsImgyIiwiSXRlbURlc2NyaXB0aW9uIiwicCIsIkhlcm9JbWFnZVNlY3Rpb24iLCJBZGRyZXNzIiwiZGl2IiwiTG9jYXRpb25TZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/locationSection.tsx\n"));

/***/ })

});