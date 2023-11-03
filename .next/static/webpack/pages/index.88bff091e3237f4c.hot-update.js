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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_typography_rich_text_RichText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/typography/rich-text/RichText */ \"./src/features/ui/typography/rich-text/RichText.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst ProjectsBlock = (props)=>{\n    _s();\n    const { projects, className = \"\", ...restProps } = props;\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(projects[0]);\n    const handleProjectSelection = (project)=>{\n        setSelectedProject(project);\n        const element = document.getElementById(project.id);\n        if (element) {\n            element.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        ...restProps,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-full ax-h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"px-4 md:p-12 ml-0 md:ml-10\",\n                id: \"projects\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-bold mb-8\",\n                        children: \"My Projects\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row gap-6 md:gap-16 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-1/2 flex flex-wrap\",\n                                children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4 w-full md:w-1/2 max-w-xs rounded-lg shadow-md p-4 cursor-pointer\",\n                                        onClick: ()=>handleProjectSelection(project),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mb-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: project.image,\n                                                    alt: project.title,\n                                                    className: \"w-full h-32 object-cover rounded\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-xl font-bold mb-2\",\n                                                children: project.title\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, project.id, true, {\n                                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-1/2 max-w-sm\",\n                                children: selectedProject && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: selectedProject.id,\n                                    className: \"rounded-lg shadow-md p-4 mb-10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: selectedProject.image,\n                                            alt: selectedProject.title,\n                                            className: \"w-full mb-4 h-40 object-cover rounded\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl font-bold mb-2\",\n                                            children: selectedProject.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_typography_rich_text_RichText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            className: \"text-sm\",\n                                            html: selectedProject.description\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        selectedProject.linkText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: selectedProject.link,\n                                            className: \"block mt-4 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg text-center hover:bg-red-600 transition-all duration-300\",\n                                            children: selectedProject.linkText\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsBlock, \"vx/+CFlXYhdELEX11aTvkpcFfDY=\");\n_c = ProjectsBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsBlock);\nvar _c;\n$RefreshReg$(_c, \"ProjectsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvYmxvY2tzL3Byb2plY3QvUHJvamVjdHNCbG9jay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDc0I7QUFlOUQsTUFBTUcsZ0JBQWdCLENBQUNDOztJQUNyQixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFLEVBQUUsR0FBR0MsV0FBVyxHQUFHSDtJQUVuRCxNQUFNLENBQUNJLGlCQUFpQkMsbUJBQW1CLEdBQUdSLCtDQUFRQSxDQUNwREksUUFBUSxDQUFDLEVBQUU7SUFHYixNQUFNSyx5QkFBeUIsQ0FBQ0M7UUFDOUJGLG1CQUFtQkU7UUFDbkIsTUFBTUMsVUFBVUMsU0FBU0MsY0FBYyxDQUFDSCxRQUFRSSxFQUFFO1FBQ2xELElBQUlILFNBQVM7WUFDWEEsUUFBUUksY0FBYyxDQUFDO2dCQUFFQyxVQUFVO1lBQVM7UUFDOUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJWixXQUFXQTtRQUFZLEdBQUdDLFNBQVM7a0JBQ3RDLDRFQUFDVztZQUFJWixXQUFVO3NCQUNiLDRFQUFDYTtnQkFBUWIsV0FBVTtnQkFBNkJTLElBQUc7O2tDQUNqRCw4REFBQ0s7d0JBQUdkLFdBQVU7a0NBQTBCOzs7Ozs7a0NBQ3hDLDhEQUFDWTt3QkFBSVosV0FBVTs7MENBQ2IsOERBQUNZO2dDQUFJWixXQUFVOzBDQUNaRCxTQUFTZ0IsR0FBRyxDQUFDLENBQUNWLHdCQUNiLDhEQUFDTzt3Q0FFQ1osV0FBVTt3Q0FDVmdCLFNBQVMsSUFBTVosdUJBQXVCQzs7MERBRXRDLDhEQUFDTztnREFBSVosV0FBVTswREFDYiw0RUFBQ2lCO29EQUNDQyxLQUFLYixRQUFRYyxLQUFLO29EQUNsQkMsS0FBS2YsUUFBUWdCLEtBQUs7b0RBQ2xCckIsV0FBVTs7Ozs7Ozs7Ozs7MERBR2QsOERBQUNjO2dEQUFHZCxXQUFVOzBEQUEwQkssUUFBUWdCLEtBQUs7Ozs7Ozs7dUNBWGhEaEIsUUFBUUksRUFBRTs7Ozs7Ozs7OzswQ0FlckIsOERBQUNHO2dDQUFJWixXQUFVOzBDQUNaRSxpQ0FDQyw4REFBQ1U7b0NBQ0NILElBQUlQLGdCQUFnQk8sRUFBRTtvQ0FDdEJULFdBQVU7O3NEQUVWLDhEQUFDaUI7NENBQ0NDLEtBQUtoQixnQkFBZ0JpQixLQUFLOzRDQUMxQkMsS0FBS2xCLGdCQUFnQm1CLEtBQUs7NENBQzFCckIsV0FBVTs7Ozs7O3NEQUVaLDhEQUFDYzs0Q0FBR2QsV0FBVTtzREFDWEUsZ0JBQWdCbUIsS0FBSzs7Ozs7O3NEQUV4Qiw4REFBQ3pCLHlFQUFRQTs0Q0FDUEksV0FBVTs0Q0FDVnNCLE1BQU1wQixnQkFBZ0JxQixXQUFXOzs7Ozs7d0NBRWxDckIsZ0JBQWdCc0IsUUFBUSxrQkFDdkIsOERBQUNDOzRDQUNDQyxNQUFNeEIsZ0JBQWdCeUIsSUFBSTs0Q0FDMUIzQixXQUFVO3NEQUVURSxnQkFBZ0JzQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXL0M7R0F6RU0zQjtLQUFBQTtBQTJFTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvYmxvY2tzL3Byb2plY3QvUHJvamVjdHNCbG9jay50c3g/ZWFlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJpY2hUZXh0IGZyb20gXCIuLi8uLi91aS90eXBvZ3JhcGh5L3JpY2gtdGV4dC9SaWNoVGV4dFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0c0Jsb2NrIHtcclxuICBpZDogc3RyaW5nOyAvLyBBZGQgYW4gSUQgZmllbGQgZm9yIGVhY2ggcHJvamVjdFxyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBsaW5rOiBzdHJpbmc7XHJcbiAgbGlua1RleHQ6IHN0cmluZztcclxuICBpbWFnZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0c0Jsb2NrUHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xyXG4gIHByb2plY3RzOiBQcm9qZWN0c0Jsb2NrW107XHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3RzQmxvY2sgPSAocHJvcHM6IFByb2plY3RzQmxvY2tQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvamVjdHMsIGNsYXNzTmFtZSA9IFwiXCIsIC4uLnJlc3RQcm9wcyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZFByb2plY3QsIHNldFNlbGVjdGVkUHJvamVjdF0gPSB1c2VTdGF0ZTxQcm9qZWN0c0Jsb2NrIHwgbnVsbD4oXHJcbiAgICBwcm9qZWN0c1swXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2plY3RTZWxlY3Rpb24gPSAocHJvamVjdDogUHJvamVjdHNCbG9jaykgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3QuaWQpO1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucmVzdFByb3BzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgYXgtaC1zY3JlZW5cIj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweC00IG1kOnAtMTIgbWwtMCBtZDptbC0xMFwiIGlkPVwicHJvamVjdHNcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItOFwiPk15IFByb2plY3RzPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtNiBtZDpnYXAtMTYgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yIGZsZXggZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTQgdy1mdWxsIG1kOnctMS8yIG1heC13LXhzIHJvdW5kZWQtbGcgc2hhZG93LW1kIHAtNCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2plY3RTZWxlY3Rpb24ocHJvamVjdCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTMyIG9iamVjdC1jb3ZlciByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTJcIj57cHJvamVjdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBtYXgtdy1zbVwiPlxyXG4gICAgICAgICAgICAgIHtzZWxlY3RlZFByb2plY3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBpZD17c2VsZWN0ZWRQcm9qZWN0LmlkfSAvLyBTZXQgdGhlIElEIGZvciB0aGUgc2VsZWN0ZWQgcHJvamVjdFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTQgbWItMTBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZFByb2plY3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtzZWxlY3RlZFByb2plY3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTQgaC00MCBvYmplY3QtY292ZXIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUHJvamVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbD17c2VsZWN0ZWRQcm9qZWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQcm9qZWN0LmxpbmtUZXh0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17c2VsZWN0ZWRQcm9qZWN0Lmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtdC00IHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctcmVkLTUwMCByb3VuZGVkLWxnIHRleHQtY2VudGVyIGhvdmVyOmJnLXJlZC02MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQcm9qZWN0LmxpbmtUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c0Jsb2NrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJpY2hUZXh0IiwiUHJvamVjdHNCbG9jayIsInByb3BzIiwicHJvamVjdHMiLCJjbGFzc05hbWUiLCJyZXN0UHJvcHMiLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJoYW5kbGVQcm9qZWN0U2VsZWN0aW9uIiwicHJvamVjdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZGl2Iiwic2VjdGlvbiIsImgyIiwibWFwIiwib25DbGljayIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJodG1sIiwiZGVzY3JpcHRpb24iLCJsaW5rVGV4dCIsImEiLCJocmVmIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/blocks/project/ProjectsBlock.tsx\n"));

/***/ })

});