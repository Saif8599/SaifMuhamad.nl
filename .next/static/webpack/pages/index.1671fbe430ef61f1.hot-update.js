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

/***/ "./src/features/scrollytelling/ScrollLinkedWordTyper.tsx":
/*!***************************************************************!*\
  !*** ./src/features/scrollytelling/ScrollLinkedWordTyper.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_images_and_icons_icons_MouseIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/images-and-icons/icons/MouseIcon */ \"./src/features/ui/images-and-icons/icons/MouseIcon.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ScrollLinkedWordTyper = (props)=>{\n    _s();\n    const { text, scrollAnimationRange = [\n        0,\n        1\n    ], className = \"\", ...restProps } = props;\n    const isSmallScreen = window.innerWidth <= 768;\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: containerRef\n    });\n    const words = text.split(\" \");\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollYProgress, scrollAnimationRange, [\n        0,\n        1\n    ]);\n    const wordIndex = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(y, (value)=>Math.round(value * words.length));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>wordIndex.onChange((latest)=>{\n            setScrollPosition(latest);\n        }), [\n        containerRef.current\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        style: {\n            minHeight: \"100vh\",\n            height: \"\".concat((words.length + 1) * 30, \"vh\")\n        },\n        className: \"relative \".concat(className),\n        ...restProps,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sticky h-screen top-0 flex justify-center items-center overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"mx-6 max-w-4xl text-3xl md:text-5xl text-center font-extrabold\",\n                        custom: {\n                            delay: 1,\n                            duration: 1\n                        },\n                        children: words.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                className: scrollPosition <= index ? \"invisible\" : \"\",\n                                children: \"\".concat(item, \" \")\n                            }, index, false, {\n                                fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\scrollytelling\\\\ScrollLinkedWordTyper.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\scrollytelling\\\\ScrollLinkedWordTyper.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\scrollytelling\\\\ScrollLinkedWordTyper.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute flex items-center m-1.5 md:m-3 bottom-8 md:bottom-12 font-extrabold animate-pulse\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"animate-bounce\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_images_and_icons_icons_MouseIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    className: \"mr-4\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\scrollytelling\\\\ScrollLinkedWordTyper.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\scrollytelling\\\\ScrollLinkedWordTyper.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\scrollytelling\\\\ScrollLinkedWordTyper.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Scroll down\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\scrollytelling\\\\ScrollLinkedWordTyper.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\scrollytelling\\\\ScrollLinkedWordTyper.tsx\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\saifmuhamad.com\\\\src\\\\features\\\\scrollytelling\\\\ScrollLinkedWordTyper.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollLinkedWordTyper, \"5eMnMIyLZ0jZ8rpMoHHA26athU4=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform\n    ];\n});\n_c = ScrollLinkedWordTyper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollLinkedWordTyper);\nvar _c;\n$RefreshReg$(_c, \"ScrollLinkedWordTyper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvc2Nyb2xseXRlbGxpbmcvU2Nyb2xsTGlua2VkV29yZFR5cGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkQ7QUFDSTtBQU14QztBQWF2QixNQUFNUyx3QkFBd0IsQ0FBQ0M7O0lBQzdCLE1BQU0sRUFDSkMsSUFBSSxFQUNKQyx1QkFBdUI7UUFBQztRQUFHO0tBQUUsRUFDN0JDLFlBQVksRUFBRSxFQUNkLEdBQUdDLFdBQ0osR0FBR0o7SUFDSixNQUFNSyxnQkFBZ0JDLE9BQU9DLFVBQVUsSUFBSTtJQUMzQyxNQUFNQyxlQUFlaEIsNkNBQU1BLENBQXdCO0lBQ25ELE1BQU0sRUFBRWlCLGVBQWUsRUFBRSxHQUFHWix3REFBU0EsQ0FBQztRQUFFYSxRQUFRRjtJQUFhO0lBQzdELE1BQU1HLFFBQVFWLEtBQUtXLEtBQUssQ0FBQztJQUV6QixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNc0IsSUFBSWpCLDJEQUFZQSxDQUFDVyxpQkFBaUJQLHNCQUFzQjtRQUFDO1FBQUc7S0FBRTtJQUNwRSxNQUFNYyxZQUFZbEIsMkRBQVlBLENBQUNpQixHQUFHLENBQUNFLFFBQ2pDQyxLQUFLQyxLQUFLLENBQUNGLFFBQVFOLE1BQU1TLE1BQU07SUFFakM3QixnREFBU0EsQ0FDUCxJQUNFeUIsVUFBVUssUUFBUSxDQUFDLENBQUNDO1lBQ2xCUixrQkFBa0JRO1FBQ3BCLElBQ0Y7UUFBQ2QsYUFBYWUsT0FBTztLQUFDO0lBRXhCLHFCQUNFLDhEQUFDQztRQUNDQyxLQUFLakI7UUFDTGtCLE9BQU87WUFDTEMsV0FBVztZQUNYQyxRQUFRLEdBQTJCLE9BQXhCLENBQUNqQixNQUFNUyxNQUFNLEdBQUcsS0FBSyxJQUFHO1FBQ3JDO1FBQ0FqQixXQUFXLFlBQXNCLE9BQVZBO1FBQ3RCLEdBQUdDLFNBQVM7a0JBRWIsNEVBQUNvQjtZQUFJckIsV0FBVTs7OEJBQ2IsOERBQUNSLDBEQUFlQTs4QkFDZCw0RUFBQ0MsaURBQU1BLENBQUM0QixHQUFHO3dCQUNUckIsV0FBVTt3QkFDVjBCLFFBQVE7NEJBQ05DLE9BQU87NEJBQ1BDLFVBQVU7d0JBQ1o7a0NBRUNwQixNQUFNcUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQ3RDLGlEQUFNQSxDQUFDdUMsSUFBSTtnQ0FDVmhDLFdBQVdVLGtCQUFrQnFCLFFBQVEsY0FBYzswQ0FHbEQsR0FBUSxPQUFMRCxNQUFLOytCQUZKQzs7Ozs7Ozs7Ozs7Ozs7OzhCQU9iLDhEQUFDVjtvQkFBSXJCLFdBQVU7O3NDQUNiLDhEQUFDcUI7NEJBQUlyQixXQUFVOzs4Q0FDYiw4REFBQ1QsNEVBQVNBO29DQUFDUyxXQUFVOzs7Ozs7OENBQ3JCLDhEQUFDcUI7b0NBQUlyQixXQUFVOzs7Ozs7Ozs7Ozs7d0JBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQjtHQWhFTUo7O1FBU3dCRixvREFBU0E7UUFLM0JDLHVEQUFZQTtRQUNKQSx1REFBWUE7OztLQWYxQkM7QUFrRU4sK0RBQWVBLHFCQUFxQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvc2Nyb2xseXRlbGxpbmcvU2Nyb2xsTGlua2VkV29yZFR5cGVyLnRzeD9lYzNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vdXNlSWNvbiBmcm9tIFwiLi4vdWkvaW1hZ2VzLWFuZC1pY29ucy9pY29ucy9Nb3VzZUljb25cIjtcclxuaW1wb3J0IHtcclxuICBBbmltYXRlUHJlc2VuY2UsXHJcbiAgbW90aW9uLFxyXG4gIHVzZVNjcm9sbCxcclxuICB1c2VUcmFuc2Zvcm0sXHJcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsTGlua2VkV29yZFR5cGVyUHJvcHNcclxuICBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgdGhlIHJhbmdlIGJldHdlZW4gd2hpY2ggdGhlIHNjcm9sbCBhbmltYXRpb24gdGFrZXMgZWZmZWN0LiAgRm9yXHJcbiAgICogZXhhbXBsZSwgcGFzc2luZyBbMC41LCAxXSB3aWxsIHN0YXJ0IHRoZSBzY3JvbGwgYW5pbWF0aW9uIGFmdGVyIHNjcm9sbGluZ1xyXG4gICAqIHRocm91Z2ggNTAlIG9mIHRoZSBibG9jay5cclxuICAgKi9cclxuICBzY3JvbGxBbmltYXRpb25SYW5nZT86IFtudW1iZXIsIG51bWJlcl07XHJcbn1cclxuXHJcbmNvbnN0IFNjcm9sbExpbmtlZFdvcmRUeXBlciA9IChwcm9wczogU2Nyb2xsTGlua2VkV29yZFR5cGVyUHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0ZXh0LFxyXG4gICAgc2Nyb2xsQW5pbWF0aW9uUmFuZ2UgPSBbMCwgMV0sXHJcbiAgICBjbGFzc05hbWUgPSBcIlwiLFxyXG4gICAgLi4ucmVzdFByb3BzXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGlzU21hbGxTY3JlZW4gPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3Njg7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVNjcm9sbCh7IHRhcmdldDogY29udGFpbmVyUmVmIH0pO1xyXG4gIGNvbnN0IHdvcmRzID0gdGV4dC5zcGxpdChcIiBcIik7XHJcblxyXG4gIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBzY3JvbGxBbmltYXRpb25SYW5nZSwgWzAsIDFdKTtcclxuICBjb25zdCB3b3JkSW5kZXggPSB1c2VUcmFuc2Zvcm0oeSwgKHZhbHVlKSA9PlxyXG4gICAgTWF0aC5yb3VuZCh2YWx1ZSAqIHdvcmRzLmxlbmd0aClcclxuICApO1xyXG4gIHVzZUVmZmVjdChcclxuICAgICgpID0+XHJcbiAgICAgIHdvcmRJbmRleC5vbkNoYW5nZSgobGF0ZXN0KSA9PiB7XHJcbiAgICAgICAgc2V0U2Nyb2xsUG9zaXRpb24obGF0ZXN0KTtcclxuICAgICAgfSksXHJcbiAgICBbY29udGFpbmVyUmVmLmN1cnJlbnRdXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e2NvbnRhaW5lclJlZn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICBoZWlnaHQ6IGAkeyh3b3Jkcy5sZW5ndGggKyAxKSAqIDMwfXZoYCxcclxuICAgICAgfX1cclxuICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgJHtjbGFzc05hbWV9YH1cclxuICAgICAgey4uLnJlc3RQcm9wc31cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgaC1zY3JlZW4gdG9wLTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTYgbWF4LXctNHhsIHRleHQtM3hsIG1kOnRleHQtNXhsIHRleHQtY2VudGVyIGZvbnQtZXh0cmFib2xkXCJcclxuICAgICAgICAgICAgY3VzdG9tPXt7XHJcbiAgICAgICAgICAgICAgZGVsYXk6IDEsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt3b3Jkcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Njcm9sbFBvc2l0aW9uIDw9IGluZGV4ID8gXCJpbnZpc2libGVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtgJHtpdGVtfSBgfVxyXG4gICAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBpdGVtcy1jZW50ZXIgbS0xLjUgbWQ6bS0zIGJvdHRvbS04IG1kOmJvdHRvbS0xMiBmb250LWV4dHJhYm9sZCBhbmltYXRlLXB1bHNlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtYm91bmNlXCI+XHJcbiAgICAgICAgICAgIDxNb3VzZUljb24gY2xhc3NOYW1lPVwibXItNFwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFNjcm9sbCBkb3duXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbExpbmtlZFdvcmRUeXBlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJNb3VzZUljb24iLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJTY3JvbGxMaW5rZWRXb3JkVHlwZXIiLCJwcm9wcyIsInRleHQiLCJzY3JvbGxBbmltYXRpb25SYW5nZSIsImNsYXNzTmFtZSIsInJlc3RQcm9wcyIsImlzU21hbGxTY3JlZW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY29udGFpbmVyUmVmIiwic2Nyb2xsWVByb2dyZXNzIiwidGFyZ2V0Iiwid29yZHMiLCJzcGxpdCIsInNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJ5Iiwid29yZEluZGV4IiwidmFsdWUiLCJNYXRoIiwicm91bmQiLCJsZW5ndGgiLCJvbkNoYW5nZSIsImxhdGVzdCIsImN1cnJlbnQiLCJkaXYiLCJyZWYiLCJzdHlsZSIsIm1pbkhlaWdodCIsImhlaWdodCIsImN1c3RvbSIsImRlbGF5IiwiZHVyYXRpb24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/scrollytelling/ScrollLinkedWordTyper.tsx\n"));

/***/ })

});