"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/difficulty-problems/[name]",{

/***/ "./components/DifficultyProblemPage/DifficultyDetailProblemTable.js":
/*!**************************************************************************!*\
  !*** ./components/DifficultyProblemPage/DifficultyDetailProblemTable.js ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_TruncatedText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TruncatedText */ \"./utils/TruncatedText.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// 초록 배경\nconst WrapContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  padding: 20px 40px 40px 40px;\n  margin: 30px auto;\n  background: rgba(47, 129, 65, 0.1);\n  border-top: 4px dotted black;\n  border-bottom: 4px dotted black;\n  text-align: center;\n  width: 80%;\n\n  @media (max-width: 700px) {\n    margin: 20px auto;\n    padding: 10px 20px;\n  }\n`;\n_c = WrapContainer;\n// 표\nconst Table = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].table`\n  font-size: 1.3rem;\n  width: 90%;\n  background: rgba(0, 0, 0, 0);\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 40px;\n\n  th,\n  td {\n    padding: 10px 5px;\n    border-bottom: 1px solid green;\n    border-top: 1px solid green;\n    text-align: left;\n  }\n\n  th {\n    font-weight: bold;\n    background-color: rgba(47, 129, 65, 0.2);\n  }\n\n  th:first-child,\n  td:first-child {\n    padding-left: 20px;\n  }\n\n  th:last-child,\n  td:last-child {\n  }\n\n  @media (max-width: 700px) {\n    width: 100%;\n    font-size: 0.7rem;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    th:first-child,\n    td:first-child {\n      padding-left: 10px;\n    }\n\n    th:nth-child(3),\n    td:nth-child(3) {\n      width: 10%; /* 세 번째 요소의 너비 조정 */\n    }\n  }\n`;\n_c1 = Table;\nconst LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a`\n  background-color: green;\n  color: white;\n  padding: 5px 10px;\n  text-decoration: none;\n  border-radius: 5px;\n  font-size: 1rem;\n  cursor: pointer;\n\n  &:hover {\n    background-color: darkgreen;\n  }\n\n  @media (max-width: 700px) {\n    font-size: 0.6rem;\n    padding: 4px 8px;\n  }\n`;\n_c2 = LinkButton;\nconst StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img`\n  width: 70%;\n  @media (max-width: 700px) {\n    width: 100%;\n  }\n`;\n_c3 = StyledImage;\nconst DifficultyDetailProblemTable = ({ name, ProblemData })=>{\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setIsVisible(true);\n        }, 400);\n        return ()=>clearTimeout(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrapContainer, {\n        className: isVisible ? \"slide-up\" : \"\",\n        style: {\n            visibility: isVisible ? \"visible\" : \"hidden\",\n            opacity: isVisible ? 1 : 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"번호\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"제목\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"푼 사람 수\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"링크\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: ProblemData && ProblemData.map((Problem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: Problem.problemId\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_TruncatedText__WEBPACK_IMPORTED_MODULE_2__.TruncatedText, {\n                                            title: Problem.title,\n                                            maxWidth: \"430px\",\n                                            maxWidthMobile: \"90px\",\n                                            children: Problem.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                            lineNumber: 129,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                        lineNumber: 128,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: Problem.solvedNum\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                        lineNumber: 137,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkButton, {\n                                            href: Problem.link,\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            children: \"기여하기!\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                            lineNumber: 139,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                        lineNumber: 138,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                lineNumber: 126,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined),\n            name === \"B4\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledImage, {\n                src: \"/images/b4.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                lineNumber: 151,\n                columnNumber: 25\n            }, undefined),\n            name === \"B5\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledImage, {\n                src: \"/images/b5.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                lineNumber: 152,\n                columnNumber: 25\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DifficultyDetailProblemTable, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c4 = DifficultyDetailProblemTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DifficultyDetailProblemTable);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"WrapContainer\");\n$RefreshReg$(_c1, \"Table\");\n$RefreshReg$(_c2, \"LinkButton\");\n$RefreshReg$(_c3, \"StyledImage\");\n$RefreshReg$(_c4, \"DifficultyDetailProblemTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RpZmZpY3VsdHlQcm9ibGVtUGFnZS9EaWZmaWN1bHR5RGV0YWlsUHJvYmxlbVRhYmxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUNZO0FBQ087QUFFMUQsUUFBUTtBQUNSLE1BQU1LLGdCQUFnQkwsNkRBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqQyxDQUFDO0tBYktLO0FBZU4sSUFBSTtBQUNKLE1BQU1FLFFBQVFQLCtEQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0MzQixDQUFDO01BL0NLTztBQWlETixNQUFNRSxhQUFhVCwyREFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCNUIsQ0FBQztNQWpCS1M7QUFtQk4sTUFBTUUsY0FBY1gsNkRBQVUsQ0FBQzs7Ozs7QUFLL0IsQ0FBQztNQUxLVztBQU1OLE1BQU1FLCtCQUErQixDQUFDLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFOztJQUN6RCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWdCLFFBQVFDLFdBQVc7WUFDdkJGLGFBQWE7UUFDZixHQUFHO1FBQ0gsT0FBTyxJQUFNRyxhQUFhRjtJQUM1QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2I7UUFDQ2dCLFdBQVdMLFlBQVksYUFBYTtRQUNwQ00sT0FBTztZQUNMQyxZQUFZUCxZQUFZLFlBQVk7WUFDcENRLFNBQVNSLFlBQVksSUFBSTtRQUMzQjs7MEJBRUEsOERBQUNUOztrQ0FDQyw4REFBQ2tCO2tDQUNDLDRFQUFDQzs7OENBQ0MsOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHUiw4REFBQ0M7a0NBQ0ViLGVBQ0NBLFlBQVljLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDeEIsOERBQUNMOztrREFDQyw4REFBQ007a0RBQUlGLFFBQVFHLFNBQVM7Ozs7OztrREFDdEIsOERBQUNEO2tEQUNDLDRFQUFDNUIsK0RBQWFBOzRDQUNaOEIsT0FBT0osUUFBUUksS0FBSzs0Q0FDcEJDLFVBQVM7NENBQ1RDLGdCQUFlO3NEQUVkTixRQUFRSSxLQUFLOzs7Ozs7Ozs7OztrREFHbEIsOERBQUNGO2tEQUFJRixRQUFRTyxTQUFTOzs7Ozs7a0RBQ3RCLDhEQUFDTDtrREFDQyw0RUFBQ3ZCOzRDQUNDNkIsTUFBTVIsUUFBUVMsSUFBSTs0Q0FDbEJDLFFBQU87NENBQ1BDLEtBQUk7c0RBQ0w7Ozs7Ozs7Ozs7OzsrQkFqQklWOzs7Ozs7Ozs7Ozs7Ozs7O1lBeUJoQmpCLFNBQVMsc0JBQVEsOERBQUNIO2dCQUFZK0IsS0FBSTs7Ozs7O1lBQ2xDNUIsU0FBUyxzQkFBUSw4REFBQ0g7Z0JBQVkrQixLQUFJOzs7Ozs7Ozs7Ozs7QUFHekM7R0EzRE03QjtNQUFBQTtBQTZETiwrREFBZUEsNEJBQTRCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGlmZmljdWx0eVByb2JsZW1QYWdlL0RpZmZpY3VsdHlEZXRhaWxQcm9ibGVtVGFibGUuanM/MTAxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRydW5jYXRlZFRleHQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvVHJ1bmNhdGVkVGV4dFwiO1xuXG4vLyDstIjroZ0g67Cw6rK9XG5jb25zdCBXcmFwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMjBweCA0MHB4IDQwcHggNDBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIGJhY2tncm91bmQ6IHJnYmEoNDcsIDEyOSwgNjUsIDAuMSk7XG4gIGJvcmRlci10b3A6IDRweCBkb3R0ZWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDRweCBkb3R0ZWQgYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIH1cbmA7XG5cbi8vIO2RnFxuY29uc3QgVGFibGUgPSBzdHlsZWQudGFibGVgXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB3aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG5cbiAgdGgsXG4gIHRkIHtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JlZW47XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZWVuO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICB0aCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgMTI5LCA2NSwgMC4yKTtcbiAgfVxuXG4gIHRoOmZpcnN0LWNoaWxkLFxuICB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgdGg6bGFzdC1jaGlsZCxcbiAgdGQ6bGFzdC1jaGlsZCB7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdGg6Zmlyc3QtY2hpbGQsXG4gICAgdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cblxuICAgIHRoOm50aC1jaGlsZCgzKSxcbiAgICB0ZDpudGgtY2hpbGQoMykge1xuICAgICAgd2lkdGg6IDEwJTsgLyog7IS4IOuyiOynuCDsmpTshozsnZgg64SI67mEIOyhsOyglSAqL1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTGlua0J1dHRvbiA9IHN0eWxlZC5hYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEltYWdlID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDcwJTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5jb25zdCBEaWZmaWN1bHR5RGV0YWlsUHJvYmxlbVRhYmxlID0gKHsgbmFtZSwgUHJvYmxlbURhdGEgfSkgPT4ge1xuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcbiAgICB9LCA0MDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcENvbnRhaW5lclxuICAgICAgY2xhc3NOYW1lPXtpc1Zpc2libGUgPyBcInNsaWRlLXVwXCIgOiBcIlwifVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdmlzaWJpbGl0eTogaXNWaXNpYmxlID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiLFxuICAgICAgICBvcGFjaXR5OiBpc1Zpc2libGUgPyAxIDogMCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPuuyiO2YuDwvdGg+XG4gICAgICAgICAgICA8dGg+7KCc66qpPC90aD5cbiAgICAgICAgICAgIDx0aD7tkbwg7IKs656MIOyImDwvdGg+XG4gICAgICAgICAgICA8dGg+66eB7YGsPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge1Byb2JsZW1EYXRhICYmXG4gICAgICAgICAgICBQcm9ibGVtRGF0YS5tYXAoKFByb2JsZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8dGQ+e1Byb2JsZW0ucHJvYmxlbUlkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPFRydW5jYXRlZFRleHRcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1Byb2JsZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiNDMwcHhcIlxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aE1vYmlsZT1cIjkwcHhcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7UHJvYmxlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvVHJ1bmNhdGVkVGV4dD5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57UHJvYmxlbS5zb2x2ZWROdW19PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgICAgICAgICBocmVmPXtQcm9ibGVtLmxpbmt9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDquLDsl6ztlZjquLAhXG4gICAgICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICAgIHtuYW1lID09PSBcIkI0XCIgJiYgPFN0eWxlZEltYWdlIHNyYz1cIi9pbWFnZXMvYjQucG5nXCIgLz59XG4gICAgICB7bmFtZSA9PT0gXCJCNVwiICYmIDxTdHlsZWRJbWFnZSBzcmM9XCIvaW1hZ2VzL2I1LnBuZ1wiIC8+fVxuICAgIDwvV3JhcENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpZmZpY3VsdHlEZXRhaWxQcm9ibGVtVGFibGU7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRydW5jYXRlZFRleHQiLCJXcmFwQ29udGFpbmVyIiwiZGl2IiwiVGFibGUiLCJ0YWJsZSIsIkxpbmtCdXR0b24iLCJhIiwiU3R5bGVkSW1hZ2UiLCJpbWciLCJEaWZmaWN1bHR5RGV0YWlsUHJvYmxlbVRhYmxlIiwibmFtZSIsIlByb2JsZW1EYXRhIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiUHJvYmxlbSIsImluZGV4IiwidGQiLCJwcm9ibGVtSWQiLCJ0aXRsZSIsIm1heFdpZHRoIiwibWF4V2lkdGhNb2JpbGUiLCJzb2x2ZWROdW0iLCJocmVmIiwibGluayIsInRhcmdldCIsInJlbCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DifficultyProblemPage/DifficultyDetailProblemTable.js\n"));

/***/ })

});