"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/difficulty-problems",{

/***/ "./components/Title.js":
/*!*****************************!*\
  !*** ./components/Title.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst TitleSectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  align-items: center;\n  justify-content: space-between;\n  width: 61%;\n  padding: 20px;\n  box-sizing: border-box;\n`;\n_c = TitleSectionContainer;\nconst CenterText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  font-size: 2rem;\n  font-weight: 500;\n  text-align: center;\n  flex-grow: 1;\n  font-family: \"Malgun Gothic\", \"Apple SD Gothic Neo\", \"Nanum Gothic\", \"Arial\";\n  color: #156827;\n`;\n_c1 = CenterText;\nconst Title = ({ sentence })=>{\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setIsVisible(true);\n        }, 300);\n        return ()=>clearTimeout(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSectionContainer, {\n        className: isVisible ? \"slide-up\" : \"\",\n        style: {\n            visibility: isVisible ? \"visible\" : \"hidden\",\n            opacity: isVisible ? 1 : 0\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CenterText, {\n            children: sentence\n        }, void 0, false, {\n            fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/Title.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/Title.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Title, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c2 = Title;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Title);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"TitleSectionContainer\");\n$RefreshReg$(_c1, \"CenterText\");\n$RefreshReg$(_c2, \"Title\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpdGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBQ1k7QUFFbkQsTUFBTUksd0JBQXdCSiw2REFBVSxDQUFDOzs7Ozs7QUFNekMsQ0FBQztLQU5LSTtBQU9OLE1BQU1FLGFBQWFOLDZEQUFVLENBQUM7Ozs7Ozs7QUFPOUIsQ0FBQztNQVBLTTtBQVNOLE1BQU1DLFFBQVEsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3pCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxRQUFRQyxXQUFXO1lBQ3ZCRixhQUFhO1FBQ2YsR0FBRztRQUNILE9BQU8sSUFBTUcsYUFBYUY7SUFDNUIsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNQO1FBQ0NVLFdBQVdMLFlBQVksYUFBYTtRQUNwQ00sT0FBTztZQUNMQyxZQUFZUCxZQUFZLFlBQVk7WUFDcENRLFNBQVNSLFlBQVksSUFBSTtRQUMzQjtrQkFFQSw0RUFBQ0g7c0JBQVlFOzs7Ozs7Ozs7OztBQUduQjtHQXJCTUQ7TUFBQUE7QUF1Qk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaXRsZS5qcz80NmYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUaXRsZVNlY3Rpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA2MSU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5gO1xuY29uc3QgQ2VudGVyVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIk1hbGd1biBHb3RoaWNcIiwgXCJBcHBsZSBTRCBHb3RoaWMgTmVvXCIsIFwiTmFudW0gR290aGljXCIsIFwiQXJpYWxcIjtcbiAgY29sb3I6ICMxNTY4Mjc7XG5gO1xuXG5jb25zdCBUaXRsZSA9ICh7IHNlbnRlbmNlIH0pID0+IHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc1Zpc2libGUodHJ1ZSk7XG4gICAgfSwgMzAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFRpdGxlU2VjdGlvbkNvbnRhaW5lclxuICAgICAgY2xhc3NOYW1lPXtpc1Zpc2libGUgPyBcInNsaWRlLXVwXCIgOiBcIlwifVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdmlzaWJpbGl0eTogaXNWaXNpYmxlID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiLFxuICAgICAgICBvcGFjaXR5OiBpc1Zpc2libGUgPyAxIDogMCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENlbnRlclRleHQ+e3NlbnRlbmNlfTwvQ2VudGVyVGV4dD5cbiAgICA8L1RpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUaXRsZVNlY3Rpb25Db250YWluZXIiLCJkaXYiLCJDZW50ZXJUZXh0IiwiVGl0bGUiLCJzZW50ZW5jZSIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImNsYXNzTmFtZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsIm9wYWNpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Title.js\n"));

/***/ }),

