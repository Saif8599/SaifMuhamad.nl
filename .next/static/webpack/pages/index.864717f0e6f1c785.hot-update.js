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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_typography_rich_text_RichText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/typography/rich-text/RichText */ \"./src/features/ui/typography/rich-text/RichText.tsx\");\n/* harmony import */ var _media_query_useBreakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../media-query/useBreakpoints */ \"./src/features/media-query/useBreakpoints.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProjectsBlock = (props)=>{\n    _s();\n    const { projects, className = \"\", ...restProps } = props;\n    const { isSm } = (0,_media_query_useBreakpoints__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(projects[0]);\n    const [isImageModalOpen, setImageModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // State to control modal visibility\n    const handleProjectSelection = (project)=>{\n        setSelectedProject(project);\n        if (!isSm) {\n            const element = document.getElementById(project.id);\n            if (element) {\n                element.scrollIntoView({\n                    behavior: \"smooth\"\n                });\n            }\n        }\n    };\n    const openImageModal = ()=>{\n        setImageModalOpen(true);\n    };\n    const closeImageModal = ()=>{\n        setImageModalOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        ...restProps,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-full ax-h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"px-4 md:p-12 ml-0 md:ml-10\",\n                id: \"projects\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-bold mb-8\",\n                        children: \"My Projects\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row gap-6 md:gap-16 md:items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-1/2 flex flex-wrap\",\n                                children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4 w-full md:w-1/2 max-w-xs rounded-lg shadow-md p-4 cursor-pointer \".concat(selectedProject && selectedProject.id === project.id ? \"text-red-500 shadow-red-600\" : \"\"),\n                                        onClick: ()=>handleProjectSelection(project),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mb-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: project.image,\n                                                    alt: project.title,\n                                                    className: \"w-full h-32 object-cover rounded\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-xl font-bold mb-2\",\n                                                children: project.title\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, project.id, true, {\n                                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-1/2 max-w-sm h-full\",\n                                style: {\n                                    height: \"500px\"\n                                },\n                                children: selectedProject && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: selectedProject.id,\n                                    className: \"rounded-lg shadow-md p-4 mb-10 shadow-red-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: selectedProject.image,\n                                            alt: selectedProject.title,\n                                            className: \"w-full mb-4 h-40 object-cover rounded\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl font-bold mb-2\",\n                                            children: selectedProject.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_typography_rich_text_RichText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            className: \"text-sm mt-4\",\n                                            html: selectedProject.description\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        selectedProject.linkText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: selectedProject.link,\n                                            className: \"mt-10 flex justify-center shadow-red-600 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out\",\n                                            children: selectedProject.linkText\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsBlock, \"L1EGJFBORkbchP0S7t3yVm5eM1w=\", false, function() {\n    return [\n        _media_query_useBreakpoints__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = ProjectsBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsBlock);\nvar _c;\n$RefreshReg$(_c, \"ProjectsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvYmxvY2tzL3Byb2plY3QvUHJvamVjdHNCbG9jay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ3NCO0FBQ0E7QUFnQjlELE1BQU1JLGdCQUFnQixDQUFDQzs7SUFDckIsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRSxFQUFFLEdBQUdDLFdBQVcsR0FBR0g7SUFDbkQsTUFBTSxFQUFFSSxJQUFJLEVBQUUsR0FBR04sdUVBQWNBO0lBRS9CLE1BQU0sQ0FBQ08saUJBQWlCQyxtQkFBbUIsR0FBR1YsK0NBQVFBLENBQ3BESyxRQUFRLENBQUMsRUFBRTtJQUViLE1BQU0sQ0FBQ00sa0JBQWtCQyxrQkFBa0IsR0FBR1osK0NBQVFBLENBQUMsUUFBUSxvQ0FBb0M7SUFFbkcsTUFBTWEseUJBQXlCLENBQUNDO1FBQzlCSixtQkFBbUJJO1FBQ25CLElBQUksQ0FBQ04sTUFBTTtZQUNULE1BQU1PLFVBQVVDLFNBQVNDLGNBQWMsQ0FBQ0gsUUFBUUksRUFBRTtZQUNsRCxJQUFJSCxTQUFTO2dCQUNYQSxRQUFRSSxjQUFjLENBQUM7b0JBQUVDLFVBQVU7Z0JBQVM7WUFDOUM7UUFDRjtJQUNGO0lBRUEsTUFBTUMsaUJBQWlCO1FBQ3JCVCxrQkFBa0I7SUFDcEI7SUFFQSxNQUFNVSxrQkFBa0I7UUFDdEJWLGtCQUFrQjtJQUNwQjtJQUNBLHFCQUNFLDhEQUFDVztRQUFJakIsV0FBV0E7UUFBWSxHQUFHQyxTQUFTO2tCQUN0Qyw0RUFBQ2dCO1lBQUlqQixXQUFVO3NCQUNiLDRFQUFDa0I7Z0JBQVFsQixXQUFVO2dCQUE2QlksSUFBRzs7a0NBQ2pELDhEQUFDTzt3QkFBR25CLFdBQVU7a0NBQTBCOzs7Ozs7a0NBQ3hDLDhEQUFDaUI7d0JBQUlqQixXQUFVOzswQ0FDYiw4REFBQ2lCO2dDQUFJakIsV0FBVTswQ0FDWkQsU0FBU3FCLEdBQUcsQ0FBQyxDQUFDWix3QkFDYiw4REFBQ1M7d0NBRUNqQixXQUFXLHlFQUlWLE9BSENHLG1CQUFtQkEsZ0JBQWdCUyxFQUFFLEtBQUtKLFFBQVFJLEVBQUUsR0FDaEQsZ0NBQ0E7d0NBRU5TLFNBQVMsSUFBTWQsdUJBQXVCQzs7MERBRXRDLDhEQUFDUztnREFBSWpCLFdBQVU7MERBQ2IsNEVBQUNzQjtvREFDQ0MsS0FBS2YsUUFBUWdCLEtBQUs7b0RBQ2xCQyxLQUFLakIsUUFBUWtCLEtBQUs7b0RBQ2xCMUIsV0FBVTs7Ozs7Ozs7Ozs7MERBR2QsOERBQUNtQjtnREFBR25CLFdBQVU7MERBQTBCUSxRQUFRa0IsS0FBSzs7Ozs7Ozt1Q0FmaERsQixRQUFRSSxFQUFFOzs7Ozs7Ozs7OzBDQW1CckIsOERBQUNLO2dDQUNDakIsV0FBVTtnQ0FDVjJCLE9BQU87b0NBQUVDLFFBQVE7Z0NBQVE7MENBRXhCekIsaUNBQ0MsOERBQUNjO29DQUNDTCxJQUFJVCxnQkFBZ0JTLEVBQUU7b0NBQ3RCWixXQUFVOztzREFFViw4REFBQ3NCOzRDQUNDQyxLQUFLcEIsZ0JBQWdCcUIsS0FBSzs0Q0FDMUJDLEtBQUt0QixnQkFBZ0J1QixLQUFLOzRDQUMxQjFCLFdBQVU7Ozs7OztzREFFWiw4REFBQ21COzRDQUFHbkIsV0FBVTtzREFDWEcsZ0JBQWdCdUIsS0FBSzs7Ozs7O3NEQUV4Qiw4REFBQy9CLHlFQUFRQTs0Q0FDUEssV0FBVTs0Q0FDVjZCLE1BQU0xQixnQkFBZ0IyQixXQUFXOzs7Ozs7d0NBRWxDM0IsZ0JBQWdCNEIsUUFBUSxrQkFDdkIsOERBQUNDOzRDQUNDQyxNQUFNOUIsZ0JBQWdCK0IsSUFBSTs0Q0FDMUJsQyxXQUFVO3NEQUVURyxnQkFBZ0I0QixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXL0M7R0EzRk1sQzs7UUFFYUQsbUVBQWNBOzs7S0FGM0JDO0FBNkZOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9ibG9ja3MvcHJvamVjdC9Qcm9qZWN0c0Jsb2NrLnRzeD9lYWUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmljaFRleHQgZnJvbSBcIi4uLy4uL3VpL3R5cG9ncmFwaHkvcmljaC10ZXh0L1JpY2hUZXh0XCI7XHJcbmltcG9ydCB1c2VCcmVha3BvaW50cyBmcm9tIFwiLi4vLi4vbWVkaWEtcXVlcnkvdXNlQnJlYWtwb2ludHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdHNCbG9jayB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgbGluazogc3RyaW5nO1xyXG4gIGxpbmtUZXh0OiBzdHJpbmc7XHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdHNCbG9ja1Byb3BzXHJcbiAgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xyXG4gIHByb2plY3RzOiBQcm9qZWN0c0Jsb2NrW107XHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3RzQmxvY2sgPSAocHJvcHM6IFByb2plY3RzQmxvY2tQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvamVjdHMsIGNsYXNzTmFtZSA9IFwiXCIsIC4uLnJlc3RQcm9wcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBpc1NtIH0gPSB1c2VCcmVha3BvaW50cygpO1xyXG5cclxuICBjb25zdCBbc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3RdID0gdXNlU3RhdGU8UHJvamVjdHNCbG9jayB8IG51bGw+KFxyXG4gICAgcHJvamVjdHNbMF1cclxuICApO1xyXG4gIGNvbnN0IFtpc0ltYWdlTW9kYWxPcGVuLCBzZXRJbWFnZU1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFN0YXRlIHRvIGNvbnRyb2wgbW9kYWwgdmlzaWJpbGl0eVxyXG5cclxuICBjb25zdCBoYW5kbGVQcm9qZWN0U2VsZWN0aW9uID0gKHByb2plY3Q6IFByb2plY3RzQmxvY2spID0+IHtcclxuICAgIHNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0KTtcclxuICAgIGlmICghaXNTbSkge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdC5pZCk7XHJcbiAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3BlbkltYWdlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJbWFnZU1vZGFsT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZUltYWdlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJbWFnZU1vZGFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnJlc3RQcm9wc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGF4LWgtc2NyZWVuXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHgtNCBtZDpwLTEyIG1sLTAgbWQ6bWwtMTBcIiBpZD1cInByb2plY3RzXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLThcIj5NeSBQcm9qZWN0czwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTYgbWQ6Z2FwLTE2IG1kOml0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBmbGV4IGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtYi00IHctZnVsbCBtZDp3LTEvMiBtYXgtdy14cyByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTQgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFByb2plY3QgJiYgc2VsZWN0ZWRQcm9qZWN0LmlkID09PSBwcm9qZWN0LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1yZWQtNTAwIHNoYWRvdy1yZWQtNjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUHJvamVjdFNlbGVjdGlvbihwcm9qZWN0KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgb2JqZWN0LWNvdmVyIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPntwcm9qZWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgbWF4LXctc20gaC1mdWxsXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNTAwcHhcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3NlbGVjdGVkUHJvamVjdCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGlkPXtzZWxlY3RlZFByb2plY3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LW1kIHAtNCBtYi0xMCBzaGFkb3ctcmVkLTYwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkUHJvamVjdC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3NlbGVjdGVkUHJvamVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItNCBoLTQwIG9iamVjdC1jb3ZlciByb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8UmljaFRleHRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIG10LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw9e3NlbGVjdGVkUHJvamVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUHJvamVjdC5saW5rVGV4dCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3NlbGVjdGVkUHJvamVjdC5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTAgZmxleCBqdXN0aWZ5LWNlbnRlciBzaGFkb3ctcmVkLTYwMCBiZy1yZWQtNjAwIGhvdmVyOmJnLXJlZC03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFByb2plY3QubGlua1RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzQmxvY2s7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmljaFRleHQiLCJ1c2VCcmVha3BvaW50cyIsIlByb2plY3RzQmxvY2siLCJwcm9wcyIsInByb2plY3RzIiwiY2xhc3NOYW1lIiwicmVzdFByb3BzIiwiaXNTbSIsInNlbGVjdGVkUHJvamVjdCIsInNldFNlbGVjdGVkUHJvamVjdCIsImlzSW1hZ2VNb2RhbE9wZW4iLCJzZXRJbWFnZU1vZGFsT3BlbiIsImhhbmRsZVByb2plY3RTZWxlY3Rpb24iLCJwcm9qZWN0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJvcGVuSW1hZ2VNb2RhbCIsImNsb3NlSW1hZ2VNb2RhbCIsImRpdiIsInNlY3Rpb24iLCJoMiIsIm1hcCIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwic3R5bGUiLCJoZWlnaHQiLCJodG1sIiwiZGVzY3JpcHRpb24iLCJsaW5rVGV4dCIsImEiLCJocmVmIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/blocks/project/ProjectsBlock.tsx\n"));

/***/ })

});