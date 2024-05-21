"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/together",{

/***/ "./pages/together.js":
/*!***************************!*\
  !*** ./pages/together.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Title */ \"./components/Title.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst initialPosts = [\n    {\n        title: \"선동 배달\",\n        number: \"2839\",\n        author: \"yellowsubmarine372\"\n    }\n];\nconst Together = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialPosts);\n    const handleWriteClick = ()=>{\n        router.push(\"/togetherWrite\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sentence: \"- 함께 풀어요 -\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleWriteClick,\n                style: {\n                    backgroundColor: \"green\",\n                    color: \"white\"\n                },\n                children: \"글쓰기\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"문제 제목\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"문제 번호\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"게시자 핸들\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: posts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: post.number\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: post.author\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Together, \"c69pGbghehTunFfBoBNI7qKezTM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Together;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Together);\nvar _c;\n$RefreshReg$(_c, \"Together\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2dldGhlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFDQTtBQUV4QyxNQUFNSSxlQUFlO0lBQ25CO1FBQUVDLE9BQU87UUFBU0MsUUFBUTtRQUFRQyxRQUFRO0lBQXFCO0NBQ2hFO0FBRUQsTUFBTUMsV0FBVzs7SUFDZixNQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDRztJQUVuQyxNQUFNUSxtQkFBbUI7UUFDdkJILE9BQU9JLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ1gseURBQUtBO2dCQUFDWSxVQUFVOzs7Ozs7MEJBRWpCLDhEQUFDQztnQkFDQ0MsU0FBU0w7Z0JBQ1RNLE9BQU87b0JBQUVDLGlCQUFpQjtvQkFBU0MsT0FBTztnQkFBUTswQkFDbkQ7Ozs7OzswQkFHRCw4REFBQ0M7O2tDQUNDLDhEQUFDQztrQ0FDQyw0RUFBQ0M7OzhDQUNDLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNDO2tDQUNFZixNQUFNZ0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQ0w7O2tEQUNDLDhEQUFDTTtrREFBSUYsS0FBS3RCLEtBQUs7Ozs7OztrREFDZiw4REFBQ3dCO2tEQUFJRixLQUFLckIsTUFBTTs7Ozs7O2tEQUNoQiw4REFBQ3VCO2tEQUFJRixLQUFLcEIsTUFBTTs7Ozs7OzsrQkFIVHFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXJCO0dBdENNcEI7O1FBQ1dOLGtEQUFTQTs7O0tBRHBCTTtBQXdDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2dldGhlci5qcz8wNTMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGl0bGVcIjtcblxuY29uc3QgaW5pdGlhbFBvc3RzID0gW1xuICB7IHRpdGxlOiBcIuyEoOuPmSDrsLDri6xcIiwgbnVtYmVyOiBcIjI4MzlcIiwgYXV0aG9yOiBcInllbGxvd3N1Ym1hcmluZTM3MlwiIH0sXG5dO1xuXG5jb25zdCBUb2dldGhlciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoaW5pdGlhbFBvc3RzKTtcblxuICBjb25zdCBoYW5kbGVXcml0ZUNsaWNrID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKFwiL3RvZ2V0aGVyV3JpdGVcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFRpdGxlIHNlbnRlbmNlPXtcIi0g7ZWo6ruYIO2SgOyWtOyalCAtXCJ9IC8+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17aGFuZGxlV3JpdGVDbGlja31cbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgID5cbiAgICAgICAg6riA7JOw6riwXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD7rrLjsoJwg7KCc66qpPC90aD5cbiAgICAgICAgICAgIDx0aD7rrLjsoJwg67KI7Zi4PC90aD5cbiAgICAgICAgICAgIDx0aD7qsozsi5zsnpAg7ZW465OkPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPHRkPntwb3N0LnRpdGxlfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57cG9zdC5udW1iZXJ9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntwb3N0LmF1dGhvcn08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2dldGhlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiVGl0bGUiLCJpbml0aWFsUG9zdHMiLCJ0aXRsZSIsIm51bWJlciIsImF1dGhvciIsIlRvZ2V0aGVyIiwicm91dGVyIiwicG9zdHMiLCJzZXRQb3N0cyIsImhhbmRsZVdyaXRlQ2xpY2siLCJwdXNoIiwiZGl2Iiwic2VudGVuY2UiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJwb3N0IiwiaW5kZXgiLCJ0ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/together.js\n"));

/***/ })

});