/***/ "./pages/difficulty-problems.js":
/*!**************************************!*\
  !*** ./pages/difficulty-problems.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./components/Layout/Layout.js\");\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Title */ \"./components/Title.js\");\n/* harmony import */ var _components_ProblemPage_ProblemTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProblemPage/ProblemTable */ \"./components/ProblemPage/ProblemTable.js\");\n\n\n\n\nconst tagProblemData = [\n    {\n        name: \"B5\",\n        count: 6180\n    },\n    {\n        name: \"B4\",\n        count: 3690\n    },\n    {\n        name: \"B3\",\n        count: 3690\n    },\n    {\n        name: \"B2\",\n        count: 3690\n    },\n    {\n        name: \"B1\",\n        count: 3690\n    },\n    {\n        name: \"S5\",\n        count: 6180\n    },\n    {\n        name: \"S4\",\n        count: 3690\n    },\n    {\n        name: \"S3\",\n        count: 3690\n    },\n    {\n        name: \"S2\",\n        count: 3690\n    },\n    {\n        name: \"S1\",\n        count: 3690\n    },\n    {\n        name: \"G5\",\n        count: 6180\n    },\n    {\n        name: \"G4\",\n        count: 3690\n    },\n    {\n        name: \"G3\",\n        count: 3690\n    },\n    {\n        name: \"G2\",\n        count: 3690\n    },\n    {\n        name: \"G1\",\n        count: 3690\n    },\n    {\n        name: \"P5\",\n        count: 6180\n    },\n    {\n        name: \"P4\",\n        count: 3690\n    },\n    {\n        name: \"P3\",\n        count: 3690\n    },\n    {\n        name: \"P2\",\n        count: 3690\n    },\n    {\n        name: \"P1\",\n        count: 3690\n    },\n    {\n        name: \"D5\",\n        count: 6180\n    },\n    {\n        name: \"D4\",\n        count: 3690\n    },\n    {\n        name: \"D3\",\n        count: 3690\n    },\n    {\n        name: \"D2\",\n        count: 3690\n    },\n    {\n        name: \"D1\",\n        count: 3690\n    },\n    {\n        name: \"R5\",\n        count: 6180\n    },\n    {\n        name: \"R4\",\n        count: 3690\n    },\n    {\n        name: \"R3\",\n        count: 3690\n    },\n    {\n        name: \"R2\",\n        count: 3690\n    },\n    {\n        name: \"R1\",\n        count: 3690\n    }\n];\nconst TagProblems = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sentence: \"- 난이도별 문제 -\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/difficulty-problems.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProblemPage_ProblemTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                problems: tagProblemData\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/difficulty-problems.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/difficulty-problems.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TagProblems;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TagProblems);\nvar _c;\n$RefreshReg$(_c, \"TagProblems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kaWZmaWN1bHR5LXByb2JsZW1zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUQ7QUFDVDtBQUMwQjtBQUVsRSxNQUFNRyxpQkFBaUI7SUFDckI7UUFBRUMsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7SUFDMUI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUs7Q0FDM0I7QUFFRCxNQUFNQyxjQUFjO0lBQ2xCLHFCQUNFLDhEQUFDTixpRUFBTUE7OzBCQUNMLDhEQUFDQyx5REFBS0E7Z0JBQUNNLFVBQVU7Ozs7OzswQkFDakIsOERBQUNMLDRFQUFZQTtnQkFBQ00sVUFBVUw7Ozs7Ozs7Ozs7OztBQUc5QjtLQVBNRztBQVNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RpZmZpY3VsdHktcHJvYmxlbXMuanM/MDQ0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9UaXRsZVwiO1xuaW1wb3J0IFByb2JsZW1UYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9ibGVtUGFnZS9Qcm9ibGVtVGFibGVcIjtcblxuY29uc3QgdGFnUHJvYmxlbURhdGEgPSBbXG4gIHsgbmFtZTogXCJCNVwiLCBjb3VudDogNjE4MCB9LFxuICB7IG5hbWU6IFwiQjRcIiwgY291bnQ6IDM2OTAgfSxcbiAgeyBuYW1lOiBcIkIzXCIsIGNvdW50OiAzNjkwIH0sXG4gIHsgbmFtZTogXCJCMlwiLCBjb3VudDogMzY5MCB9LFxuICB7IG5hbWU6IFwiQjFcIiwgY291bnQ6IDM2OTAgfSxcbiAgeyBuYW1lOiBcIlM1XCIsIGNvdW50OiA2MTgwIH0sXG4gIHsgbmFtZTogXCJTNFwiLCBjb3VudDogMzY5MCB9LFxuICB7IG5hbWU6IFwiUzNcIiwgY291bnQ6IDM2OTAgfSxcbiAgeyBuYW1lOiBcIlMyXCIsIGNvdW50OiAzNjkwIH0sXG4gIHsgbmFtZTogXCJTMVwiLCBjb3VudDogMzY5MCB9LFxuICB7IG5hbWU6IFwiRzVcIiwgY291bnQ6IDYxODAgfSxcbiAgeyBuYW1lOiBcIkc0XCIsIGNvdW50OiAzNjkwIH0sXG4gIHsgbmFtZTogXCJHM1wiLCBjb3VudDogMzY5MCB9LFxuICB7IG5hbWU6IFwiRzJcIiwgY291bnQ6IDM2OTAgfSxcbiAgeyBuYW1lOiBcIkcxXCIsIGNvdW50OiAzNjkwIH0sXG4gIHsgbmFtZTogXCJQNVwiLCBjb3VudDogNjE4MCB9LFxuICB7IG5hbWU6IFwiUDRcIiwgY291bnQ6IDM2OTAgfSxcbiAgeyBuYW1lOiBcIlAzXCIsIGNvdW50OiAzNjkwIH0sXG4gIHsgbmFtZTogXCJQMlwiLCBjb3VudDogMzY5MCB9LFxuICB7IG5hbWU6IFwiUDFcIiwgY291bnQ6IDM2OTAgfSxcbiAgeyBuYW1lOiBcIkQ1XCIsIGNvdW50OiA2MTgwIH0sXG4gIHsgbmFtZTogXCJENFwiLCBjb3VudDogMzY5MCB9LFxuICB7IG5hbWU6IFwiRDNcIiwgY291bnQ6IDM2OTAgfSxcbiAgeyBuYW1lOiBcIkQyXCIsIGNvdW50OiAzNjkwIH0sXG4gIHsgbmFtZTogXCJEMVwiLCBjb3VudDogMzY5MCB9LFxuICB7IG5hbWU6IFwiUjVcIiwgY291bnQ6IDYxODAgfSxcbiAgeyBuYW1lOiBcIlI0XCIsIGNvdW50OiAzNjkwIH0sXG4gIHsgbmFtZTogXCJSM1wiLCBjb3VudDogMzY5MCB9LFxuICB7IG5hbWU6IFwiUjJcIiwgY291bnQ6IDM2OTAgfSxcbiAgeyBuYW1lOiBcIlIxXCIsIGNvdW50OiAzNjkwIH0sXG5dO1xuXG5jb25zdCBUYWdQcm9ibGVtcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFRpdGxlIHNlbnRlbmNlPXtcIi0g64Kc7J2064+E67OEIOusuOygnCAtXCJ9IC8+XG4gICAgICA8UHJvYmxlbVRhYmxlIHByb2JsZW1zPXt0YWdQcm9ibGVtRGF0YX0gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ1Byb2JsZW1zO1xuIl0sIm5hbWVzIjpbIkxheW91dCIsIlRpdGxlIiwiUHJvYmxlbVRhYmxlIiwidGFnUHJvYmxlbURhdGEiLCJuYW1lIiwiY291bnQiLCJUYWdQcm9ibGVtcyIsInNlbnRlbmNlIiwicHJvYmxlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/difficulty-problems.js\n"));

/***/ })

});