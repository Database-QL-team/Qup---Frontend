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

/***/ "./components/MainPage/TodayProblemWrap.js":
/*!*************************************************!*\
  !*** ./components/MainPage/TodayProblemWrap.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _TodayProblem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodayProblem */ \"./components/MainPage/TodayProblem.js\");\n\n\n\nconst WrapContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  width: 100%\n  height: 100%\n  padding: 20px 40px 40px 40px;\n  margin: 30px;\n  background: rgba(47, 129, 65, 0.1);\n  border-top: 4px dotted black;\n  border-bottom: 4px dotted black;\n  text-align: center;\n`;\n_c = WrapContainer;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h2`\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n  color: green;\n  text-align: center;\n`;\n_c1 = Title;\nconst TodayProblemWrap = ({ problems })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginTop: \"30px\",\n            width: \"40%\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                children: \"- 오늘의 문제 -\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/MainPage/TodayProblemWrap.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrapContainer, {\n                children: problems.map((problemSet, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TodayProblem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        title: problemSet.title,\n                        problems: problemSet.problems\n                    }, index, false, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/MainPage/TodayProblemWrap.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/MainPage/TodayProblemWrap.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/MainPage/TodayProblemWrap.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = TodayProblemWrap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayProblemWrap);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"WrapContainer\");\n$RefreshReg$(_c1, \"Title\");\n$RefreshReg$(_c2, \"TodayProblemWrap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5QYWdlL1RvZGF5UHJvYmxlbVdyYXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDO0FBQ0c7QUFFMUMsTUFBTUUsZ0JBQWdCRiw2REFBVSxDQUFDOzs7Ozs7Ozs7QUFTakMsQ0FBQztLQVRLRTtBQVdOLE1BQU1FLFFBQVFKLDREQUFTLENBQUM7Ozs7O0FBS3hCLENBQUM7TUFMS0k7QUFPTixNQUFNRSxtQkFBbUIsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDcEMscUJBQ0UsOERBQUNKO1FBQUlLLE9BQU87WUFBRUMsV0FBVztZQUFRQyxPQUFPO1lBQU9DLFlBQVk7UUFBUzs7MEJBQ2xFLDhEQUFDUDswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDRjswQkFDRUssU0FBU0ssR0FBRyxDQUFDLENBQUNDLFlBQVlDLHNCQUN6Qiw4REFBQ2IscURBQVlBO3dCQUVYYyxPQUFPRixXQUFXRSxLQUFLO3dCQUN2QlIsVUFBVU0sV0FBV04sUUFBUTt1QkFGeEJPOzs7Ozs7Ozs7Ozs7Ozs7O0FBUWpCO01BZk1SO0FBaUJOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluUGFnZS9Ub2RheVByb2JsZW1XcmFwLmpzPzJjNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBUb2RheVByb2JsZW0gZnJvbSBcIi4vVG9kYXlQcm9ibGVtXCI7XG5cbmNvbnN0IFdyYXBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJVxuICBoZWlnaHQ6IDEwMCVcbiAgcGFkZGluZzogMjBweCA0MHB4IDQwcHggNDBweDtcbiAgbWFyZ2luOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQ3LCAxMjksIDY1LCAwLjEpO1xuICBib3JkZXItdG9wOiA0cHggZG90dGVkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiA0cHggZG90dGVkIGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiBncmVlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuY29uc3QgVG9kYXlQcm9ibGVtV3JhcCA9ICh7IHByb2JsZW1zIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIsIHdpZHRoOiBcIjQwJVwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxuICAgICAgPFRpdGxlPi0g7Jik64qY7J2YIOusuOygnCAtPC9UaXRsZT5cbiAgICAgIDxXcmFwQ29udGFpbmVyPlxuICAgICAgICB7cHJvYmxlbXMubWFwKChwcm9ibGVtU2V0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxUb2RheVByb2JsZW1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICB0aXRsZT17cHJvYmxlbVNldC50aXRsZX1cbiAgICAgICAgICAgIHByb2JsZW1zPXtwcm9ibGVtU2V0LnByb2JsZW1zfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9XcmFwQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kYXlQcm9ibGVtV3JhcDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJUb2RheVByb2JsZW0iLCJXcmFwQ29udGFpbmVyIiwiZGl2IiwiVGl0bGUiLCJoMiIsIlRvZGF5UHJvYmxlbVdyYXAiLCJwcm9ibGVtcyIsInN0eWxlIiwibWFyZ2luVG9wIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwibWFwIiwicHJvYmxlbVNldCIsImluZGV4IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MainPage/TodayProblemWrap.js\n"));

/***/ })

});