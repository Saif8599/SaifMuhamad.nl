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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_typography_rich_text_RichText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/typography/rich-text/RichText */ \"./src/features/ui/typography/rich-text/RichText.tsx\");\n/* harmony import */ var _media_query_useBreakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../media-query/useBreakpoints */ \"./src/features/media-query/useBreakpoints.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProjectsBlock = (props)=>{\n    _s();\n    const { projects, className = \"\", ...restProps } = props;\n    const { isSm } = (0,_media_query_useBreakpoints__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(projects[0]);\n    const handleProjectSelection = (project)=>{\n        setSelectedProject(project);\n        if (isSm) {\n            const element = document.getElementById(project.id);\n            if (element) {\n                element.scrollIntoView({\n                    behavior: \"smooth\"\n                });\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        ...restProps,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-full ax-h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"px-4 md:p-12 ml-0 md:ml-10\",\n                id: \"projects\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-bold mb-8\",\n                        children: \"My Projects\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row gap-6 md:gap-16 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-1/2 flex flex-wrap\",\n                                children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4 w-full md:w-1/2 max-w-xs rounded-lg shadow-md p-4 cursor-pointer \".concat(selectedProject && selectedProject.id === project.id ? \"text-green-500\" : \"\"),\n                                        onClick: ()=>handleProjectSelection(project),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mb-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: project.image,\n                                                    alt: project.title,\n                                                    className: \"w-full h-32 object-cover rounded\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-xl font-bold mb-2\",\n                                                children: project.title\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, project.id, true, {\n                                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-1/2 max-w-sm\",\n                                children: selectedProject && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: selectedProject.id,\n                                    className: \"rounded-lg shadow-md p-4 mb-10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: selectedProject.image,\n                                            alt: selectedProject.title,\n                                            className: \"w-full mb-4 h-40 object-cover rounded\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl font-bold mb-2\",\n                                            children: selectedProject.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_typography_rich_text_RichText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            className: \"text-sm\",\n                                            html: selectedProject.description\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        selectedProject.linkText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: selectedProject.link,\n                                            className: \"block mt-4 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg text-center hover:bg-red-600 transition-all duration-300\",\n                                            children: selectedProject.linkText\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsBlock, \"R/xcxjiETuwShOzy07Yjfbw+7nU=\", false, function() {\n    return [\n        _media_query_useBreakpoints__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = ProjectsBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsBlock);\nvar _c;\n$RefreshReg$(_c, \"ProjectsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvYmxvY2tzL3Byb2plY3QvUHJvamVjdHNCbG9jay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ3NCO0FBQ0E7QUFnQjlELE1BQU1JLGdCQUFnQixDQUFDQzs7SUFDckIsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRSxFQUFFLEdBQUdDLFdBQVcsR0FBR0g7SUFDbkQsTUFBTSxFQUFFSSxJQUFJLEVBQUUsR0FBR04sdUVBQWNBO0lBRS9CLE1BQU0sQ0FBQ08saUJBQWlCQyxtQkFBbUIsR0FBR1YsK0NBQVFBLENBQ3BESyxRQUFRLENBQUMsRUFBRTtJQUdiLE1BQU1NLHlCQUF5QixDQUFDQztRQUM5QkYsbUJBQW1CRTtRQUNuQixJQUFJSixNQUFNO1lBQ1YsTUFBTUssVUFBVUMsU0FBU0MsY0FBYyxDQUFDSCxRQUFRSSxFQUFFO1lBQ2xELElBQUlILFNBQVM7Z0JBQ1hBLFFBQVFJLGNBQWMsQ0FBQztvQkFBRUMsVUFBVTtnQkFBUztZQUM5QztRQUNGO0lBQ0E7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSWIsV0FBV0E7UUFBWSxHQUFHQyxTQUFTO2tCQUN0Qyw0RUFBQ1k7WUFBSWIsV0FBVTtzQkFDYiw0RUFBQ2M7Z0JBQVFkLFdBQVU7Z0JBQTZCVSxJQUFHOztrQ0FDakQsOERBQUNLO3dCQUFHZixXQUFVO2tDQUEwQjs7Ozs7O2tDQUN4Qyw4REFBQ2E7d0JBQUliLFdBQVU7OzBDQUNiLDhEQUFDYTtnQ0FBSWIsV0FBVTswQ0FDWkQsU0FBU2lCLEdBQUcsQ0FBQyxDQUFDVix3QkFDYiw4REFBQ087d0NBRUNiLFdBQVcseUVBRVYsT0FEQ0csbUJBQW1CQSxnQkFBZ0JPLEVBQUUsS0FBS0osUUFBUUksRUFBRSxHQUFHLG1CQUFtQjt3Q0FFNUVPLFNBQVMsSUFBTVosdUJBQXVCQzs7MERBRXRDLDhEQUFDTztnREFBSWIsV0FBVTswREFDYiw0RUFBQ2tCO29EQUNDQyxLQUFLYixRQUFRYyxLQUFLO29EQUNsQkMsS0FBS2YsUUFBUWdCLEtBQUs7b0RBQ2xCdEIsV0FBVTs7Ozs7Ozs7Ozs7MERBR2QsOERBQUNlO2dEQUFHZixXQUFVOzBEQUEwQk0sUUFBUWdCLEtBQUs7Ozs7Ozs7dUNBYmhEaEIsUUFBUUksRUFBRTs7Ozs7Ozs7OzswQ0FpQnJCLDhEQUFDRztnQ0FBSWIsV0FBVTswQ0FDWkcsaUNBQ0MsOERBQUNVO29DQUNDSCxJQUFJUCxnQkFBZ0JPLEVBQUU7b0NBQ3RCVixXQUFVOztzREFFViw4REFBQ2tCOzRDQUNDQyxLQUFLaEIsZ0JBQWdCaUIsS0FBSzs0Q0FDMUJDLEtBQUtsQixnQkFBZ0JtQixLQUFLOzRDQUMxQnRCLFdBQVU7Ozs7OztzREFFWiw4REFBQ2U7NENBQUdmLFdBQVU7c0RBQ1hHLGdCQUFnQm1CLEtBQUs7Ozs7OztzREFFeEIsOERBQUMzQix5RUFBUUE7NENBQ1BLLFdBQVU7NENBQ1Z1QixNQUFNcEIsZ0JBQWdCcUIsV0FBVzs7Ozs7O3dDQUVsQ3JCLGdCQUFnQnNCLFFBQVEsa0JBQ3ZCLDhEQUFDQzs0Q0FDQ0MsTUFBTXhCLGdCQUFnQnlCLElBQUk7NENBQzFCNUIsV0FBVTtzREFFVEcsZ0JBQWdCc0IsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVy9DO0dBOUVNNUI7O1FBRWFELG1FQUFjQTs7O0tBRjNCQztBQWdGTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvYmxvY2tzL3Byb2plY3QvUHJvamVjdHNCbG9jay50c3g/ZWFlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJpY2hUZXh0IGZyb20gXCIuLi8uLi91aS90eXBvZ3JhcGh5L3JpY2gtdGV4dC9SaWNoVGV4dFwiO1xyXG5pbXBvcnQgdXNlQnJlYWtwb2ludHMgZnJvbSAnLi4vLi4vbWVkaWEtcXVlcnkvdXNlQnJlYWtwb2ludHMnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdHNCbG9jayB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgbGluazogc3RyaW5nO1xyXG4gIGxpbmtUZXh0OiBzdHJpbmc7XHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdHNCbG9ja1Byb3BzIGV4dGVuZHMgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcclxuICBwcm9qZWN0czogUHJvamVjdHNCbG9ja1tdO1xyXG59XHJcblxyXG5jb25zdCBQcm9qZWN0c0Jsb2NrID0gKHByb3BzOiBQcm9qZWN0c0Jsb2NrUHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb2plY3RzLCBjbGFzc05hbWUgPSBcIlwiLCAuLi5yZXN0UHJvcHMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgaXNTbSB9ID0gdXNlQnJlYWtwb2ludHMoKTtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlPFByb2plY3RzQmxvY2sgfCBudWxsPihcclxuICAgIHByb2plY3RzWzBdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvamVjdFNlbGVjdGlvbiA9IChwcm9qZWN0OiBQcm9qZWN0c0Jsb2NrKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFByb2plY3QocHJvamVjdCk7XHJcbiAgICBpZiAoaXNTbSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3QuaWQpO1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5yZXN0UHJvcHN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBheC1oLXNjcmVlblwiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB4LTQgbWQ6cC0xMiBtbC0wIG1kOm1sLTEwXCIgaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi04XCI+TXkgUHJvamVjdHM8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC02IG1kOmdhcC0xNiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgZmxleCBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWItNCB3LWZ1bGwgbWQ6dy0xLzIgbWF4LXcteHMgcm91bmRlZC1sZyBzaGFkb3ctbWQgcC00IGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0ICYmIHNlbGVjdGVkUHJvamVjdC5pZCA9PT0gcHJvamVjdC5pZCA/ICd0ZXh0LWdyZWVuLTUwMCcgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUHJvamVjdFNlbGVjdGlvbihwcm9qZWN0KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgb2JqZWN0LWNvdmVyIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPntwcm9qZWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yIG1heC13LXNtXCI+XHJcbiAgICAgICAgICAgICAge3NlbGVjdGVkUHJvamVjdCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGlkPXtzZWxlY3RlZFByb2plY3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LW1kIHAtNCBtYi0xMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkUHJvamVjdC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3NlbGVjdGVkUHJvamVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItNCBoLTQwIG9iamVjdC1jb3ZlciByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8UmljaFRleHRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtXCJcclxuICAgICAgICAgICAgICAgICAgICBodG1sPXtzZWxlY3RlZFByb2plY3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFByb2plY3QubGlua1RleHQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzZWxlY3RlZFByb2plY3QubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG10LTQgcHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1yZWQtNTAwIHJvdW5kZWQtbGcgdGV4dC1jZW50ZXIgaG92ZXI6YmctcmVkLTYwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFByb2plY3QubGlua1RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzQmxvY2s7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmljaFRleHQiLCJ1c2VCcmVha3BvaW50cyIsIlByb2plY3RzQmxvY2siLCJwcm9wcyIsInByb2plY3RzIiwiY2xhc3NOYW1lIiwicmVzdFByb3BzIiwiaXNTbSIsInNlbGVjdGVkUHJvamVjdCIsInNldFNlbGVjdGVkUHJvamVjdCIsImhhbmRsZVByb2plY3RTZWxlY3Rpb24iLCJwcm9qZWN0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJkaXYiLCJzZWN0aW9uIiwiaDIiLCJtYXAiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsImh0bWwiLCJkZXNjcmlwdGlvbiIsImxpbmtUZXh0IiwiYSIsImhyZWYiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/blocks/project/ProjectsBlock.tsx\n"));

/***/ })

});