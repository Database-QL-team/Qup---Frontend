"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MainPage/RankingBoxWrap.js":
/*!***********************************************!*\
  !*** ./components/MainPage/RankingBoxWrap.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _RankingBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RankingBox */ \"./components/MainPage/RankingBox.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst RankingBoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div`\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 30px;\n  transition: visibility 0s, opacity 0.5s linear;\n`;\n_c = RankingBoxContainer;\nconst RankingBoxWrap = ()=>{\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setIsVisible(true);\n        }, 1000);\n        return ()=>clearTimeout(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RankingBoxContainer, {\n        className: isVisible ? \"slide-up\" : \"\",\n        style: {\n            animationDelay: \"500ms\",\n            visibility: isVisible ? \"visible\" : \"hidden\",\n            opacity: isVisible ? 1 : 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RankingBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"현재 백준 단체 랭킹 순위\",\n                rankingNum: \"122위\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/MainPage/RankingBoxWrap.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RankingBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"121위 : LG CNS와의 차이\",\n                rankingNum: \"N문제\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/MainPage/RankingBoxWrap.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jung-eunchae/Desktop/code/Qup-Frontend/q_up-react/components/MainPage/RankingBoxWrap.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RankingBoxWrap, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c1 = RankingBoxWrap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RankingBoxWrap);\nvar _c, _c1;\n$RefreshReg$(_c, \"RankingBoxContainer\");\n$RefreshReg$(_c1, \"RankingBoxWrap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5QYWdlL1JhbmtpbmdCb3hXcmFwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUNEO0FBQ2E7QUFFbkQsTUFBTUssc0JBQXNCTCw2REFBVSxDQUFDOzs7Ozs7QUFNdkMsQ0FBQztLQU5LSztBQVFOLE1BQU1FLGlCQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1PLFFBQVFDLFdBQVc7WUFDdkJGLGFBQWE7UUFDZixHQUFHO1FBQ0gsT0FBTyxJQUFNRyxhQUFhRjtJQUM1QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0w7UUFDQ1EsV0FBV0wsWUFBWSxhQUFhO1FBQ3BDTSxPQUFPO1lBQ0xDLGdCQUFnQjtZQUNoQkMsWUFBWVIsWUFBWSxZQUFZO1lBQ3BDUyxTQUFTVCxZQUFZLElBQUk7UUFDM0I7OzBCQUVBLDhEQUFDUCxtREFBVUE7Z0JBQUNpQixPQUFNO2dCQUFpQkMsWUFBVzs7Ozs7OzBCQUM5Qyw4REFBQ2xCLG1EQUFVQTtnQkFBQ2lCLE9BQU07Z0JBQXFCQyxZQUFXOzs7Ozs7Ozs7Ozs7QUFHeEQ7R0F2Qk1aO01BQUFBO0FBeUJOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFpblBhZ2UvUmFua2luZ0JveFdyYXAuanM/ZTNlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFJhbmtpbmdCb3ggZnJvbSBcIi4vUmFua2luZ0JveFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUmFua2luZ0JveENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XG5gO1xuXG5jb25zdCBSYW5raW5nQm94V3JhcCA9ICgpID0+IHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc1Zpc2libGUodHJ1ZSk7XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxSYW5raW5nQm94Q29udGFpbmVyXG4gICAgICBjbGFzc05hbWU9e2lzVmlzaWJsZSA/IFwic2xpZGUtdXBcIiA6IFwiXCJ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBhbmltYXRpb25EZWxheTogXCI1MDBtc1wiLFxuICAgICAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCIsXG4gICAgICAgIG9wYWNpdHk6IGlzVmlzaWJsZSA/IDEgOiAwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8UmFua2luZ0JveCB0aXRsZT1cIu2YhOyerCDrsLHspIAg64uo7LK0IOuere2CuSDsiJzsnIRcIiByYW5raW5nTnVtPVwiMTIy7JyEXCIgLz5cbiAgICAgIDxSYW5raW5nQm94IHRpdGxlPVwiMTIx7JyEIDogTEcgQ05T7JmA7J2YIOywqOydtFwiIHJhbmtpbmdOdW09XCJO66y47KCcXCIgLz5cbiAgICA8L1JhbmtpbmdCb3hDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYW5raW5nQm94V3JhcDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJSYW5raW5nQm94IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJhbmtpbmdCb3hDb250YWluZXIiLCJkaXYiLCJSYW5raW5nQm94V3JhcCIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImNsYXNzTmFtZSIsInN0eWxlIiwiYW5pbWF0aW9uRGVsYXkiLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsInRpdGxlIiwicmFua2luZ051bSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MainPage/RankingBoxWrap.js\n"));

/***/ })

});