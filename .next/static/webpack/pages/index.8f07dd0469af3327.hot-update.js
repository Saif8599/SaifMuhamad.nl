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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/animations */ \"./src/features/ui/animations.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _about_AboutBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/AboutBlock */ \"./src/features/blocks/about/AboutBlock.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AnimationBlock = (props)=>{\n    _s();\n    const { className = \"\", ...restProps } = props;\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ture);\n    const handleButtonClick = ()=>{\n        setIsVisible(!isVisible);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(className),\n        ...restProps,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleButtonClick,\n                    children: \"Toggle Animation\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\blocks\\\\animation\\\\AnimationBlock.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    className: \"content\",\n                    initial: \"hidden\",\n                    animate: isVisible ? \"enter\" : \"hidden\",\n                    exit: \"exit\",\n                    variants: _ui_animations__WEBPACK_IMPORTED_MODULE_2__.contentPageAnimationVariants,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_about_AboutBlock__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        data: {\n                            title: \"Hello\",\n                            description: \"dit is de hidden content\",\n                            buttonText: \"click me\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\blocks\\\\animation\\\\AnimationBlock.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\blocks\\\\animation\\\\AnimationBlock.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\blocks\\\\animation\\\\AnimationBlock.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\blocks\\\\animation\\\\AnimationBlock.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AnimationBlock, \"jrwhjsZMF/xaESCguwwOVBDFSxU=\");\n_c = AnimationBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimationBlock);\nvar _c;\n$RefreshReg$(_c, \"AnimationBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvYmxvY2tzL2FuaW1hdGlvbi9BbmltYXRpb25CbG9jay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUMyQjtBQUM1QjtBQUNNO0FBTTdDLE1BQU1LLGlCQUFpQixDQUFDQzs7SUFDdEIsTUFBTSxFQUFFQyxZQUFZLEVBQUUsRUFBRSxHQUFHQyxXQUFXLEdBQUdGO0lBRXpDLE1BQU0sQ0FBQ0csV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQ1U7SUFFM0MsTUFBTUMsb0JBQW9CO1FBQ3hCRixhQUFhLENBQUNEO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlOLFdBQVcsR0FBYSxPQUFWQTtRQUFjLEdBQUdDLFNBQVM7a0JBQzNDLDRFQUFDSzs7OEJBQ0MsOERBQUNDO29CQUFPQyxTQUFTSDs4QkFBbUI7Ozs7Ozs4QkFDcEMsOERBQUNULGlEQUFNQSxDQUFDVSxHQUFHO29CQUNUTixXQUFVO29CQUNWUyxTQUFRO29CQUNSQyxTQUFTUixZQUFZLFVBQVU7b0JBQy9CUyxNQUFLO29CQUNMQyxVQUFVakIsd0VBQTRCQTs4QkFFdEMsNEVBQUNFLHlEQUFVQTt3QkFBQ2dCLE1BQU07NEJBQUNDLE9BQU87NEJBQVNDLGFBQWE7NEJBQTRCQyxZQUFZO3dCQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVHO0dBekJNbEI7S0FBQUE7QUEyQk4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2Jsb2Nrcy9hbmltYXRpb24vQW5pbWF0aW9uQmxvY2sudHN4PzJkZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb250ZW50UGFnZUFuaW1hdGlvblZhcmlhbnRzIH0gZnJvbSAnLi4vLi4vdWkvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgQWJvdXRCbG9jayBmcm9tICcuLi9hYm91dC9BYm91dEJsb2NrJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uQmxvY2tQcm9wcyBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XHJcblxyXG59XHJcblxyXG5jb25zdCBBbmltYXRpb25CbG9jayA9IChwcm9wczogQW5pbWF0aW9uQmxvY2tQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lID0gXCJcIiwgLi4ucmVzdFByb3BzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKHR1cmUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIHNldElzVmlzaWJsZSghaXNWaXNpYmxlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX1gfSB7Li4ucmVzdFByb3BzfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfT5Ub2dnbGUgQW5pbWF0aW9uPC9idXR0b24+XHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgICAgICBhbmltYXRlPXtpc1Zpc2libGUgPyBcImVudGVyXCIgOiBcImhpZGRlblwifVxyXG4gICAgICAgICAgZXhpdD1cImV4aXRcIlxyXG4gICAgICAgICAgdmFyaWFudHM9e2NvbnRlbnRQYWdlQW5pbWF0aW9uVmFyaWFudHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFib3V0QmxvY2sgZGF0YT17e3RpdGxlOiAnSGVsbG8nLCBkZXNjcmlwdGlvbjogJ2RpdCBpcyBkZSBoaWRkZW4gY29udGVudCcsIGJ1dHRvblRleHQ6ICdjbGljayBtZSd9fS8+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25CbG9jaztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjb250ZW50UGFnZUFuaW1hdGlvblZhcmlhbnRzIiwibW90aW9uIiwiQWJvdXRCbG9jayIsIkFuaW1hdGlvbkJsb2NrIiwicHJvcHMiLCJjbGFzc05hbWUiLCJyZXN0UHJvcHMiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJ0dXJlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJleGl0IiwidmFyaWFudHMiLCJkYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImJ1dHRvblRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/blocks/animation/AnimationBlock.tsx\n"));

/***/ })

});