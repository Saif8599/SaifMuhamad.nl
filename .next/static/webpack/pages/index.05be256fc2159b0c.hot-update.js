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

/***/ "./src/features/ui/typography/Quote/Quote.tsx":
/*!****************************************************!*\
  !*** ./src/features/ui/typography/Quote/Quote.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Quote = (props)=>{\n    const { quote, author, authorSubscript, className = \"\", children, ...restProps } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n        className: \"text-center md:text-left \".concat(className),\n        ...restProps,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-3xl md:text-5xl font-serif\",\n                children: [\n                    \"“\",\n                    quote,\n                    \"”\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\ui\\\\typography\\\\Quote\\\\Quote.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            author && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 md:mt-10 md:text-2xl font-bold\",\n                children: author\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\ui\\\\typography\\\\Quote\\\\Quote.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined),\n            authorSubscript && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: authorSubscript\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\ui\\\\typography\\\\Quote\\\\Quote.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\ui\\\\typography\\\\Quote\\\\Quote.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Quote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quote);\nvar _c;\n$RefreshReg$(_c, \"Quote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvdWkvdHlwb2dyYXBoeS9RdW90ZS9RdW90ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBUTFCLE1BQU1DLFFBQVEsQ0FBQ0M7SUFDYixNQUFNLEVBQ0pDLEtBQUssRUFDTEMsTUFBTSxFQUNOQyxlQUFlLEVBQ2ZDLFlBQVksRUFBRSxFQUNkQyxRQUFRLEVBQ1IsR0FBR0MsV0FDSixHQUFHTjtJQUdKLHFCQUNFLDhEQUFDTztRQUNDSCxXQUFXLDRCQUFzQyxPQUFWQTtRQUN0QyxHQUFHRSxTQUFTOzswQkFFYiw4REFBQ0U7Z0JBQUlKLFdBQVk7O29CQUFrQztvQkFDekNIO29CQUFNOzs7Ozs7O1lBRWZDLHdCQUNDLDhEQUFDTTtnQkFBSUosV0FBVTswQkFDWkY7Ozs7OztZQUdKQyxpQ0FDQyw4REFBQ0s7Z0JBQUlKLFdBQVU7MEJBQUlEOzs7Ozs7Ozs7Ozs7QUFJM0I7S0E3Qk1KO0FBK0JOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy91aS90eXBvZ3JhcGh5L1F1b3RlL1F1b3RlLnRzeD8yZTAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFF1b3RlUHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4ge1xyXG4gIHF1b3RlOiBzdHJpbmc7XHJcbiAgYXV0aG9yPzogc3RyaW5nO1xyXG4gIGF1dGhvclN1YnNjcmlwdD86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUXVvdGUgPSAocHJvcHM6IFF1b3RlUHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBxdW90ZSxcclxuICAgIGF1dGhvcixcclxuICAgIGF1dGhvclN1YnNjcmlwdCxcclxuICAgIGNsYXNzTmFtZSA9ICcnLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICAuLi5yZXN0UHJvcHNcclxuICB9ID0gcHJvcHM7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJsb2NrcXVvdGVcclxuICAgICAgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0ICR7Y2xhc3NOYW1lfWB9XHJcbiAgICAgIHsuLi5yZXN0UHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1zZXJpZmB9PlxyXG4gICAgICAgICZsZHF1bzt7cXVvdGV9JnJkcXVvO1xyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2F1dGhvciAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1kOm10LTEwIG1kOnRleHQtMnhsIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAge2F1dGhvcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge2F1dGhvclN1YnNjcmlwdCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj57YXV0aG9yU3Vic2NyaXB0fTwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9ibG9ja3F1b3RlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdW90ZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUXVvdGUiLCJwcm9wcyIsInF1b3RlIiwiYXV0aG9yIiwiYXV0aG9yU3Vic2NyaXB0IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJyZXN0UHJvcHMiLCJibG9ja3F1b3RlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/ui/typography/Quote/Quote.tsx\n"));

/***/ })

});