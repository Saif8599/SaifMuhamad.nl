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

/***/ "./src/features/blocks/animation/AnimationBlock.tsx":
/*!**********************************************************!*\
  !*** ./src/features/blocks/animation/AnimationBlock.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/animations */ \"./src/features/ui/animations.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _about_AboutBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/AboutBlock */ \"./src/features/blocks/about/AboutBlock.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AnimationBlock = (props)=>{\n    _s();\n    const { className = \"\", ...restProps } = props;\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleButtonClick = ()=>{\n        setIsVisible(!isVisible);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(className),\n        ...restProps,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleButtonClick,\n                    children: \"Toggle Animation\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\blocks\\\\animation\\\\AnimationBlock.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    className: \"content\",\n                    initial: \"hidden\",\n                    animate: isVisible ? \"enter\" : \"hidden\",\n                    exit: \"exit\",\n                    variants: _ui_animations__WEBPACK_IMPORTED_MODULE_2__.contentPageAnimationVariants,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_about_AboutBlock__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        data: {\n                            title: \"hello\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\blocks\\\\animation\\\\AnimationBlock.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\blocks\\\\animation\\\\AnimationBlock.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\blocks\\\\animation\\\\AnimationBlock.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\blocks\\\\animation\\\\AnimationBlock.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AnimationBlock, \"QjDZesRvLCmcrZLxgN677nXnVLA=\");\n_c = AnimationBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimationBlock);\nvar _c;\n$RefreshReg$(_c, \"AnimationBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvYmxvY2tzL2FuaW1hdGlvbi9BbmltYXRpb25CbG9jay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUMyQjtBQUM1QjtBQUNNO0FBSTdDLE1BQU1LLGlCQUFpQixDQUFDQzs7SUFDdEIsTUFBTSxFQUFFQyxZQUFZLEVBQUUsRUFBRSxHQUFHQyxXQUFXLEdBQUdGO0lBRXpDLE1BQU0sQ0FBQ0csV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNVSxvQkFBb0I7UUFDeEJELGFBQWEsQ0FBQ0Q7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUwsV0FBVyxHQUFhLE9BQVZBO1FBQWMsR0FBR0MsU0FBUztrQkFDM0MsNEVBQUNJOzs4QkFDQyw4REFBQ0M7b0JBQU9DLFNBQVNIOzhCQUFtQjs7Ozs7OzhCQUNwQyw4REFBQ1IsaURBQU1BLENBQUNTLEdBQUc7b0JBQ1RMLFdBQVU7b0JBQ1ZRLFNBQVE7b0JBQ1JDLFNBQVNQLFlBQVksVUFBVTtvQkFDL0JRLE1BQUs7b0JBQ0xDLFVBQVVoQix3RUFBNEJBOzhCQUV0Qyw0RUFBQ0UseURBQVVBO3dCQUFDZSxNQUFNOzRCQUFDQyxPQUFPO3dCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNDO0dBekJNZjtLQUFBQTtBQTJCTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvYmxvY2tzL2FuaW1hdGlvbi9BbmltYXRpb25CbG9jay50c3g/MmRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbnRlbnRQYWdlQW5pbWF0aW9uVmFyaWFudHMgfSBmcm9tICcuLi8uLi91aS9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBBYm91dEJsb2NrIGZyb20gJy4uL2Fib3V0L0Fib3V0QmxvY2snO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25CbG9ja1Byb3BzIGV4dGVuZHMgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHt9XHJcblxyXG5jb25zdCBBbmltYXRpb25CbG9jayA9IChwcm9wczogQW5pbWF0aW9uQmxvY2tQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lID0gXCJcIiwgLi4ucmVzdFByb3BzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Zpc2libGUoIWlzVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9YH0gey4uLnJlc3RQcm9wc30+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+VG9nZ2xlIEFuaW1hdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgYW5pbWF0ZT17aXNWaXNpYmxlID8gXCJlbnRlclwiIDogXCJoaWRkZW5cIn1cclxuICAgICAgICAgIGV4aXQ9XCJleGl0XCJcclxuICAgICAgICAgIHZhcmlhbnRzPXtjb250ZW50UGFnZUFuaW1hdGlvblZhcmlhbnRzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBYm91dEJsb2NrIGRhdGE9e3t0aXRsZTogJ2hlbGxvJ319Lz5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbkJsb2NrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNvbnRlbnRQYWdlQW5pbWF0aW9uVmFyaWFudHMiLCJtb3Rpb24iLCJBYm91dEJsb2NrIiwiQW5pbWF0aW9uQmxvY2siLCJwcm9wcyIsImNsYXNzTmFtZSIsInJlc3RQcm9wcyIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImluaXRpYWwiLCJhbmltYXRlIiwiZXhpdCIsInZhcmlhbnRzIiwiZGF0YSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/blocks/animation/AnimationBlock.tsx\n"));

/***/ })

});