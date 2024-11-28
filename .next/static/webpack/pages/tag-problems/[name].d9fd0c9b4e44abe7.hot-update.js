"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tag-problems/[name]",{

/***/ "./components/TagProblemPage/TagDetailProblemTable.js":
/*!************************************************************!*\
  !*** ./components/TagProblemPage/TagDetailProblemTable.js ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_tierNumberChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/tierNumberChange */ \"./utils/tierNumberChange.js\");\n/* harmony import */ var _utils_TruncatedText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/TruncatedText */ \"./utils/TruncatedText.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// 초록 배경\nconst WrapContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  padding: 20px 40px 40px 40px;\n  margin: 30px auto;\n  background: rgba(47, 129, 65, 0.1);\n  border-top: 4px dotted black;\n  border-bottom: 4px dotted black;\n  text-align: center;\n  width: 80%;\n\n  @media (max-width: 700px) {\n    margin: 20px auto;\n    padding: 10px 20px;\n  }\n`;\n_c = WrapContainer;\n// 표\nconst Table = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].table`\n  font-size: 1.3rem;\n  width: 90%;\n  background: rgba(0, 0, 0, 0);\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 40px;\n\n  th,\n  td {\n    padding: 10px;\n    border-bottom: 1px solid green;\n    border-top: 1px solid green;\n    text-align: left;\n  }\n\n  th {\n    font-weight: bold;\n    background-color: rgba(47, 129, 65, 0.2);\n  }\n\n  th:first-child,\n  td:first-child {\n    padding-left: 10px;\n  }\n\n  th:last-child,\n  td:last-child {\n  }\n\n  @media (max-width: 700px) {\n    width: 100%;\n    font-size: 0.7rem;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    th,\n    td {\n      padding: 10px 0;\n    }\n    th:first-child,\n    td:first-child {\n      padding-left: 10px;\n      width: 10%;\n    }\n    th:nth-child(2),\n    td:nth-child(2) {\n      width: 15%;\n    }\n    th:nth-child(4),\n    td:nth-child(4) {\n      width: 15%;\n    }\n  }\n`;\n_c1 = Table;\nconst LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a`\n  background-color: green;\n  color: white;\n  padding: 5px 10px;\n  text-decoration: none;\n  border-radius: 5px;\n  font-size: 1rem;\n  cursor: pointer;\n\n  &:hover {\n    background-color: darkgreen;\n  }\n\n  @media (max-width: 700px) {\n    font-size: 0.6rem;\n    padding: 4px 8px;\n  }\n`;\n_c2 = LinkButton;\nconst TagDetailProblemTable = ({ ProblemData })=>{\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setIsVisible(true);\n        }, 400);\n        return ()=>clearTimeout(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrapContainer, {\n        className: isVisible ? \"slide-up\" : \"\",\n        style: {\n            visibility: isVisible ? \"visible\" : \"hidden\",\n            opacity: isVisible ? 1 : 0\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"티어\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"번호\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"솔브닥 제목\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"푼 사람 수\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                lineNumber: 123,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"푼 문제 링크\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: ProblemData && ProblemData.map((Problem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: (0,_utils_tierNumberChange__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Problem.tier)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: Problem.problemId\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                    lineNumber: 132,\n                                    columnNumber: 17\n                                }, undefined),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_TruncatedText__WEBPACK_IMPORTED_MODULE_3__.TruncatedText, {\n                                        title: Problem.title,\n                                        maxWidth: \"430px\",\n                                        maxWidthMobile: \"85px\",\n                                        children: Problem.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                        lineNumber: 134,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                    lineNumber: 133,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: Problem.solvedNum\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                    lineNumber: 142,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkButton, {\n                                        href: Problem.link,\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        children: \"기여하기!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                        lineNumber: 144,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                    lineNumber: 143,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                            lineNumber: 130,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n            lineNumber: 117,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TagDetailProblemTable, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c3 = TagDetailProblemTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TagDetailProblemTable);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"WrapContainer\");\n$RefreshReg$(_c1, \"Table\");\n$RefreshReg$(_c2, \"LinkButton\");\n$RefreshReg$(_c3, \"TagDetailProblemTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhZ1Byb2JsZW1QYWdlL1RhZ0RldGFpbFByb2JsZW1UYWJsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVDO0FBQ1k7QUFDUztBQUNGO0FBRTFELFFBQVE7QUFDUixNQUFNTSxnQkFBZ0JOLDZEQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakMsQ0FBQztLQWJLTTtBQWVOLElBQUk7QUFDSixNQUFNRSxRQUFRUiwrREFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUQzQixDQUFDO01BdkRLUTtBQXlETixNQUFNRSxhQUFhViwyREFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCNUIsQ0FBQztNQWpCS1U7QUFtQk4sTUFBTUUsd0JBQXdCLENBQUMsRUFBRUMsV0FBVyxFQUFFOztJQUM1QyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWMsUUFBUUMsV0FBVztZQUN2QkYsYUFBYTtRQUNmLEdBQUc7UUFDSCxPQUFPLElBQU1HLGFBQWFGO0lBQzVCLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDVjtRQUNDYSxXQUFXTCxZQUFZLGFBQWE7UUFDcENNLE9BQU87WUFDTEMsWUFBWVAsWUFBWSxZQUFZO1lBQ3BDUSxTQUFTUixZQUFZLElBQUk7UUFDM0I7a0JBRUEsNEVBQUNOOzs4QkFDQyw4REFBQ2U7OEJBQ0MsNEVBQUNDOzswQ0FDQyw4REFBQ0M7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdSLDhEQUFDQzs4QkFDRWIsZUFDQ0EsWUFBWWMsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN4Qiw4REFBQ0w7OzhDQUNDLDhEQUFDTTs4Q0FBSTFCLG1FQUFnQkEsQ0FBQ3dCLFFBQVFHLElBQUk7Ozs7Ozs4Q0FDbEMsOERBQUNEOzhDQUFJRixRQUFRSSxTQUFTOzs7Ozs7Z0NBQU87OENBQzdCLDhEQUFDRjs4Q0FDQyw0RUFBQ3pCLCtEQUFhQTt3Q0FDWjRCLE9BQU9MLFFBQVFLLEtBQUs7d0NBQ3BCQyxVQUFTO3dDQUNUQyxnQkFBZTtrREFFZFAsUUFBUUssS0FBSzs7Ozs7Ozs7Ozs7OENBR2xCLDhEQUFDSDs4Q0FBSUYsUUFBUVEsU0FBUzs7Ozs7OzhDQUN0Qiw4REFBQ047OENBQ0MsNEVBQUNwQjt3Q0FDQzJCLE1BQU1ULFFBQVFVLElBQUk7d0NBQ2xCQyxRQUFPO3dDQUNQQyxLQUFJO2tEQUNMOzs7Ozs7Ozs7Ozs7MkJBbEJJWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJ2QjtHQTNETWpCO01BQUFBO0FBNkROLCtEQUFlQSxxQkFBcUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWdQcm9ibGVtUGFnZS9UYWdEZXRhaWxQcm9ibGVtVGFibGUuanM/ZDYzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0aWVyTnVtYmVyQ2hhbmdlIGZyb20gXCIuLi8uLi91dGlscy90aWVyTnVtYmVyQ2hhbmdlXCI7XG5pbXBvcnQgeyBUcnVuY2F0ZWRUZXh0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL1RydW5jYXRlZFRleHRcIjtcblxuLy8g7LSI66GdIOuwsOqyvVxuY29uc3QgV3JhcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDIwcHggNDBweCA0MHB4IDQwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQ3LCAxMjksIDY1LCAwLjEpO1xuICBib3JkZXItdG9wOiA0cHggZG90dGVkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiA0cHggZG90dGVkIGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICB9XG5gO1xuXG4vLyDtkZxcbmNvbnN0IFRhYmxlID0gc3R5bGVkLnRhYmxlYFxuICBmb250LXNpemU6IDEuM3JlbTtcbiAgd2lkdGg6IDkwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gIHRoLFxuICB0ZCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JlZW47XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZWVuO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICB0aCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgMTI5LCA2NSwgMC4yKTtcbiAgfVxuXG4gIHRoOmZpcnN0LWNoaWxkLFxuICB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgdGg6bGFzdC1jaGlsZCxcbiAgdGQ6bGFzdC1jaGlsZCB7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdGgsXG4gICAgdGQge1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgIH1cbiAgICB0aDpmaXJzdC1jaGlsZCxcbiAgICB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICB3aWR0aDogMTAlO1xuICAgIH1cbiAgICB0aDpudGgtY2hpbGQoMiksXG4gICAgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgICAgIHdpZHRoOiAxNSU7XG4gICAgfVxuICAgIHRoOm50aC1jaGlsZCg0KSxcbiAgICB0ZDpudGgtY2hpbGQoNCkge1xuICAgICAgd2lkdGg6IDE1JTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IExpbmtCdXR0b24gPSBzdHlsZWQuYWBcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICB9XG5gO1xuXG5jb25zdCBUYWdEZXRhaWxQcm9ibGVtVGFibGUgPSAoeyBQcm9ibGVtRGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xuICAgIH0sIDQwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwQ29udGFpbmVyXG4gICAgICBjbGFzc05hbWU9e2lzVmlzaWJsZSA/IFwic2xpZGUtdXBcIiA6IFwiXCJ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCIsXG4gICAgICAgIG9wYWNpdHk6IGlzVmlzaWJsZSA/IDEgOiAwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+7Yuw7Ja0PC90aD5cbiAgICAgICAgICAgIDx0aD7rsojtmLg8L3RoPlxuICAgICAgICAgICAgPHRoPuyGlOu4jOuLpSDsoJzrqqk8L3RoPlxuICAgICAgICAgICAgPHRoPu2RvCDsgqzrnowg7IiYPC90aD5cbiAgICAgICAgICAgIDx0aD7tkbwg66y47KCcIOunge2BrDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtQcm9ibGVtRGF0YSAmJlxuICAgICAgICAgICAgUHJvYmxlbURhdGEubWFwKChQcm9ibGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPHRkPnt0aWVyTnVtYmVyQ2hhbmdlKFByb2JsZW0udGllcil9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e1Byb2JsZW0ucHJvYmxlbUlkfTwvdGQ+e1wiIFwifVxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxUcnVuY2F0ZWRUZXh0XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtQcm9ibGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjQzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGhNb2JpbGU9XCI4NXB4XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1Byb2JsZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L1RydW5jYXRlZFRleHQ+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e1Byb2JsZW0uc29sdmVkTnVtfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17UHJvYmxlbS5saW5rfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg6riw7Jes7ZWY6riwIVxuICAgICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgPC9XcmFwQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFnRGV0YWlsUHJvYmxlbVRhYmxlO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0aWVyTnVtYmVyQ2hhbmdlIiwiVHJ1bmNhdGVkVGV4dCIsIldyYXBDb250YWluZXIiLCJkaXYiLCJUYWJsZSIsInRhYmxlIiwiTGlua0J1dHRvbiIsImEiLCJUYWdEZXRhaWxQcm9ibGVtVGFibGUiLCJQcm9ibGVtRGF0YSIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImNsYXNzTmFtZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsIm9wYWNpdHkiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsIlByb2JsZW0iLCJpbmRleCIsInRkIiwidGllciIsInByb2JsZW1JZCIsInRpdGxlIiwibWF4V2lkdGgiLCJtYXhXaWR0aE1vYmlsZSIsInNvbHZlZE51bSIsImhyZWYiLCJsaW5rIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TagProblemPage/TagDetailProblemTable.js\n"));

/***/ })

});