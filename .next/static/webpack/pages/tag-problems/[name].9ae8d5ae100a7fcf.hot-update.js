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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_tierNumberChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/tierNumberChange */ \"./utils/tierNumberChange.js\");\n/* harmony import */ var _utils_TruncatedText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/TruncatedText */ \"./utils/TruncatedText.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// 초록 배경\nconst WrapContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  padding: 20px 40px 40px 40px;\n  margin: 30px auto;\n  background: rgba(47, 129, 65, 0.1);\n  border-top: 4px dotted black;\n  border-bottom: 4px dotted black;\n  text-align: center;\n  width: 80%;\n\n  @media (max-width: 700px) {\n    margin: 20px auto;\n    padding: 10px 20px;\n  }\n`;\n_c = WrapContainer;\n// 표\nconst Table = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].table`\n  font-size: 1.3rem;\n  width: 90%;\n  background: rgba(0, 0, 0, 0);\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 40px;\n\n  th,\n  td {\n    padding: 10px;\n    border-bottom: 1px solid green;\n    border-top: 1px solid green;\n    text-align: left;\n  }\n\n  th {\n    font-weight: bold;\n    background-color: rgba(47, 129, 65, 0.2);\n  }\n\n  th:first-child,\n  td:first-child {\n    padding-left: 10px;\n  }\n\n  th:last-child,\n  td:last-child {\n  }\n\n  @media (max-width: 700px) {\n    width: 100%;\n    font-size: 0.7rem;\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n`;\n_c1 = Table;\nconst LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a`\n  background-color: green;\n  color: white;\n  padding: 5px 10px;\n  text-decoration: none;\n  border-radius: 5px;\n  font-size: 1rem;\n  cursor: pointer;\n\n  &:hover {\n    background-color: darkgreen;\n  }\n\n  @media (max-width: 700px) {\n    font-size: 0.6rem;\n    padding: 4px 8px;\n  }\n`;\n_c2 = LinkButton;\nconst TagDetailProblemTable = ({ ProblemData })=>{\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setIsVisible(true);\n        }, 400);\n        return ()=>clearTimeout(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrapContainer, {\n        className: isVisible ? \"slide-up\" : \"\",\n        style: {\n            visibility: isVisible ? \"visible\" : \"hidden\",\n            opacity: isVisible ? 1 : 0\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"티어\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"번호\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"솔브닥 제목\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"푼 사람 수\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"푼 문제 링크\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: ProblemData && ProblemData.map((Problem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: Problem?.tier ? (0,_utils_tierNumberChange__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Problem.tier) : \"N/A\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: Problem.problemId\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 17\n                                }, undefined),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_TruncatedText__WEBPACK_IMPORTED_MODULE_3__.TruncatedText, {\n                                        title: Problem.title,\n                                        maxWidth: \"430px\",\n                                        maxWidthMobile: \"100px\",\n                                        children: Problem.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: Problem.solvedNum\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkButton, {\n                                        href: Problem.link,\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        children: \"기여하기!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                    lineNumber: 128,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                            lineNumber: 113,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n            lineNumber: 100,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TagDetailProblemTable, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c3 = TagDetailProblemTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TagDetailProblemTable);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"WrapContainer\");\n$RefreshReg$(_c1, \"Table\");\n$RefreshReg$(_c2, \"LinkButton\");\n$RefreshReg$(_c3, \"TagDetailProblemTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhZ1Byb2JsZW1QYWdlL1RhZ0RldGFpbFByb2JsZW1UYWJsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVDO0FBQ1k7QUFDUztBQUNGO0FBRTFELFFBQVE7QUFDUixNQUFNTSxnQkFBZ0JOLDZEQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakMsQ0FBQztLQWJLTTtBQWVOLElBQUk7QUFDSixNQUFNRSxRQUFRUiwrREFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDM0IsQ0FBQztNQXRDS1E7QUF3Q04sTUFBTUUsYUFBYVYsMkRBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjVCLENBQUM7TUFqQktVO0FBbUJOLE1BQU1FLHdCQUF3QixDQUFDLEVBQUVDLFdBQVcsRUFBRTs7SUFDNUMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1jLFFBQVFDLFdBQVc7WUFDdkJGLGFBQWE7UUFDZixHQUFHO1FBQ0gsT0FBTyxJQUFNRyxhQUFhRjtJQUM1QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1Y7UUFDQ2EsV0FBV0wsWUFBWSxhQUFhO1FBQ3BDTSxPQUFPO1lBQ0xDLFlBQVlQLFlBQVksWUFBWTtZQUNwQ1EsU0FBU1IsWUFBWSxJQUFJO1FBQzNCO2tCQUVBLDRFQUFDTjs7OEJBQ0MsOERBQUNlOzhCQUNDLDRFQUFDQzs7MENBQ0MsOERBQUNDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHUiw4REFBQ0M7OEJBQ0ViLGVBQ0NBLFlBQVljLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDeEIsOERBQUNMOzs4Q0FDQyw4REFBQ007OENBQ0VGLFNBQVNHLE9BQU8zQixtRUFBZ0JBLENBQUN3QixRQUFRRyxJQUFJLElBQUk7Ozs7Ozs4Q0FFcEQsOERBQUNEOzhDQUFJRixRQUFRSSxTQUFTOzs7Ozs7Z0NBQU87OENBQzdCLDhEQUFDRjs4Q0FDQyw0RUFBQ3pCLCtEQUFhQTt3Q0FDWjRCLE9BQU9MLFFBQVFLLEtBQUs7d0NBQ3BCQyxVQUFTO3dDQUNUQyxnQkFBZTtrREFFZFAsUUFBUUssS0FBSzs7Ozs7Ozs7Ozs7OENBR2xCLDhEQUFDSDs4Q0FBSUYsUUFBUVEsU0FBUzs7Ozs7OzhDQUN0Qiw4REFBQ047OENBQ0MsNEVBQUNwQjt3Q0FDQzJCLE1BQU1ULFFBQVFVLElBQUk7d0NBQ2xCQyxRQUFPO3dDQUNQQyxLQUFJO2tEQUNMOzs7Ozs7Ozs7Ozs7MkJBcEJJWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJ2QjtHQTdETWpCO01BQUFBO0FBK0ROLCtEQUFlQSxxQkFBcUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWdQcm9ibGVtUGFnZS9UYWdEZXRhaWxQcm9ibGVtVGFibGUuanM/ZDYzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0aWVyTnVtYmVyQ2hhbmdlIGZyb20gXCIuLi8uLi91dGlscy90aWVyTnVtYmVyQ2hhbmdlXCI7XG5pbXBvcnQgeyBUcnVuY2F0ZWRUZXh0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL1RydW5jYXRlZFRleHRcIjtcblxuLy8g7LSI66GdIOuwsOqyvVxuY29uc3QgV3JhcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDIwcHggNDBweCA0MHB4IDQwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQ3LCAxMjksIDY1LCAwLjEpO1xuICBib3JkZXItdG9wOiA0cHggZG90dGVkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiA0cHggZG90dGVkIGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICB9XG5gO1xuXG4vLyDtkZxcbmNvbnN0IFRhYmxlID0gc3R5bGVkLnRhYmxlYFxuICBmb250LXNpemU6IDEuM3JlbTtcbiAgd2lkdGg6IDkwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gIHRoLFxuICB0ZCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JlZW47XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZWVuO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICB0aCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgMTI5LCA2NSwgMC4yKTtcbiAgfVxuXG4gIHRoOmZpcnN0LWNoaWxkLFxuICB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgdGg6bGFzdC1jaGlsZCxcbiAgdGQ6bGFzdC1jaGlsZCB7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IExpbmtCdXR0b24gPSBzdHlsZWQuYWBcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICB9XG5gO1xuXG5jb25zdCBUYWdEZXRhaWxQcm9ibGVtVGFibGUgPSAoeyBQcm9ibGVtRGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xuICAgIH0sIDQwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwQ29udGFpbmVyXG4gICAgICBjbGFzc05hbWU9e2lzVmlzaWJsZSA/IFwic2xpZGUtdXBcIiA6IFwiXCJ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCIsXG4gICAgICAgIG9wYWNpdHk6IGlzVmlzaWJsZSA/IDEgOiAwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+7Yuw7Ja0PC90aD5cbiAgICAgICAgICAgIDx0aD7rsojtmLg8L3RoPlxuICAgICAgICAgICAgPHRoPuyGlOu4jOuLpSDsoJzrqqk8L3RoPlxuICAgICAgICAgICAgPHRoPu2RvCDsgqzrnowg7IiYPC90aD5cbiAgICAgICAgICAgIDx0aD7tkbwg66y47KCcIOunge2BrDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtQcm9ibGVtRGF0YSAmJlxuICAgICAgICAgICAgUHJvYmxlbURhdGEubWFwKChQcm9ibGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAge1Byb2JsZW0/LnRpZXIgPyB0aWVyTnVtYmVyQ2hhbmdlKFByb2JsZW0udGllcikgOiBcIk4vQVwifVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntQcm9ibGVtLnByb2JsZW1JZH08L3RkPntcIiBcIn1cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8VHJ1bmNhdGVkVGV4dFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17UHJvYmxlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI0MzBweFwiXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoTW9iaWxlPVwiMTAwcHhcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7UHJvYmxlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvVHJ1bmNhdGVkVGV4dD5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57UHJvYmxlbS5zb2x2ZWROdW19PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgICAgICAgICBocmVmPXtQcm9ibGVtLmxpbmt9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDquLDsl6ztlZjquLAhXG4gICAgICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L1dyYXBDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWdEZXRhaWxQcm9ibGVtVGFibGU7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRpZXJOdW1iZXJDaGFuZ2UiLCJUcnVuY2F0ZWRUZXh0IiwiV3JhcENvbnRhaW5lciIsImRpdiIsIlRhYmxlIiwidGFibGUiLCJMaW5rQnV0dG9uIiwiYSIsIlRhZ0RldGFpbFByb2JsZW1UYWJsZSIsIlByb2JsZW1EYXRhIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiUHJvYmxlbSIsImluZGV4IiwidGQiLCJ0aWVyIiwicHJvYmxlbUlkIiwidGl0bGUiLCJtYXhXaWR0aCIsIm1heFdpZHRoTW9iaWxlIiwic29sdmVkTnVtIiwiaHJlZiIsImxpbmsiLCJ0YXJnZXQiLCJyZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TagProblemPage/TagDetailProblemTable.js\n"));

/***/ })

});