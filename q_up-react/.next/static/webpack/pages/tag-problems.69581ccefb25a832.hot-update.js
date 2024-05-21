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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n// 초록 배경\nconst WrapContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  padding: 20px 40px 40px 40px;\n  margin: 30px auto;\n  background: rgba(47, 129, 65, 0.1);\n  border-top: 4px dotted black;\n  border-bottom: 4px dotted black;\n  text-align: center;\n  width: 50%;\n`;\n_c = WrapContainer;\n// 표\nconst Table = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].table`\n  font-size: 1.3rem;\n  width: 90%;\n  background: rgba(0, 0, 0, 0);\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin: 0 auto; /* 가운데 정렬!! */\n  margin-top: 40px;\n  margin-bottom: 40px;\n\n  th,\n  td {\n    padding: 10px;\n    border-bottom: 1px solid green;\n    border-top: 1px solid green;\n    text-align: left;\n  }\n\n  th {\n    font-weight: bold;\n    background-color: rgba(47, 129, 65, 0.2);\n  }\n\n  th:first-child,\n  td:first-child {\n    padding-left: 100px;\n  }\n\n  th:last-child,\n  td:last-child {\n    text-align: right;\n    padding-right: 100px;\n  }\n`;\n_c1 = Table;\nconst ProblemTable = ({ problems })=>{\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setIsVisible(true);\n        }, 300);\n        return ()=>clearTimeout(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrapContainer, {\n        className: isVisible ? \"slide-up\" : \"\",\n        style: {\n            visibility: isVisible ? \"visible\" : \"hidden\",\n            opacity: isVisible ? 1 : 0\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"알고리즘 분류\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"벗들이 안 푼 문제 개수\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: problems.map((problem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: problem.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: problem.count\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/ProblemPage/ProblemTable.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProblemTable, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c2 = ProblemTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProblemTable);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"WrapContainer\");\n$RefreshReg$(_c1, \"Table\");\n$RefreshReg$(_c2, \"ProblemTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2JsZW1QYWdlL1Byb2JsZW1UYWJsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUNZO0FBRW5ELFFBQVE7QUFDUixNQUFNSSxnQkFBZ0JKLDZEQUFVLENBQUM7Ozs7Ozs7O0FBUWpDLENBQUM7S0FSS0k7QUFVTixJQUFJO0FBQ0osTUFBTUUsUUFBUU4sK0RBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUMzQixDQUFDO01BakNLTTtBQW1DTixNQUFNRSxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUNoQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsUUFBUUMsV0FBVztZQUN2QkYsYUFBYTtRQUNmLEdBQUc7UUFDSCxPQUFPLElBQU1HLGFBQWFGO0lBQzVCLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUjtRQUNDVyxXQUFXTCxZQUFZLGFBQWE7UUFDcENNLE9BQU87WUFDTEMsWUFBWVAsWUFBWSxZQUFZO1lBQ3BDUSxTQUFTUixZQUFZLElBQUk7UUFDM0I7a0JBRUEsNEVBQUNKOzs4QkFDQyw4REFBQ2E7OEJBQ0MsNEVBQUNDOzswQ0FDQyw4REFBQ0M7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdSLDhEQUFDQzs4QkFDRWIsU0FBU2MsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQ0w7OzhDQUNDLDhEQUFDTTs4Q0FBSUYsUUFBUUcsSUFBSTs7Ozs7OzhDQUNqQiw4REFBQ0Q7OENBQUlGLFFBQVFJLEtBQUs7Ozs7Ozs7MkJBRlhIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTckI7R0FwQ01qQjtNQUFBQTtBQXNDTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2JsZW1QYWdlL1Byb2JsZW1UYWJsZS5qcz85ZTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyDstIjroZ0g67Cw6rK9XG5jb25zdCBXcmFwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMjBweCA0MHB4IDQwcHggNDBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIGJhY2tncm91bmQ6IHJnYmEoNDcsIDEyOSwgNjUsIDAuMSk7XG4gIGJvcmRlci10b3A6IDRweCBkb3R0ZWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDRweCBkb3R0ZWQgYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbmA7XG5cbi8vIO2RnFxuY29uc3QgVGFibGUgPSBzdHlsZWQudGFibGVgXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB3aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiAwIGF1dG87IC8qIOqwgOyatOuNsCDsoJXroKwhISAqL1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gIHRoLFxuICB0ZCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JlZW47XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZWVuO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICB0aCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgMTI5LCA2NSwgMC4yKTtcbiAgfVxuXG4gIHRoOmZpcnN0LWNoaWxkLFxuICB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgfVxuXG4gIHRoOmxhc3QtY2hpbGQsXG4gIHRkOmxhc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuICB9XG5gO1xuXG5jb25zdCBQcm9ibGVtVGFibGUgPSAoeyBwcm9ibGVtcyB9KSA9PiB7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xuICAgIH0sIDMwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwQ29udGFpbmVyXG4gICAgICBjbGFzc05hbWU9e2lzVmlzaWJsZSA/IFwic2xpZGUtdXBcIiA6IFwiXCJ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCIsXG4gICAgICAgIG9wYWNpdHk6IGlzVmlzaWJsZSA/IDEgOiAwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+7JWM6rOg66as7KaYIOu2hOulmDwvdGg+XG4gICAgICAgICAgICA8dGg+67KX65Ok7J20IOyViCDtkbwg66y47KCcIOqwnOyImDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtwcm9ibGVtcy5tYXAoKHByb2JsZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDx0ZD57cHJvYmxlbS5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57cHJvYmxlbS5jb3VudH08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgPC9XcmFwQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvYmxlbVRhYmxlO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJXcmFwQ29udGFpbmVyIiwiZGl2IiwiVGFibGUiLCJ0YWJsZSIsIlByb2JsZW1UYWJsZSIsInByb2JsZW1zIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwicHJvYmxlbSIsImluZGV4IiwidGQiLCJuYW1lIiwiY291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProblemPage/ProblemTable.js\n"));

/***/ })

});