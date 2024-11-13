"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/difficulty-problems",{

/***/ "./components/ui/Title.js":
/*!********************************!*\
  !*** ./components/ui/Title.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst TitleSectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  align-items: center;\n  justify-content: space-between;\n  width: 61%;\n  padding: 20px;\n  box-sizing: border-box;\n\n  @media (max-width: 700px) {\n    width: 90%;\n    padding: 10px;\n    margin-top: 90px;\n  }\n`;\n_c = TitleSectionContainer;\nconst CenterText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  font-size: 2rem;\n  font-weight: 500;\n  text-align: center;\n  flex-grow: 1;\n  font-family: \"Malgun Gothic\", \"Apple SD Gothic Neo\", \"Nanum Gothic\", \"Arial\";\n  color: #156827;\n\n  @media (max-width: 700px) {\n    font-size: 1.3rem;\n  }\n`;\n_c1 = CenterText;\nconst Title = ({ sentence })=>{\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setIsVisible(true);\n        }, 300);\n        return ()=>clearTimeout(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSectionContainer, {\n        className: isVisible ? \"slide-up\" : \"\",\n        style: {\n            visibility: isVisible ? \"visible\" : \"hidden\",\n            opacity: isVisible ? 1 : 0\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CenterText, {\n            children: sentence\n        }, void 0, false, {\n            fileName: \"/Users/goldchae/Desktop/code/Qup-Frontend/components/ui/Title.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/goldchae/Desktop/code/Qup-Frontend/components/ui/Title.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Title, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c2 = Title;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Title);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"TitleSectionContainer\");\n$RefreshReg$(_c1, \"CenterText\");\n$RefreshReg$(_c2, \"Title\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL1RpdGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBQ1k7QUFFbkQsTUFBTUksd0JBQXdCSiw2REFBVSxDQUFDOzs7Ozs7Ozs7Ozs7QUFZekMsQ0FBQztLQVpLSTtBQWFOLE1BQU1FLGFBQWFOLDZEQUFVLENBQUM7Ozs7Ozs7Ozs7O0FBVzlCLENBQUM7TUFYS007QUFhTixNQUFNQyxRQUFRLENBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUN6QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsUUFBUUMsV0FBVztZQUN2QkYsYUFBYTtRQUNmLEdBQUc7UUFDSCxPQUFPLElBQU1HLGFBQWFGO0lBQzVCLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUDtRQUNDVSxXQUFXTCxZQUFZLGFBQWE7UUFDcENNLE9BQU87WUFDTEMsWUFBWVAsWUFBWSxZQUFZO1lBQ3BDUSxTQUFTUixZQUFZLElBQUk7UUFDM0I7a0JBRUEsNEVBQUNIO3NCQUFZRTs7Ozs7Ozs7Ozs7QUFHbkI7R0FyQk1EO01BQUFBO0FBdUJOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvVGl0bGUuanM/NDBhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVGl0bGVTZWN0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogNjElO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICB9XG5gO1xuY29uc3QgQ2VudGVyVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIk1hbGd1biBHb3RoaWNcIiwgXCJBcHBsZSBTRCBHb3RoaWMgTmVvXCIsIFwiTmFudW0gR290aGljXCIsIFwiQXJpYWxcIjtcbiAgY29sb3I6ICMxNTY4Mjc7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbmA7XG5cbmNvbnN0IFRpdGxlID0gKHsgc2VudGVuY2UgfSkgPT4ge1xuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcbiAgICB9LCAzMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGl0bGVTZWN0aW9uQ29udGFpbmVyXG4gICAgICBjbGFzc05hbWU9e2lzVmlzaWJsZSA/IFwic2xpZGUtdXBcIiA6IFwiXCJ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCIsXG4gICAgICAgIG9wYWNpdHk6IGlzVmlzaWJsZSA/IDEgOiAwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q2VudGVyVGV4dD57c2VudGVuY2V9PC9DZW50ZXJUZXh0PlxuICAgIDwvVGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRpdGxlU2VjdGlvbkNvbnRhaW5lciIsImRpdiIsIkNlbnRlclRleHQiLCJUaXRsZSIsInNlbnRlbmNlIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/Title.js\n"));

/***/ })

});