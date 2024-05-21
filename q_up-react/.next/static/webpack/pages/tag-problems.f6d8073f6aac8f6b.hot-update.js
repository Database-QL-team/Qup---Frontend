"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tag-problems",{

/***/ "./components/ProblemPage/ProblemTable.js":
/*!************************************************!*\
  !*** ./components/ProblemPage/ProblemTable.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n// 초록 배경\nconst WrapContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div`\n  padding: 20px 40px 40px 40px;\n  margin: 30px auto;\n  background: rgba(47, 129, 65, 0.1);\n  border-top: 4px dotted black;\n  border-bottom: 4px dotted black;\n  text-align: center;\n  width: 50%;\n`;\n_c = WrapContainer;\n// 표\nconst Table = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].table`\n  font-size: 1.3rem;\n  width: 90%;\n  background: rgba(0, 0, 0, 0);\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin: 0 auto; /* 가운데 정렬!! */\n  margin-top: 40px;\n  margin-bottom: 40px;\n\n  th,\n  td {\n    padding: 10px;\n    border-bottom: 1px solid green;\n    border-top: 1px solid green;\n    text-align: left;\n  }\n\n  th {\n    font-weight: bold;\n    background-color: rgba(47, 129, 65, 0.2);\n  }\n\n  th,\n  td:first-child {\n    padding-left: 50px;\n  }\n\n  td:last-child {\n    text-align: right;\n    padding-right: 50px;\n  }\n`;\n_c1 = Table;\nconst ProblemTable = ({ problems })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrapContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"알고리즘 분류\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"문제 개수\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: problems.map((problem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: problem.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: problem.count\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = ProblemTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProblemTable);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"WrapContainer\");\n$RefreshReg$(_c1, \"Table\");\n$RefreshReg$(_c2, \"ProblemTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2JsZW1QYWdlL1Byb2JsZW1UYWJsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QztBQUV2QyxRQUFRO0FBQ1IsTUFBTUMsZ0JBQWdCRCw2REFBVSxDQUFDOzs7Ozs7OztBQVFqQyxDQUFDO0tBUktDO0FBVU4sSUFBSTtBQUNKLE1BQU1FLFFBQVFILCtEQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0MzQixDQUFDO01BaENLRztBQWtDTixNQUFNRSxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ2hDLHFCQUNFLDhEQUFDTDtrQkFDQyw0RUFBQ0U7OzhCQUNDLDhEQUFDSTs4QkFDQyw0RUFBQ0M7OzBDQUNDLDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR1IsOERBQUNDOzhCQUNFSixTQUFTSyxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDTDs7OENBQ0MsOERBQUNNOzhDQUFJRixRQUFRRyxJQUFJOzs7Ozs7OENBQ2pCLDhEQUFDRDs4Q0FBSUYsUUFBUUksS0FBSzs7Ozs7OzsyQkFGWEg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNyQjtNQXJCTVI7QUF1Qk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ibGVtUGFnZS9Qcm9ibGVtVGFibGUuanM/OWU5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyDstIjroZ0g67Cw6rK9XG5jb25zdCBXcmFwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMjBweCA0MHB4IDQwcHggNDBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIGJhY2tncm91bmQ6IHJnYmEoNDcsIDEyOSwgNjUsIDAuMSk7XG4gIGJvcmRlci10b3A6IDRweCBkb3R0ZWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDRweCBkb3R0ZWQgYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbmA7XG5cbi8vIO2RnFxuY29uc3QgVGFibGUgPSBzdHlsZWQudGFibGVgXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB3aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiAwIGF1dG87IC8qIOqwgOyatOuNsCDsoJXroKwhISAqL1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gIHRoLFxuICB0ZCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JlZW47XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZWVuO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICB0aCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgMTI5LCA2NSwgMC4yKTtcbiAgfVxuXG4gIHRoLFxuICB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB9XG5cbiAgdGQ6bGFzdC1jaGlsZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgfVxuYDtcblxuY29uc3QgUHJvYmxlbVRhYmxlID0gKHsgcHJvYmxlbXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwQ29udGFpbmVyPlxuICAgICAgPFRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPuyVjOqzoOumrOymmCDrtoTrpZg8L3RoPlxuICAgICAgICAgICAgPHRoPuusuOygnCDqsJzsiJg8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7cHJvYmxlbXMubWFwKChwcm9ibGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8dGQ+e3Byb2JsZW0ubmFtZX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e3Byb2JsZW0uY291bnR9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvV3JhcENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2JsZW1UYWJsZTtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJXcmFwQ29udGFpbmVyIiwiZGl2IiwiVGFibGUiLCJ0YWJsZSIsIlByb2JsZW1UYWJsZSIsInByb2JsZW1zIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJwcm9ibGVtIiwiaW5kZXgiLCJ0ZCIsIm5hbWUiLCJjb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProblemPage/ProblemTable.js\n"));

/***/ })

});