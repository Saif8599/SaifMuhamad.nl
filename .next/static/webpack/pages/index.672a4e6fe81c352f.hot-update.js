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

/***/ "./src/features/blocks/navbar/NavbarBlock.tsx":
/*!****************************************************!*\
  !*** ./src/features/blocks/navbar/NavbarBlock.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst NavbarBlock = ()=>{\n    _s();\n    const [isNavOpen, setIsNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleNav = ()=>{\n        setIsNavOpen(!isNavOpen);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (window.scrollY > 0) {\n                setIsScrolled(true);\n            } else {\n                setIsScrolled(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex items-center justify-between flex-wrap py-4 md:px-12 bg-transparent \".concat(isScrolled ? \"fixed top-0 w-full z-50 backdrop-blur-lg bg-opacity-90\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 lg:pb-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"block lg:hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"nav\",\n                        onClick: toggleNav,\n                        type: \"button\",\n                        className: \"flex items-center px-3 py-2 border-2 rounded text-red-700 border-red-700 hover:text-red-700 hover:border-red-700\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"fill-current h-3 w-3\",\n                            viewBox: \"0 0 20 20\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\navbar\\\\NavbarBlock.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\navbar\\\\NavbarBlock.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\navbar\\\\NavbarBlock.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\navbar\\\\NavbarBlock.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\navbar\\\\NavbarBlock.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"menu w-full lg:flex lg:items-center lg:w-auto lg:px-3 px-8 \".concat(isNavOpen ? \"block\" : \"hidden\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-md font-bold text-red-700 lg:flex-grow font-mono\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-1 rounded mr-2 border-red-500 transition-all duration-500\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\navbar\\\\NavbarBlock.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#about\",\n                                className: \"block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-1 rounded mr-2 border-red-500 transition-all duration-500\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\navbar\\\\NavbarBlock.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#contact\",\n                                className: \"block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-1 rounded mr-2 border-red-500 transition-all duration-500\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\navbar\\\\NavbarBlock.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\navbar\\\\NavbarBlock.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex font-mono\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"YouCantGetInHaHa\",\n                            className: \"block text-md px-4 py-1 rounded text-red-700 font-bold hover:text-white mt-4 lg:mt-0 border-red-500 transition-all duration-500\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\navbar\\\\NavbarBlock.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\navbar\\\\NavbarBlock.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\navbar\\\\NavbarBlock.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\navbar\\\\NavbarBlock.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavbarBlock, \"4w9fKKn7iPJqMmx7LBjvWKH714w=\");\n_c = NavbarBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavbarBlock);\nvar _c;\n$RefreshReg$(_c, \"NavbarBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvYmxvY2tzL25hdmJhci9OYXZiYXJCbG9jay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtRDtBQUluRCxNQUFNRyxjQUFxQzs7SUFDekMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ0ssWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNTyxZQUFZO1FBQ2hCSCxhQUFhLENBQUNEO0lBQ2hCO0lBRUFGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sZUFBZTtZQUNuQixJQUFJQyxPQUFPQyxPQUFPLEdBQUcsR0FBRztnQkFDdEJKLGNBQWM7WUFDaEIsT0FBTztnQkFDTEEsY0FBYztZQUNoQjtRQUNGO1FBRUFHLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBRWxDLE9BQU87WUFDTEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7UUFDQ0MsV0FBVyw0RUFFVixPQURDVCxhQUFhLDJEQUEyRDs7MEJBRzFFLDhEQUFDVTtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNFO3dCQUNDQyxJQUFHO3dCQUNIQyxTQUFTWDt3QkFDVFksTUFBSzt3QkFDTEwsV0FBVTtrQ0FFViw0RUFBQ007NEJBQ0NOLFdBQVU7NEJBQ1ZPLFNBQVE7NEJBQ1JDLE9BQU07c0NBRU4sNEVBQUNDO2dDQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNaEIsOERBQUNUO2dCQUNDRCxXQUFXLDhEQUVWLE9BRENYLFlBQVksVUFBVTs7a0NBR3hCLDhEQUFDWTt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNXO2dDQUNDQyxNQUFLO2dDQUNMWixXQUFVOzBDQUNYOzs7Ozs7MENBR0QsOERBQUNXO2dDQUNDQyxNQUFLO2dDQUNMWixXQUFVOzBDQUNYOzs7Ozs7MENBR0QsOERBQUNXO2dDQUNDQyxNQUFLO2dDQUNMWixXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDVzs0QkFDQ0MsTUFBSzs0QkFDTFosV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXJGTVo7S0FBQUE7QUF1Rk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2Jsb2Nrcy9uYXZiYXIvTmF2YmFyQmxvY2sudHN4PzI3NjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5hdmJhclByb3BzIGV4dGVuZHMgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHt9XHJcblxyXG5jb25zdCBOYXZiYXJCbG9jazogUmVhY3QuRkM8TmF2YmFyUHJvcHM+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc05hdk9wZW4sIHNldElzTmF2T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVOYXYgPSAoKSA9PiB7XHJcbiAgICBzZXRJc05hdk9wZW4oIWlzTmF2T3Blbik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMCkge1xyXG4gICAgICAgIHNldElzU2Nyb2xsZWQodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXNTY3JvbGxlZChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXZcclxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZsZXgtd3JhcCBweS00IG1kOnB4LTEyIGJnLXRyYW5zcGFyZW50ICR7XHJcbiAgICAgICAgaXNTY3JvbGxlZCA/ICdmaXhlZCB0b3AtMCB3LWZ1bGwgei01MCBiYWNrZHJvcC1ibHVyLWxnIGJnLW9wYWNpdHktOTAnIDogJydcclxuICAgICAgfWB9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbGc6dy1hdXRvIHctZnVsbCBsZzpib3JkZXItYi0wIHBsLTYgcHItMiBsZzpwYi0wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW5cIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgaWQ9XCJuYXZcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVOYXZ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgYm9yZGVyLTIgcm91bmRlZCB0ZXh0LXJlZC03MDAgYm9yZGVyLXJlZC03MDAgaG92ZXI6dGV4dC1yZWQtNzAwIGhvdmVyOmJvcmRlci1yZWQtNzAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTMgdy0zXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAzaDIwdjJIMFYzem0wIDZoMjB2MkgwVjl6bTAgNmgyMHYySDB2LTJ6XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgbWVudSB3LWZ1bGwgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6dy1hdXRvIGxnOnB4LTMgcHgtOCAke1xyXG4gICAgICAgICAgaXNOYXZPcGVuID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIlxyXG4gICAgICAgIH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW1kIGZvbnQtYm9sZCB0ZXh0LXJlZC03MDAgbGc6ZmxleC1ncm93IGZvbnQtbW9ub1wiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtdC00IGxnOmlubGluZS1ibG9jayBsZzptdC0wIGhvdmVyOnRleHQtd2hpdGUgcHgtNCBweS0xIHJvdW5kZWQgbXItMiBib3JkZXItcmVkLTUwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI2Fib3V0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtNCBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCBob3Zlcjp0ZXh0LXdoaXRlIHB4LTQgcHktMSByb3VuZGVkIG1yLTIgYm9yZGVyLXJlZC01MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCIjY29udGFjdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG10LTQgbGc6aW5saW5lLWJsb2NrIGxnOm10LTAgaG92ZXI6dGV4dC13aGl0ZSBweC00IHB5LTEgcm91bmRlZCBtci0yIGJvcmRlci1yZWQtNTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZm9udC1tb25vXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiWW91Q2FudEdldEluSGFIYVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtbWQgcHgtNCBweS0xIHJvdW5kZWQgdGV4dC1yZWQtNzAwIGZvbnQtYm9sZCBob3Zlcjp0ZXh0LXdoaXRlIG10LTQgbGc6bXQtMCBib3JkZXItcmVkLTUwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJCbG9jaztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZiYXJCbG9jayIsImlzTmF2T3BlbiIsInNldElzTmF2T3BlbiIsImlzU2Nyb2xsZWQiLCJzZXRJc1Njcm9sbGVkIiwidG9nZ2xlTmF2IiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uIiwiaWQiLCJvbkNsaWNrIiwidHlwZSIsInN2ZyIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJkIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/blocks/navbar/NavbarBlock.tsx\n"));

/***/ })

});