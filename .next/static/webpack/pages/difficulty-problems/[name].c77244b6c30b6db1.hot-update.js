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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_TruncatedText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TruncatedText */ \"./utils/TruncatedText.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// 초록 배경\nconst WrapContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  padding: 20px 40px 40px 40px;\n  margin: 30px auto;\n  background: rgba(47, 129, 65, 0.1);\n  border-top: 4px dotted black;\n  border-bottom: 4px dotted black;\n  text-align: center;\n  width: 80%;\n\n  @media (max-width: 700px) {\n    margin: 20px auto;\n    padding: 10px 20px;\n  }\n`;\n_c = WrapContainer;\n// 표\nconst Table = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].table`\n  font-size: 1.3rem;\n  width: 90%;\n  background: rgba(0, 0, 0, 0);\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 40px;\n\n  th,\n  td {\n    padding: 10px 5px;\n    border-bottom: 1px solid green;\n    border-top: 1px solid green;\n    text-align: left;\n  }\n\n  th {\n    font-weight: bold;\n    background-color: rgba(47, 129, 65, 0.2);\n  }\n\n  th:first-child,\n  td:first-child {\n    padding-left: 20px;\n  }\n\n  th:last-child,\n  td:last-child {\n  }\n\n  @media (max-width: 700px) {\n    width: 100%;\n    font-size: 0.7rem;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    th:first-child,\n    td:first-child {\n      padding-left: 5px;\n    }\n  }\n`;\n_c1 = Table;\nconst LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a`\n  background-color: green;\n  color: white;\n  padding: 5px 10px;\n  text-decoration: none;\n  border-radius: 5px;\n  font-size: 1rem;\n  cursor: pointer;\n\n  &:hover {\n    background-color: darkgreen;\n  }\n\n  @media (max-width: 700px) {\n    font-size: 0.6rem;\n    padding: 4px 8px;\n  }\n`;\n_c2 = LinkButton;\nconst StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img`\n  width: 70%;\n  @media (max-width: 700px) {\n    width: 80%;\n  }\n`;\n_c3 = StyledImage;\nconst DifficultyDetailProblemTable = ({ name, ProblemData })=>{\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setIsVisible(true);\n        }, 400);\n        return ()=>clearTimeout(timer);\n    }, []);\n    console.log(name);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrapContainer, {\n        className: isVisible ? \"slide-up\" : \"\",\n        style: {\n            visibility: isVisible ? \"visible\" : \"hidden\",\n            opacity: isVisible ? 1 : 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"번호\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"제목\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"푼 사람 수\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"링크\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: ProblemData && ProblemData.map((Problem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: Problem.problemId\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                        lineNumber: 122,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_TruncatedText__WEBPACK_IMPORTED_MODULE_2__.TruncatedText, {\n                                            title: Problem.title,\n                                            maxWidth: \"430px\",\n                                            maxWidthMobile: \"60px\",\n                                            children: Problem.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                            lineNumber: 124,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                        lineNumber: 123,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: Problem.solvedNum\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkButton, {\n                                            href: Problem.link,\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            children: \"기여하기!\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                            lineNumber: 134,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                        lineNumber: 133,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                                lineNumber: 121,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, undefined),\n            name === \"B4\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledImage, {\n                src: \"/images/b4.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                lineNumber: 146,\n                columnNumber: 25\n            }, undefined),\n            name === \"B5\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledImage, {\n                src: \"/images/b5.png\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n                lineNumber: 147,\n                columnNumber: 25\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jung-eunchae/Desktop/code/QL/Qup-Frontend/components/DifficultyProblemPage/DifficultyDetailProblemTable.js\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DifficultyDetailProblemTable, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c4 = DifficultyDetailProblemTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DifficultyDetailProblemTable);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"WrapContainer\");\n$RefreshReg$(_c1, \"Table\");\n$RefreshReg$(_c2, \"LinkButton\");\n$RefreshReg$(_c3, \"StyledImage\");\n$RefreshReg$(_c4, \"DifficultyDetailProblemTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RpZmZpY3VsdHlQcm9ibGVtUGFnZS9EaWZmaWN1bHR5RGV0YWlsUHJvYmxlbVRhYmxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUNZO0FBQ087QUFFMUQsUUFBUTtBQUNSLE1BQU1LLGdCQUFnQkwsNkRBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFqQyxDQUFDO0tBYktLO0FBZU4sSUFBSTtBQUNKLE1BQU1FLFFBQVFQLCtEQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDM0IsQ0FBQztNQTFDS087QUE0Q04sTUFBTUUsYUFBYVQsMkRBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjVCLENBQUM7TUFqQktTO0FBbUJOLE1BQU1FLGNBQWNYLDZEQUFVLENBQUM7Ozs7O0FBSy9CLENBQUM7TUFMS1c7QUFNTixNQUFNRSwrQkFBK0IsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRTs7SUFDekQsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdkLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1nQixRQUFRQyxXQUFXO1lBQ3ZCRixhQUFhO1FBQ2YsR0FBRztRQUNILE9BQU8sSUFBTUcsYUFBYUY7SUFDNUIsR0FBRyxFQUFFO0lBQ0xHLFFBQVFDLEdBQUcsQ0FBQ1I7SUFDWixxQkFDRSw4REFBQ1Q7UUFDQ2tCLFdBQVdQLFlBQVksYUFBYTtRQUNwQ1EsT0FBTztZQUNMQyxZQUFZVCxZQUFZLFlBQVk7WUFDcENVLFNBQVNWLFlBQVksSUFBSTtRQUMzQjs7MEJBRUEsOERBQUNUOztrQ0FDQyw4REFBQ29CO2tDQUNDLDRFQUFDQzs7OENBQ0MsOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHUiw4REFBQ0M7a0NBQ0VmLGVBQ0NBLFlBQVlnQixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3hCLDhEQUFDTDs7a0RBQ0MsOERBQUNNO2tEQUFJRixRQUFRRyxTQUFTOzs7Ozs7a0RBQ3RCLDhEQUFDRDtrREFDQyw0RUFBQzlCLCtEQUFhQTs0Q0FDWmdDLE9BQU9KLFFBQVFJLEtBQUs7NENBQ3BCQyxVQUFTOzRDQUNUQyxnQkFBZTtzREFFZE4sUUFBUUksS0FBSzs7Ozs7Ozs7Ozs7a0RBR2xCLDhEQUFDRjtrREFBSUYsUUFBUU8sU0FBUzs7Ozs7O2tEQUN0Qiw4REFBQ0w7a0RBQ0MsNEVBQUN6Qjs0Q0FDQytCLE1BQU1SLFFBQVFTLElBQUk7NENBQ2xCQyxRQUFPOzRDQUNQQyxLQUFJO3NEQUNMOzs7Ozs7Ozs7Ozs7K0JBakJJVjs7Ozs7Ozs7Ozs7Ozs7OztZQXlCaEJuQixTQUFTLHNCQUFRLDhEQUFDSDtnQkFBWWlDLEtBQUk7Ozs7OztZQUNsQzlCLFNBQVMsc0JBQVEsOERBQUNIO2dCQUFZaUMsS0FBSTs7Ozs7Ozs7Ozs7O0FBR3pDO0dBM0RNL0I7TUFBQUE7QUE2RE4sK0RBQWVBLDRCQUE0QkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RpZmZpY3VsdHlQcm9ibGVtUGFnZS9EaWZmaWN1bHR5RGV0YWlsUHJvYmxlbVRhYmxlLmpzPzEwMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcnVuY2F0ZWRUZXh0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL1RydW5jYXRlZFRleHRcIjtcblxuLy8g7LSI66GdIOuwsOqyvVxuY29uc3QgV3JhcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDIwcHggNDBweCA0MHB4IDQwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQ3LCAxMjksIDY1LCAwLjEpO1xuICBib3JkZXItdG9wOiA0cHggZG90dGVkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiA0cHggZG90dGVkIGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICB9XG5gO1xuXG4vLyDtkZxcbmNvbnN0IFRhYmxlID0gc3R5bGVkLnRhYmxlYFxuICBmb250LXNpemU6IDEuM3JlbTtcbiAgd2lkdGg6IDkwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gIHRoLFxuICB0ZCB7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZWVuO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmVlbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgdGgge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDEyOSwgNjUsIDAuMik7XG4gIH1cblxuICB0aDpmaXJzdC1jaGlsZCxcbiAgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxuXG4gIHRoOmxhc3QtY2hpbGQsXG4gIHRkOmxhc3QtY2hpbGQge1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHRoOmZpcnN0LWNoaWxkLFxuICAgIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTGlua0J1dHRvbiA9IHN0eWxlZC5hYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEltYWdlID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDcwJTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuYDtcbmNvbnN0IERpZmZpY3VsdHlEZXRhaWxQcm9ibGVtVGFibGUgPSAoeyBuYW1lLCBQcm9ibGVtRGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xuICAgIH0sIDQwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtdKTtcbiAgY29uc29sZS5sb2cobmFtZSk7XG4gIHJldHVybiAoXG4gICAgPFdyYXBDb250YWluZXJcbiAgICAgIGNsYXNzTmFtZT17aXNWaXNpYmxlID8gXCJzbGlkZS11cFwiIDogXCJcIn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHZpc2liaWxpdHk6IGlzVmlzaWJsZSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIixcbiAgICAgICAgb3BhY2l0eTogaXNWaXNpYmxlID8gMSA6IDAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD7rsojtmLg8L3RoPlxuICAgICAgICAgICAgPHRoPuygnOuqqTwvdGg+XG4gICAgICAgICAgICA8dGg+7ZG8IOyCrOuejCDsiJg8L3RoPlxuICAgICAgICAgICAgPHRoPuunge2BrDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtQcm9ibGVtRGF0YSAmJlxuICAgICAgICAgICAgUHJvYmxlbURhdGEubWFwKChQcm9ibGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPHRkPntQcm9ibGVtLnByb2JsZW1JZH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxUcnVuY2F0ZWRUZXh0XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtQcm9ibGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjQzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGhNb2JpbGU9XCI2MHB4XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1Byb2JsZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L1RydW5jYXRlZFRleHQ+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e1Byb2JsZW0uc29sdmVkTnVtfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17UHJvYmxlbS5saW5rfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg6riw7Jes7ZWY6riwIVxuICAgICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgICB7bmFtZSA9PT0gXCJCNFwiICYmIDxTdHlsZWRJbWFnZSBzcmM9XCIvaW1hZ2VzL2I0LnBuZ1wiIC8+fVxuICAgICAge25hbWUgPT09IFwiQjVcIiAmJiA8U3R5bGVkSW1hZ2Ugc3JjPVwiL2ltYWdlcy9iNS5wbmdcIiAvPn1cbiAgICA8L1dyYXBDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaWZmaWN1bHR5RGV0YWlsUHJvYmxlbVRhYmxlO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUcnVuY2F0ZWRUZXh0IiwiV3JhcENvbnRhaW5lciIsImRpdiIsIlRhYmxlIiwidGFibGUiLCJMaW5rQnV0dG9uIiwiYSIsIlN0eWxlZEltYWdlIiwiaW1nIiwiRGlmZmljdWx0eURldGFpbFByb2JsZW1UYWJsZSIsIm5hbWUiLCJQcm9ibGVtRGF0YSIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJvcGFjaXR5IiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJQcm9ibGVtIiwiaW5kZXgiLCJ0ZCIsInByb2JsZW1JZCIsInRpdGxlIiwibWF4V2lkdGgiLCJtYXhXaWR0aE1vYmlsZSIsInNvbHZlZE51bSIsImhyZWYiLCJsaW5rIiwidGFyZ2V0IiwicmVsIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DifficultyProblemPage/DifficultyDetailProblemTable.js\n"));

/***/ })

});