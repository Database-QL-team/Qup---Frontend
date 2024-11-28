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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_TruncatedText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TruncatedText */ \"./utils/TruncatedText.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// 초록 배경\nconst WrapContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  padding: 20px 40px 40px 40px;\n  margin: 30px auto;\n  background: rgba(47, 129, 65, 0.1);\n  border-top: 4px dotted black;\n  border-bottom: 4px dotted black;\n  text-align: center;\n  width: 80%;\n\n  @media (max-width: 700px) {\n    margin: 20px auto;\n    padding: 10px 20px;\n  }\n`;\n_c = WrapContainer;\n// 표\nconst Table = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].table`\n  font-size: 1.3rem;\n  width: 90%;\n  background: rgba(0, 0, 0, 0);\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 40px;\n\n  th,\n  td {\n    padding: 10px 5px;\n    border-bottom: 1px solid green;\n    border-top: 1px solid green;\n    text-align: left;\n  }\n\n  th {\n    font-weight: bold;\n    background-color: rgba(47, 129, 65, 0.2);\n  }\n\n  th:first-child,\n  td:first-child {\n    padding-left: 20px;\n  }\n\n  th:last-child,\n  td:last-child {\n  }\n\n  @media (max-width: 700px) {\n    width: 100%;\n    font-size: 0.7rem;\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n`;\n_c1 = Table;\nconst LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a`\n  background-color: green;\n  color: white;\n  padding: 5px 10px;\n  text-decoration: none;\n  border-radius: 5px;\n  font-size: 1rem;\n  cursor: pointer;\n\n  &:hover {\n    background-color: darkgreen;\n  }\n\n  @media (max-width: 700px) {\n    font-size: 0.6rem;\n    padding: 4px 8px;\n  }\n`;\n_c2 = LinkButton;\nconst StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img`\n  width: 50%;\n  height: auto;\n\n  @media (max-width: 700px) {\n    width: 80%;\n  }\n`;\n_c3 = StyledImage;\nconst DifficultyDetailProblemTable = ({ name, ProblemData })=>{\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setIsVisible(true);\n        }, 400);\n        return ()=>clearTimeout(timer);\n    }, []);\n    console.log(name);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrapContainer, {\n        className: isVisible ? \"slide-up\" : \"\",\n        style: {\n            visibility: isVisible ? \"visible\" : \"hidden\",\n            opacity: isVisible ? 1 : 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"번호\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"제목\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"푼 사람 수\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"링크\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: ProblemData && ProblemData.map((Problem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: Problem.problemId\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_TruncatedText__WEBPACK_IMPORTED_MODULE_2__.TruncatedText, {\n                                            title: Problem.title,\n                                            maxWidth: \"430px\",\n                                            maxWidthMobile: \"60px\",\n                                            children: Problem.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                            lineNumber: 122,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: Problem.solvedNum\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkButton, {\n                                            href: Problem.link,\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            children: \"기여하기!\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                            lineNumber: 132,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                lineNumber: 119,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            name === \"B4\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledImage, {\n                src: \"/images/b4.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                lineNumber: 144,\n                columnNumber: 25\n            }, undefined),\n            name === \"B5\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledImage, {\n                src: \"/images/b5.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                lineNumber: 145,\n                columnNumber: 25\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DifficultyDetailProblemTable, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c4 = DifficultyDetailProblemTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DifficultyDetailProblemTable);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"WrapContainer\");\n$RefreshReg$(_c1, \"Table\");\n$RefreshReg$(_c2, \"LinkButton\");\n$RefreshReg$(_c3, \"StyledImage\");\n$RefreshReg$(_c4, \"DifficultyDetailProblemTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RpZmZpY3VsdHlQcm9ibGVtUGFnZS9EaWZmaWN1bHR5RGV0YWlsUHJvYmxlbVRhYmxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUNZO0FBQ087QUFFMUQsUUFBUTtBQUNSLE1BQU1LLGdCQUFnQkwsNkRBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqQyxDQUFDO0tBYktLO0FBZU4sSUFBSTtBQUNKLE1BQU1FLFFBQVFQLCtEQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0MzQixDQUFDO01BdENLTztBQXdDTixNQUFNRSxhQUFhVCwyREFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCNUIsQ0FBQztNQWpCS1M7QUFtQk4sTUFBTUUsY0FBY1gsNkRBQVUsQ0FBQzs7Ozs7OztBQU8vQixDQUFDO01BUEtXO0FBUU4sTUFBTUUsK0JBQStCLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUU7O0lBQ3pELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNZ0IsUUFBUUMsV0FBVztZQUN2QkYsYUFBYTtRQUNmLEdBQUc7UUFDSCxPQUFPLElBQU1HLGFBQWFGO0lBQzVCLEdBQUcsRUFBRTtJQUNMRyxRQUFRQyxHQUFHLENBQUNSO0lBQ1oscUJBQ0UsOERBQUNUO1FBQ0NrQixXQUFXUCxZQUFZLGFBQWE7UUFDcENRLE9BQU87WUFDTEMsWUFBWVQsWUFBWSxZQUFZO1lBQ3BDVSxTQUFTVixZQUFZLElBQUk7UUFDM0I7OzBCQUVBLDhEQUFDVDs7a0NBQ0MsOERBQUNvQjtrQ0FDQyw0RUFBQ0M7OzhDQUNDLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNDO2tDQUNFZixlQUNDQSxZQUFZZ0IsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN4Qiw4REFBQ0w7O2tEQUNDLDhEQUFDTTtrREFBSUYsUUFBUUcsU0FBUzs7Ozs7O2tEQUN0Qiw4REFBQ0Q7a0RBQ0MsNEVBQUM5QiwrREFBYUE7NENBQ1pnQyxPQUFPSixRQUFRSSxLQUFLOzRDQUNwQkMsVUFBUzs0Q0FDVEMsZ0JBQWU7c0RBRWROLFFBQVFJLEtBQUs7Ozs7Ozs7Ozs7O2tEQUdsQiw4REFBQ0Y7a0RBQUlGLFFBQVFPLFNBQVM7Ozs7OztrREFDdEIsOERBQUNMO2tEQUNDLDRFQUFDekI7NENBQ0MrQixNQUFNUixRQUFRUyxJQUFJOzRDQUNsQkMsUUFBTzs0Q0FDUEMsS0FBSTtzREFDTDs7Ozs7Ozs7Ozs7OytCQWpCSVY7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QmhCbkIsU0FBUyxzQkFBUSw4REFBQ0g7Z0JBQVlpQyxLQUFJOzs7Ozs7WUFDbEM5QixTQUFTLHNCQUFRLDhEQUFDSDtnQkFBWWlDLEtBQUk7Ozs7Ozs7Ozs7OztBQUd6QztHQTNETS9CO01BQUFBO0FBNkROLCtEQUFlQSw0QkFBNEJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EaWZmaWN1bHR5UHJvYmxlbVBhZ2UvRGlmZmljdWx0eURldGFpbFByb2JsZW1UYWJsZS5qcz8xMDExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHJ1bmNhdGVkVGV4dCB9IGZyb20gXCIuLi8uLi91dGlscy9UcnVuY2F0ZWRUZXh0XCI7XG5cbi8vIOy0iOuhnSDrsLDqsr1cbmNvbnN0IFdyYXBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAyMHB4IDQwcHggNDBweCA0MHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgYmFja2dyb3VuZDogcmdiYSg0NywgMTI5LCA2NSwgMC4xKTtcbiAgYm9yZGVyLXRvcDogNHB4IGRvdHRlZCBibGFjaztcbiAgYm9yZGVyLWJvdHRvbTogNHB4IGRvdHRlZCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgfVxuYDtcblxuLy8g7ZGcXG5jb25zdCBUYWJsZSA9IHN0eWxlZC50YWJsZWBcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcblxuICB0aCxcbiAgdGQge1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmVlbjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JlZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIHRoIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCAxMjksIDY1LCAwLjIpO1xuICB9XG5cbiAgdGg6Zmlyc3QtY2hpbGQsXG4gIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cblxuICB0aDpsYXN0LWNoaWxkLFxuICB0ZDpsYXN0LWNoaWxkIHtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuYDtcblxuY29uc3QgTGlua0J1dHRvbiA9IHN0eWxlZC5hYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEltYWdlID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbmA7XG5jb25zdCBEaWZmaWN1bHR5RGV0YWlsUHJvYmxlbVRhYmxlID0gKHsgbmFtZSwgUHJvYmxlbURhdGEgfSkgPT4ge1xuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcbiAgICB9LCA0MDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKG5hbWUpO1xuICByZXR1cm4gKFxuICAgIDxXcmFwQ29udGFpbmVyXG4gICAgICBjbGFzc05hbWU9e2lzVmlzaWJsZSA/IFwic2xpZGUtdXBcIiA6IFwiXCJ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCIsXG4gICAgICAgIG9wYWNpdHk6IGlzVmlzaWJsZSA/IDEgOiAwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+67KI7Zi4PC90aD5cbiAgICAgICAgICAgIDx0aD7soJzrqqk8L3RoPlxuICAgICAgICAgICAgPHRoPu2RvCDsgqzrnowg7IiYPC90aD5cbiAgICAgICAgICAgIDx0aD7rp4Htgaw8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7UHJvYmxlbURhdGEgJiZcbiAgICAgICAgICAgIFByb2JsZW1EYXRhLm1hcCgoUHJvYmxlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDx0ZD57UHJvYmxlbS5wcm9ibGVtSWR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8VHJ1bmNhdGVkVGV4dFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17UHJvYmxlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI0MzBweFwiXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoTW9iaWxlPVwiNjBweFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtQcm9ibGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9UcnVuY2F0ZWRUZXh0PlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntQcm9ibGVtLnNvbHZlZE51bX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e1Byb2JsZW0ubGlua31cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIOq4sOyXrO2VmOq4sCFcbiAgICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgICAge25hbWUgPT09IFwiQjRcIiAmJiA8U3R5bGVkSW1hZ2Ugc3JjPVwiL2ltYWdlcy9iNC5wbmdcIiAvPn1cbiAgICAgIHtuYW1lID09PSBcIkI1XCIgJiYgPFN0eWxlZEltYWdlIHNyYz1cIi9pbWFnZXMvYjUucG5nXCIgLz59XG4gICAgPC9XcmFwQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlmZmljdWx0eURldGFpbFByb2JsZW1UYWJsZTtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVHJ1bmNhdGVkVGV4dCIsIldyYXBDb250YWluZXIiLCJkaXYiLCJUYWJsZSIsInRhYmxlIiwiTGlua0J1dHRvbiIsImEiLCJTdHlsZWRJbWFnZSIsImltZyIsIkRpZmZpY3VsdHlEZXRhaWxQcm9ibGVtVGFibGUiLCJuYW1lIiwiUHJvYmxlbURhdGEiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiUHJvYmxlbSIsImluZGV4IiwidGQiLCJwcm9ibGVtSWQiLCJ0aXRsZSIsIm1heFdpZHRoIiwibWF4V2lkdGhNb2JpbGUiLCJzb2x2ZWROdW0iLCJocmVmIiwibGluayIsInRhcmdldCIsInJlbCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DifficultyProblemPage/DifficultyDetailProblemTable.js\n"));

/***/ })

});