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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeroSection\": function() { return /* binding */ HeroSection; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/mcknigd/repos/crossfitoddity.github.io/components/heroSection.tsx\",\n    _this = undefined;\n\n\n\nvar HeroImageSection = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n  displayName: \"heroSection__HeroImageSection\",\n  componentId: \"sc-cakv8x-0\"\n})([\"width:450px;height:421px;margin:5px;flex-basis:100%;background-image:url('/images/oddity-gym.jpg');margin:0;\"]);\n_c = HeroImageSection;\nvar HeroHeading = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1.withConfig({\n  displayName: \"heroSection__HeroHeading\",\n  componentId: \"sc-cakv8x-1\"\n})([\"font-weight:800;text-transform:uppercase;font-family:Oswald;background-color:#2a2e40;position:asbolute;bottom:0px;left:110px;width:50px;\"]);\n_c2 = HeroHeading;\nvar ItemList = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"heroSection__ItemList\",\n  componentId: \"sc-cakv8x-2\"\n})([\"display:flex;flex-direction:row;@media (max-width:768px){flex-wrap:wrap;}\"]);\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].summary.withConfig({\n  displayName: \"heroSection__Item\",\n  componentId: \"sc-cakv8x-3\"\n})([\"flex-basis:33%;@media (max-width:768px){flex-basis:100%;}padding:0px 25px;\"]);\nvar ItemDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"heroSection__ItemDescription\",\n  componentId: \"sc-cakv8x-4\"\n})([\"\"]);\nvar HeroSection = function HeroSection() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeroImageSection, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeroHeading, {\n      children: \"Testing 123\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 9\n  }, _this);\n};\n_c3 = HeroSection;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"HeroImageSection\");\n$RefreshReg$(_c2, \"HeroHeading\");\n$RefreshReg$(_c3, \"HeroSection\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm9TZWN0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUdELDRFQUFIO0VBQUE7RUFBQTtBQUFBLG9IQUF0QjtLQUFNQztBQVNOLElBQU1FLFdBQVcsR0FBR0gsdUVBQUg7RUFBQTtFQUFBO0FBQUEsZ0pBQWpCO01BQU1HO0FBV04sSUFBTUUsUUFBUSxHQUFHTCx3RUFBSDtFQUFBO0VBQUE7QUFBQSxpRkFBZDtBQVFBLElBQU1PLElBQUksR0FBR1AsNEVBQUg7RUFBQTtFQUFBO0FBQUEsa0ZBQVY7QUFRQSxJQUFNUyxlQUFlLEdBQUdULHNFQUFIO0VBQUE7RUFBQTtBQUFBLFFBQXJCO0FBSU8sSUFBTVcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtFQUM3QixvQkFDSSw4REFBQyxnQkFBRDtJQUFBLHVCQUNJLDhEQUFDLFdBQUQ7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFESjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREo7QUFLSCxDQU5NO01BQU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyb1NlY3Rpb24udHN4PzFkYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgSGVyb0ltYWdlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICAgIHdpZHRoOiA0NTBweDtcbiAgICBoZWlnaHQ6IDQyMXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL29kZGl0eS1neW0uanBnJyk7XG4gICAgbWFyZ2luOiAwO1xuYDtcblxuY29uc3QgSGVyb0hlYWRpbmcgPSBzdHlsZWQuaDFgXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtZmFtaWx5OiBPc3dhbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmU0MDtcbiAgICBwb3NpdGlvbjogYXNib2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMTEwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG5gO1xuXG5jb25zdCBJdGVtTGlzdCA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG5gO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLnN1bW1hcnlgXG4gICAgZmxleC1iYXNpczogMzMlO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgICAgfVxuICAgIHBhZGRpbmc6IDBweCAyNXB4O1xuYDtcblxuY29uc3QgSXRlbURlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBIZXJvU2VjdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SGVyb0ltYWdlU2VjdGlvbj5cbiAgICAgICAgICAgIDxIZXJvSGVhZGluZz5UZXN0aW5nIDEyMzwvSGVyb0hlYWRpbmc+XG4gICAgICAgIDwvSGVyb0ltYWdlU2VjdGlvbj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJzdHlsZWQiLCJIZXJvSW1hZ2VTZWN0aW9uIiwic2VjdGlvbiIsIkhlcm9IZWFkaW5nIiwiaDEiLCJJdGVtTGlzdCIsImRpdiIsIkl0ZW0iLCJzdW1tYXJ5IiwiSXRlbURlc2NyaXB0aW9uIiwicCIsIkhlcm9TZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/heroSection.tsx\n"));

/***/ })

});