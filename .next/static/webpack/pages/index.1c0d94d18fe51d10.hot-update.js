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

/***/ "./src/features/blocks/project/ProjectsBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/features/blocks/project/ProjectsBlock.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_typography_rich_text_RichText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/typography/rich-text/RichText */ \"./src/features/ui/typography/rich-text/RichText.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst ProjectsBlock = (props)=>{\n    _s();\n    const { projects, className = \"\", ...restProps } = props;\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(projects[0]);\n    const handleProjectSelection = (project)=>{\n        setSelectedProject(project);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(className),\n        ...restProps,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-screen flex justify-center items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"px-4 md:p-12 ml-0 md:ml-10\",\n                id: \"projects\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-bold mb-8\",\n                        children: \"My Projects\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto flex flex-col md:flex-row gap-10 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-1/2 flex flex-wrap\",\n                                children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4 w-full md:w-1/2 max-w-sm rounded-lg shadow-md p-4 cursor-pointer\",\n                                        onClick: ()=>handleProjectSelection(project),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mb-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: project.image,\n                                                    alt: project.title,\n                                                    className: \"w-full h-32 object-cover rounded\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-xl font-bold mb-2\",\n                                                children: project.title\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-1/2\",\n                                children: selectedProject && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"rounded-lg shadow-md p-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: selectedProject.image,\n                                            alt: selectedProject.title,\n                                            className: \"w-full mb-4 h-40 object-cover rounded\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl font-bold mb-2\",\n                                            children: selectedProject.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_typography_rich_text_RichText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            className: \"text-sm\",\n                                            html: selectedProject.description\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        selectedProject.linkText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: selectedProject.link,\n                                            className: \"block mt-4 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg text-center hover:bg-red-600 transition-all duration-300\",\n                                            children: selectedProject.linkText\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsBlock, \"vx/+CFlXYhdELEX11aTvkpcFfDY=\");\n_c = ProjectsBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsBlock);\nvar _c;\n$RefreshReg$(_c, \"ProjectsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvYmxvY2tzL3Byb2plY3QvUHJvamVjdHNCbG9jay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDc0I7QUFlOUQsTUFBTUcsZ0JBQWdCLENBQUNDOztJQUNyQixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFLEVBQUUsR0FBR0MsV0FBVyxHQUFHSDtJQUVuRCxNQUFNLENBQUNJLGlCQUFpQkMsbUJBQW1CLEdBQUdSLCtDQUFRQSxDQUNwREksUUFBUSxDQUFDLEVBQUU7SUFHYixNQUFNSyx5QkFBeUIsQ0FBQ0M7UUFDOUJGLG1CQUFtQkU7SUFDckI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSU4sV0FBVyxHQUFhLE9BQVZBO1FBQWMsR0FBR0MsU0FBUztrQkFDM0MsNEVBQUNLO1lBQUlOLFdBQVU7c0JBQ2IsNEVBQUNPO2dCQUFRUCxXQUFVO2dCQUE2QlEsSUFBRzs7a0NBQ2pELDhEQUFDQzt3QkFBR1QsV0FBVTtrQ0FBMEI7Ozs7OztrQ0FDeEMsOERBQUNNO3dCQUFJTixXQUFVOzswQ0FDYiw4REFBQ007Z0NBQUlOLFdBQVU7MENBQ1pELFNBQVNXLEdBQUcsQ0FBQyxDQUFDTCxTQUFTTSxzQkFDdEIsOERBQUNMO3dDQUVDTixXQUFVO3dDQUNWWSxTQUFTLElBQU1SLHVCQUF1QkM7OzBEQUV0Qyw4REFBQ0M7Z0RBQUlOLFdBQVU7MERBQ2IsNEVBQUNhO29EQUNDQyxLQUFLVCxRQUFRVSxLQUFLO29EQUNsQkMsS0FBS1gsUUFBUVksS0FBSztvREFDbEJqQixXQUFVOzs7Ozs7Ozs7OzswREFHZCw4REFBQ1M7Z0RBQUdULFdBQVU7MERBQTBCSyxRQUFRWSxLQUFLOzs7Ozs7O3VDQVhoRE47Ozs7Ozs7Ozs7MENBZVgsOERBQUNMO2dDQUFJTixXQUFVOzBDQUNaRSxpQ0FDQyw4REFBQ0k7b0NBQUlOLFdBQVU7O3NEQUNiLDhEQUFDYTs0Q0FDQ0MsS0FBS1osZ0JBQWdCYSxLQUFLOzRDQUMxQkMsS0FBS2QsZ0JBQWdCZSxLQUFLOzRDQUMxQmpCLFdBQVU7Ozs7OztzREFFWiw4REFBQ1M7NENBQUdULFdBQVU7c0RBQ1hFLGdCQUFnQmUsS0FBSzs7Ozs7O3NEQUV4Qiw4REFBQ3JCLHlFQUFRQTs0Q0FDUEksV0FBVTs0Q0FDVmtCLE1BQU1oQixnQkFBZ0JpQixXQUFXOzs7Ozs7d0NBRWxDakIsZ0JBQWdCa0IsUUFBUSxrQkFDdkIsOERBQUNDOzRDQUNDQyxNQUFNcEIsZ0JBQWdCcUIsSUFBSTs0Q0FDMUJ2QixXQUFVO3NEQUVURSxnQkFBZ0JrQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXL0M7R0FsRU12QjtLQUFBQTtBQW9FTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvYmxvY2tzL3Byb2plY3QvUHJvamVjdHNCbG9jay50c3g/ZWFlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJpY2hUZXh0IGZyb20gXCIuLi8uLi91aS90eXBvZ3JhcGh5L3JpY2gtdGV4dC9SaWNoVGV4dFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0c0Jsb2NrIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgbGluazogc3RyaW5nO1xyXG4gIGxpbmtUZXh0OiBzdHJpbmc7XHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdHNCbG9ja1Byb3BzXHJcbiAgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xyXG4gIHByb2plY3RzOiBQcm9qZWN0c0Jsb2NrW107XHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3RzQmxvY2sgPSAocHJvcHM6IFByb2plY3RzQmxvY2tQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvamVjdHMsIGNsYXNzTmFtZSA9IFwiXCIsIC4uLnJlc3RQcm9wcyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZFByb2plY3QsIHNldFNlbGVjdGVkUHJvamVjdF0gPSB1c2VTdGF0ZTxQcm9qZWN0c0Jsb2NrIHwgbnVsbD4oXHJcbiAgICBwcm9qZWN0c1swXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2plY3RTZWxlY3Rpb24gPSAocHJvamVjdDogUHJvamVjdHNCbG9jaykgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRQcm9qZWN0KHByb2plY3QpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfWB9IHsuLi5yZXN0UHJvcHN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB4LTQgbWQ6cC0xMiBtbC0wIG1kOm1sLTEwXCIgaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi04XCI+TXkgUHJvamVjdHM8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTEwIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBmbGV4IGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTQgdy1mdWxsIG1kOnctMS8yIG1heC13LXNtIHJvdW5kZWQtbGcgc2hhZG93LW1kIHAtNCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2plY3RTZWxlY3Rpb24ocHJvamVjdCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTMyIG9iamVjdC1jb3ZlciByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTJcIj57cHJvamVjdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgIHtzZWxlY3RlZFByb2plY3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRQcm9qZWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17c2VsZWN0ZWRQcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtYi00IGgtNDAgb2JqZWN0LWNvdmVyIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFByb2plY3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw9e3NlbGVjdGVkUHJvamVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUHJvamVjdC5saW5rVGV4dCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3NlbGVjdGVkUHJvamVjdC5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtNCBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLXJlZC01MDAgcm91bmRlZC1sZyB0ZXh0LWNlbnRlciBob3ZlcjpiZy1yZWQtNjAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUHJvamVjdC5saW5rVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNCbG9jaztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSaWNoVGV4dCIsIlByb2plY3RzQmxvY2siLCJwcm9wcyIsInByb2plY3RzIiwiY2xhc3NOYW1lIiwicmVzdFByb3BzIiwic2VsZWN0ZWRQcm9qZWN0Iiwic2V0U2VsZWN0ZWRQcm9qZWN0IiwiaGFuZGxlUHJvamVjdFNlbGVjdGlvbiIsInByb2plY3QiLCJkaXYiLCJzZWN0aW9uIiwiaWQiLCJoMiIsIm1hcCIsImluZGV4Iiwib25DbGljayIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJodG1sIiwiZGVzY3JpcHRpb24iLCJsaW5rVGV4dCIsImEiLCJocmVmIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/blocks/project/ProjectsBlock.tsx\n"));

/***/ })

});