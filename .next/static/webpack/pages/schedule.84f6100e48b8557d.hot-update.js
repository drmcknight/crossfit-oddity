"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/schedule",{

/***/ "./components/logo.tsx":
/*!*****************************!*\
  !*** ./components/logo.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Logo\": function() { return /* binding */ Logo; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/mcknigd/repos/crossfitoddity.github.io/components/logo.tsx\",\n    _this = undefined;\n\n\n\n\nvar LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"logo__LogoWrapper\",\n  componentId: \"sc-3s88e1-0\"\n})([\"flex-grow:2;display:flex;flex-direction:row;\"]);\n_c = LogoWrapper;\nvar LogoLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a.withConfig({\n  displayName: \"logo__LogoLink\",\n  componentId: \"sc-3s88e1-1\"\n})([\"display:inline-block;line-height:60px;font-size:large;font-weight:bold;text-transform:uppercase;&:hover:{color:black !important;}\"]);\n_c2 = LogoLink;\nvar Logo = function Logo() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LogoWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n      src: \"/images/oddity.png\",\n      height: \"60px\",\n      width: \"60px\",\n      alt: \"logo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LogoLink, {\n      href: \"/\",\n      children: \"CrossFitOddity\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, _this);\n};\n_c3 = Logo;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"LogoWrapper\");\n$RefreshReg$(_c2, \"LogoLink\");\n$RefreshReg$(_c3, \"Logo\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ28udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUUsV0FBVyxHQUFHRix3RUFBSDtFQUFBO0VBQUE7QUFBQSxvREFBakI7S0FBTUU7QUFNTixJQUFNRSxRQUFRLEdBQUdKLHNFQUFIO0VBQUE7RUFBQTtBQUFBLHlJQUFkO01BQU1JO0FBWUMsSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtFQUN0QixvQkFDSSw4REFBQyxXQUFEO0lBQUEsd0JBQ0EsOERBQUMsbURBQUQ7TUFDSSxHQUFHLEVBQUMsb0JBRFI7TUFFSSxNQUFNLEVBQUMsTUFGWDtNQUdJLEtBQUssRUFBQyxNQUhWO01BSUksR0FBRyxFQUFDO0lBSlI7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURBLGVBT0EsOERBQUMsUUFBRDtNQUFVLElBQUksRUFBQyxHQUFmO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBUEE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREo7QUFhSCxDQWRNO01BQU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbG9nby50c3g/MzkxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgTG9nb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIGZsZXgtZ3JvdzogMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gO1xuXG5jb25zdCBMb2dvTGluayA9IHN0eWxlZC5hYFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgJjpob3Zlcjoge1xuICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICB9XG5cbmA7XG5cbmV4cG9ydCBjb25zdCBMb2dvID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMb2dvV3JhcHBlcj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL29kZGl0eS5wbmdcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNjBweFwiXG4gICAgICAgICAgICB3aWR0aD1cIjYwcHhcIlxuICAgICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxMb2dvTGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgQ3Jvc3NGaXRPZGRpdHlcbiAgICAgICAgPC9Mb2dvTGluaz5cbiAgICA8L0xvZ29XcmFwcGVyPlxuICAgIClcbn0iXSwibmFtZXMiOlsic3R5bGVkIiwiSW1hZ2UiLCJMb2dvV3JhcHBlciIsImRpdiIsIkxvZ29MaW5rIiwiYSIsIkxvZ28iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/logo.tsx\n"));

/***/ })

});