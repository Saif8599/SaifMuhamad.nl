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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/animations */ \"./src/features/ui/animations.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AnimationBlock = (props)=>{\n    _s();\n    const { className = \"\", ...restProps } = props;\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleButtonClick = ()=>{\n        setIsVisible(!isVisible);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isVisible) {\n            // Disable horizontal scrolling when animation is active\n            document.body.style.overflowX = \"hidden\";\n        } else {\n            // Re-enable horizontal scrolling when animation is inactive\n            document.body.style.overflowX = \"auto\";\n        }\n        // Clean up the effect when the component unmounts\n        return ()=>{\n            document.body.style.overflowX = \"auto\";\n        };\n    }, [\n        isVisible\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(className),\n        ...restProps,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleButtonClick,\n                    children: \"Toggle Animation\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\blocks\\\\animation\\\\AnimationBlock.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"content bg-red-500\",\n                    initial: \"hidden\",\n                    animate: isVisible ? \"enter\" : \"hidden\",\n                    exit: \"exit\",\n                    variants: _ui_animations__WEBPACK_IMPORTED_MODULE_2__.contentPageAnimationVariants,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Your content here\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\blocks\\\\animation\\\\AnimationBlock.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\blocks\\\\animation\\\\AnimationBlock.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\blocks\\\\animation\\\\AnimationBlock.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\blocks\\\\animation\\\\AnimationBlock.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AnimationBlock, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c = AnimationBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimationBlock);\nvar _c;\n$RefreshReg$(_c, \"AnimationBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvYmxvY2tzL2FuaW1hdGlvbi9BbmltYXRpb25CbG9jay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ2dCO0FBQzVCO0FBSXZDLE1BQU1LLGlCQUFpQixDQUFDQzs7SUFDdEIsTUFBTSxFQUFFQyxZQUFZLEVBQUUsRUFBRSxHQUFHQyxXQUFXLEdBQUdGO0lBRXpDLE1BQU0sQ0FBQ0csV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNVSxvQkFBb0I7UUFDeEJELGFBQWEsQ0FBQ0Q7SUFDaEI7SUFFQVAsZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxXQUFXO1lBQ2Isd0RBQXdEO1lBQ3hERyxTQUFTQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsU0FBUyxHQUFHO1FBQ2xDLE9BQU87WUFDTCw0REFBNEQ7WUFDNURILFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxTQUFTLEdBQUc7UUFDbEM7UUFFQSxrREFBa0Q7UUFDbEQsT0FBTztZQUNMSCxTQUFTQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsU0FBUyxHQUFHO1FBQ2xDO0lBQ0YsR0FBRztRQUFDTjtLQUFVO0lBRWQscUJBQ0UsOERBQUNPO1FBQUlULFdBQVcsR0FBYSxPQUFWQTtRQUFjLEdBQUdDLFNBQVM7a0JBQzNDLDRFQUFDUTs7OEJBQ0MsOERBQUNDO29CQUFPQyxTQUFTUDs4QkFBbUI7Ozs7Ozs4QkFDcEMsOERBQUNQLGlEQUFNQSxDQUFDWSxHQUFHO29CQUNUVCxXQUFVO29CQUNWWSxTQUFRO29CQUNSQyxTQUFTWCxZQUFZLFVBQVU7b0JBQy9CWSxNQUFLO29CQUNMQyxVQUFVbkIsd0VBQTRCQTs4QkFHdEMsNEVBQUNvQjtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtiO0dBekNNbEI7S0FBQUE7QUEyQ04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2Jsb2Nrcy9hbmltYXRpb24vQW5pbWF0aW9uQmxvY2sudHN4PzJkZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbnRlbnRQYWdlQW5pbWF0aW9uVmFyaWFudHMgfSBmcm9tICcuLi8uLi91aS9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvbkJsb2NrUHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge31cclxuXHJcbmNvbnN0IEFuaW1hdGlvbkJsb2NrID0gKHByb3BzOiBBbmltYXRpb25CbG9ja1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUgPSBcIlwiLCAuLi5yZXN0UHJvcHMgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIHNldElzVmlzaWJsZSghaXNWaXNpYmxlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzVmlzaWJsZSkge1xyXG4gICAgICAvLyBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsaW5nIHdoZW4gYW5pbWF0aW9uIGlzIGFjdGl2ZVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WCA9ICdoaWRkZW4nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmUtZW5hYmxlIGhvcml6b250YWwgc2Nyb2xsaW5nIHdoZW4gYW5pbWF0aW9uIGlzIGluYWN0aXZlXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dYID0gJ2F1dG8nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENsZWFuIHVwIHRoZSBlZmZlY3Qgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WCA9ICdhdXRvJztcclxuICAgIH07XHJcbiAgfSwgW2lzVmlzaWJsZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX1gfSB7Li4ucmVzdFByb3BzfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfT5Ub2dnbGUgQW5pbWF0aW9uPC9idXR0b24+XHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnQgYmctcmVkLTUwMFwiXHJcbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICAgIGFuaW1hdGU9e2lzVmlzaWJsZSA/IFwiZW50ZXJcIiA6IFwiaGlkZGVuXCJ9XHJcbiAgICAgICAgICBleGl0PVwiZXhpdFwiXHJcbiAgICAgICAgICB2YXJpYW50cz17Y29udGVudFBhZ2VBbmltYXRpb25WYXJpYW50c31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogQ29udGVudCBvZiB5b3VyIGJ1dHRvbiAqL31cclxuICAgICAgICAgIDxwPllvdXIgY29udGVudCBoZXJlPC9wPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uQmxvY2s7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29udGVudFBhZ2VBbmltYXRpb25WYXJpYW50cyIsIm1vdGlvbiIsIkFuaW1hdGlvbkJsb2NrIiwicHJvcHMiLCJjbGFzc05hbWUiLCJyZXN0UHJvcHMiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJoYW5kbGVCdXR0b25DbGljayIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3dYIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImluaXRpYWwiLCJhbmltYXRlIiwiZXhpdCIsInZhcmlhbnRzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/blocks/animation/AnimationBlock.tsx\n"));

/***/ })

});