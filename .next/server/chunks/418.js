"use strict";
exports.id = 418;
exports.ids = [418];
exports.modules = {

/***/ 418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ CTAFullWidth)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "ctaFullWidth__Item",
  componentId: "sc-y6ng2x-0"
})(["margin:5px;flex-basis:100%;padding:5px;background-color:#7cda24;color:white;margin:0;@media (max-width:768px){flex-basis:100%;}"]);
const ItemHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "ctaFullWidth__ItemHeader",
  componentId: "sc-y6ng2x-1"
})(["font-family:Oswald;text-align:center;"]);
const ItemDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ctaFullWidth__ItemDescription",
  componentId: "sc-y6ng2x-2"
})(["padding:15px;margin:auto;"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "ctaFullWidth__Form",
  componentId: "sc-y6ng2x-3"
})(["display:flex;flex-flow:row wrap;justify-content:center;margin:0 0 15px 0;padding:10px;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "ctaFullWidth__Input",
  componentId: "sc-y6ng2x-4"
})(["   width:300px;height:40px;margin:0 15px 0 0;@media (max-width:768px){width:350px;margin:5px;}"]);
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "ctaFullWidth__SubmitButton",
  componentId: "sc-y6ng2x-5"
})(["background-color:#7cda24;width:100px;height:40px;border:1px solid white;color:white;gap:10px;&:hover{cursor:pointer;}"]);
const CTAFullWidth = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Item, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(ItemHeader, {
      children: "Ready to get started?"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(ItemDescription, {
      children: ["Leave us your name in number in the form below! We'll reach out and talk about what your fitness goals are and explain next steps.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
        children: "If you're new to CrossFit you must take a Foundations Class to ensure you are at the right starting point before going to regular workouts. At a minimum it is 3 1-hour session with a coach.  Cost is $105. If needed, each additional class is $35."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Form, {
      action: "https://formspree.io/f/xbjbjkgd",
      method: "POST",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Input, {
        name: "name",
        placeholder: "Your name"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Input, {
        name: "phone",
        placeholder: "Phone"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SubmitButton, {
        type: "submit",
        children: "Submit"
      })]
    })]
  });
};

/***/ })

};
;