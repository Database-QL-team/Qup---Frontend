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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_tierNumberChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/tierNumberChange */ \"./utils/tierNumberChange.js\");\n/* harmony import */ var _utils_TruncatedText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/TruncatedText */ \"./utils/TruncatedText.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// 초록 배경\nconst WrapContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div`\n  padding: 20px 40px 40px 40px;\n  margin: 30px auto;\n  background: rgba(47, 129, 65, 0.1);\n  border-top: 4px dotted black;\n  border-bottom: 4px dotted black;\n  text-align: center;\n  width: 80%;\n\n  @media (max-width: 700px) {\n    margin: 20px auto;\n    padding: 10px 20px;\n  }\n`;\n_c = WrapContainer;\n// 표\nconst Table = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].table`\n  font-size: 1.3rem;\n  width: 90%;\n  background: rgba(0, 0, 0, 0);\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 40px;\n\n  th,\n  td {\n    padding: 10px;\n    border-bottom: 1px solid green;\n    border-top: 1px solid green;\n    text-align: left;\n  }\n\n  th {\n    font-weight: bold;\n    background-color: rgba(47, 129, 65, 0.2);\n  }\n\n  th:first-child,\n  td:first-child {\n    padding-left: 10px;\n  }\n\n  th:last-child,\n  td:last-child {\n  }\n\n  @media (max-width: 700px) {\n    width: 100%;\n    font-size: 0.7rem;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    th:first-child,\n    td:first-child {\n      padding-left: 10px;\n    }\n    th:nth-child(2),\n    td:nth-child(2) {\n      width: 15%;\n    }\n    th:nth-child(4),\n    td:nth-child(4) {\n      width: 15%;\n    }\n  }\n`;\n_c1 = Table;\nconst LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a`\n  background-color: green;\n  color: white;\n  padding: 5px 10px;\n  text-decoration: none;\n  border-radius: 5px;\n  font-size: 1rem;\n  cursor: pointer;\n\n  &:hover {\n    background-color: darkgreen;\n  }\n\n  @media (max-width: 700px) {\n    font-size: 0.6rem;\n    padding: 4px 8px;\n  }\n`;\n_c2 = LinkButton;\nconst TagDetailProblemTable = ({ ProblemData })=>{\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setIsVisible(true);\n        }, 400);\n        return ()=>clearTimeout(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrapContainer, {\n        className: isVisible ? \"slide-up\" : \"\",\n        style: {\n            visibility: isVisible ? \"visible\" : \"hidden\",\n            opacity: isVisible ? 1 : 0\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"티어\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"번호\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"솔브닥 제목\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"푼 사람 수\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"푼 문제 링크\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                lineNumber: 119,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: ProblemData && ProblemData.map((Problem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: (0,_utils_tierNumberChange__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Problem.tier)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                    lineNumber: 126,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: Problem.problemId\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 17\n                                }, undefined),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_TruncatedText__WEBPACK_IMPORTED_MODULE_3__.TruncatedText, {\n                                        title: Problem.title,\n                                        maxWidth: \"430px\",\n                                        maxWidthMobile: \"80px\",\n                                        children: Problem.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                    lineNumber: 128,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: Problem.solvedNum\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                    lineNumber: 137,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkButton, {\n                                        href: Problem.link,\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        children: \"기여하기!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                            lineNumber: 125,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n            lineNumber: 112,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/TagProblemPage/TagDetailProblemTable.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TagDetailProblemTable, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c3 = TagDetailProblemTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TagDetailProblemTable);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"WrapContainer\");\n$RefreshReg$(_c1, \"Table\");\n$RefreshReg$(_c2, \"LinkButton\");\n$RefreshReg$(_c3, \"TagDetailProblemTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhZ1Byb2JsZW1QYWdlL1RhZ0RldGFpbFByb2JsZW1UYWJsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVDO0FBQ1k7QUFDUztBQUNGO0FBRTFELFFBQVE7QUFDUixNQUFNTSxnQkFBZ0JOLDZEQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakMsQ0FBQztLQWJLTTtBQWVOLElBQUk7QUFDSixNQUFNRSxRQUFRUiwrREFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtEM0IsQ0FBQztNQWxES1E7QUFvRE4sTUFBTUUsYUFBYVYsMkRBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjVCLENBQUM7TUFqQktVO0FBbUJOLE1BQU1FLHdCQUF3QixDQUFDLEVBQUVDLFdBQVcsRUFBRTs7SUFDNUMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1jLFFBQVFDLFdBQVc7WUFDdkJGLGFBQWE7UUFDZixHQUFHO1FBQ0gsT0FBTyxJQUFNRyxhQUFhRjtJQUM1QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1Y7UUFDQ2EsV0FBV0wsWUFBWSxhQUFhO1FBQ3BDTSxPQUFPO1lBQ0xDLFlBQVlQLFlBQVksWUFBWTtZQUNwQ1EsU0FBU1IsWUFBWSxJQUFJO1FBQzNCO2tCQUVBLDRFQUFDTjs7OEJBQ0MsOERBQUNlOzhCQUNDLDRFQUFDQzs7MENBQ0MsOERBQUNDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHUiw4REFBQ0M7OEJBQ0ViLGVBQ0NBLFlBQVljLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDeEIsOERBQUNMOzs4Q0FDQyw4REFBQ007OENBQUkxQixtRUFBZ0JBLENBQUN3QixRQUFRRyxJQUFJOzs7Ozs7OENBQ2xDLDhEQUFDRDs4Q0FBSUYsUUFBUUksU0FBUzs7Ozs7O2dDQUFPOzhDQUM3Qiw4REFBQ0Y7OENBQ0MsNEVBQUN6QiwrREFBYUE7d0NBQ1o0QixPQUFPTCxRQUFRSyxLQUFLO3dDQUNwQkMsVUFBUzt3Q0FDVEMsZ0JBQWU7a0RBRWRQLFFBQVFLLEtBQUs7Ozs7Ozs7Ozs7OzhDQUdsQiw4REFBQ0g7OENBQUlGLFFBQVFRLFNBQVM7Ozs7Ozs4Q0FDdEIsOERBQUNOOzhDQUNDLDRFQUFDcEI7d0NBQ0MyQixNQUFNVCxRQUFRVSxJQUFJO3dDQUNsQkMsUUFBTzt3Q0FDUEMsS0FBSTtrREFDTDs7Ozs7Ozs7Ozs7OzJCQWxCSVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCdkI7R0EzRE1qQjtNQUFBQTtBQTZETiwrREFBZUEscUJBQXFCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFnUHJvYmxlbVBhZ2UvVGFnRGV0YWlsUHJvYmxlbVRhYmxlLmpzP2Q2MzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdGllck51bWJlckNoYW5nZSBmcm9tIFwiLi4vLi4vdXRpbHMvdGllck51bWJlckNoYW5nZVwiO1xuaW1wb3J0IHsgVHJ1bmNhdGVkVGV4dCB9IGZyb20gXCIuLi8uLi91dGlscy9UcnVuY2F0ZWRUZXh0XCI7XG5cbi8vIOy0iOuhnSDrsLDqsr1cbmNvbnN0IFdyYXBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAyMHB4IDQwcHggNDBweCA0MHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgYmFja2dyb3VuZDogcmdiYSg0NywgMTI5LCA2NSwgMC4xKTtcbiAgYm9yZGVyLXRvcDogNHB4IGRvdHRlZCBibGFjaztcbiAgYm9yZGVyLWJvdHRvbTogNHB4IGRvdHRlZCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgfVxuYDtcblxuLy8g7ZGcXG5jb25zdCBUYWJsZSA9IHN0eWxlZC50YWJsZWBcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcblxuICB0aCxcbiAgdGQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZWVuO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmVlbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgdGgge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDEyOSwgNjUsIDAuMik7XG4gIH1cblxuICB0aDpmaXJzdC1jaGlsZCxcbiAgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuXG4gIHRoOmxhc3QtY2hpbGQsXG4gIHRkOmxhc3QtY2hpbGQge1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHRoOmZpcnN0LWNoaWxkLFxuICAgIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgdGg6bnRoLWNoaWxkKDIpLFxuICAgIHRkOm50aC1jaGlsZCgyKSB7XG4gICAgICB3aWR0aDogMTUlO1xuICAgIH1cbiAgICB0aDpudGgtY2hpbGQoNCksXG4gICAgdGQ6bnRoLWNoaWxkKDQpIHtcbiAgICAgIHdpZHRoOiAxNSU7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBMaW5rQnV0dG9uID0gc3R5bGVkLmFgXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgfVxuYDtcblxuY29uc3QgVGFnRGV0YWlsUHJvYmxlbVRhYmxlID0gKHsgUHJvYmxlbURhdGEgfSkgPT4ge1xuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcbiAgICB9LCA0MDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcENvbnRhaW5lclxuICAgICAgY2xhc3NOYW1lPXtpc1Zpc2libGUgPyBcInNsaWRlLXVwXCIgOiBcIlwifVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdmlzaWJpbGl0eTogaXNWaXNpYmxlID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiLFxuICAgICAgICBvcGFjaXR5OiBpc1Zpc2libGUgPyAxIDogMCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPu2LsOyWtDwvdGg+XG4gICAgICAgICAgICA8dGg+67KI7Zi4PC90aD5cbiAgICAgICAgICAgIDx0aD7shpTruIzri6Ug7KCc66qpPC90aD5cbiAgICAgICAgICAgIDx0aD7tkbwg7IKs656MIOyImDwvdGg+XG4gICAgICAgICAgICA8dGg+7ZG8IOusuOygnCDrp4Htgaw8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7UHJvYmxlbURhdGEgJiZcbiAgICAgICAgICAgIFByb2JsZW1EYXRhLm1hcCgoUHJvYmxlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDx0ZD57dGllck51bWJlckNoYW5nZShQcm9ibGVtLnRpZXIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntQcm9ibGVtLnByb2JsZW1JZH08L3RkPntcIiBcIn1cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8VHJ1bmNhdGVkVGV4dFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17UHJvYmxlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI0MzBweFwiXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoTW9iaWxlPVwiODBweFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtQcm9ibGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9UcnVuY2F0ZWRUZXh0PlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntQcm9ibGVtLnNvbHZlZE51bX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e1Byb2JsZW0ubGlua31cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIOq4sOyXrO2VmOq4sCFcbiAgICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvV3JhcENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ0RldGFpbFByb2JsZW1UYWJsZTtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidGllck51bWJlckNoYW5nZSIsIlRydW5jYXRlZFRleHQiLCJXcmFwQ29udGFpbmVyIiwiZGl2IiwiVGFibGUiLCJ0YWJsZSIsIkxpbmtCdXR0b24iLCJhIiwiVGFnRGV0YWlsUHJvYmxlbVRhYmxlIiwiUHJvYmxlbURhdGEiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJjbGFzc05hbWUiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJvcGFjaXR5IiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJQcm9ibGVtIiwiaW5kZXgiLCJ0ZCIsInRpZXIiLCJwcm9ibGVtSWQiLCJ0aXRsZSIsIm1heFdpZHRoIiwibWF4V2lkdGhNb2JpbGUiLCJzb2x2ZWROdW0iLCJocmVmIiwibGluayIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TagProblemPage/TagDetailProblemTable.js\n"));

/***/ })

});