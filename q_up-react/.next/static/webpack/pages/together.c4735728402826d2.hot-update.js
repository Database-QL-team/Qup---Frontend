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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./components/Layout/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Title */ \"./components/Title.js\");\n/* harmony import */ var _components_TogetherPage_TogetherTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TogetherPage/TogetherTable */ \"./components/TogetherPage/TogetherTable.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ewhaRankingData = [\n    {\n        problemNumber: \"저녁 메뉴 추천 해주세요\",\n        problemTitle: \"2839\",\n        handle: \"yellowsubmarine372\"\n    },\n    {\n        problemNumber: \"출력을 어떻게 하나용\",\n        problemTitle: \"1234\",\n        handle: \"celina324\"\n    }\n];\nconst Together = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialPosts);\n    const handleWriteClick = ()=>{\n        router.push(\"/togetherWrite\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sentence: \"- 함께 풀어요 -\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleWriteClick,\n                style: {\n                    backgroundColor: \"green\",\n                    color: \"white\"\n                },\n                children: \"글쓰기\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TogetherPage_TogetherTable__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                ewhaRankingData: ewhaRankingData\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/pages/together.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Together, \"c69pGbghehTunFfBoBNI7qKezTM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Together;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Together);\nvar _c;\n$RefreshReg$(_c, \"Together\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2dldGhlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDUztBQUNUO0FBQ0E7QUFDNkI7QUFFckUsTUFBTU0sa0JBQWtCO0lBQ3RCO1FBQ0VDLGVBQWU7UUFDZkMsY0FBYztRQUNkQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFRixlQUFlO1FBQ2ZDLGNBQWM7UUFDZEMsUUFBUTtJQUNWO0NBQ0Q7QUFFRCxNQUFNQyxXQUFXOztJQUNmLE1BQU1DLFNBQVNSLHNEQUFTQTtJQUN4QixNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUNhO0lBRW5DLE1BQU1DLG1CQUFtQjtRQUN2QkosT0FBT0ssSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ2QsaUVBQU1BOzswQkFDTCw4REFBQ0UseURBQUtBO2dCQUFDYSxVQUFVOzs7Ozs7MEJBRWpCLDhEQUFDQztnQkFDQ0MsU0FBU0o7Z0JBQ1RLLE9BQU87b0JBQUVDLGlCQUFpQjtvQkFBU0MsT0FBTztnQkFBUTswQkFDbkQ7Ozs7OzswQkFHRCw4REFBQ2pCLDhFQUFhQTtnQkFBQ0MsaUJBQWlCQTs7Ozs7Ozs7Ozs7O0FBR3RDO0dBckJNSTs7UUFDV1Asa0RBQVNBOzs7S0FEcEJPO0FBdUJOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RvZ2V0aGVyLmpzPzA1MzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi9jb21wb25lbnRzL1RpdGxlXCI7XG5pbXBvcnQgVG9nZXRoZXJUYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub2dldGhlclBhZ2UvVG9nZXRoZXJUYWJsZVwiO1xuXG5jb25zdCBld2hhUmFua2luZ0RhdGEgPSBbXG4gIHtcbiAgICBwcm9ibGVtTnVtYmVyOiBcIuyggOuFgSDrqZTribQg7LaU7LKcIO2VtOyjvOyEuOyalFwiLFxuICAgIHByb2JsZW1UaXRsZTogXCIyODM5XCIsXG4gICAgaGFuZGxlOiBcInllbGxvd3N1Ym1hcmluZTM3MlwiLFxuICB9LFxuICB7XG4gICAgcHJvYmxlbU51bWJlcjogXCLstpzroKXsnYQg7Ja065a76rKMIO2VmOuCmOyaqVwiLFxuICAgIHByb2JsZW1UaXRsZTogXCIxMjM0XCIsXG4gICAgaGFuZGxlOiBcImNlbGluYTMyNFwiLFxuICB9LFxuXTtcblxuY29uc3QgVG9nZXRoZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKGluaXRpYWxQb3N0cyk7XG5cbiAgY29uc3QgaGFuZGxlV3JpdGVDbGljayA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChcIi90b2dldGhlcldyaXRlXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxUaXRsZSBzZW50ZW5jZT17XCItIO2VqOq7mCDtkoDslrTsmpQgLVwifSAvPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVdyaXRlQ2xpY2t9XG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XG4gICAgICA+XG4gICAgICAgIOq4gOyTsOq4sFxuICAgICAgPC9idXR0b24+XG4gICAgICA8VG9nZXRoZXJUYWJsZSBld2hhUmFua2luZ0RhdGE9e2V3aGFSYW5raW5nRGF0YX0gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2V0aGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJ1c2VSb3V0ZXIiLCJUaXRsZSIsIlRvZ2V0aGVyVGFibGUiLCJld2hhUmFua2luZ0RhdGEiLCJwcm9ibGVtTnVtYmVyIiwicHJvYmxlbVRpdGxlIiwiaGFuZGxlIiwiVG9nZXRoZXIiLCJyb3V0ZXIiLCJwb3N0cyIsInNldFBvc3RzIiwiaW5pdGlhbFBvc3RzIiwiaGFuZGxlV3JpdGVDbGljayIsInB1c2giLCJzZW50ZW5jZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/together.js\n"));

/***/ })

});