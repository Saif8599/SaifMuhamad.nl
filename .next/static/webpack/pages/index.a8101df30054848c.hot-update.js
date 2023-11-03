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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_typography_rich_text_RichText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/typography/rich-text/RichText */ \"./src/features/ui/typography/rich-text/RichText.tsx\");\n/* harmony import */ var _media_query_useBreakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../media-query/useBreakpoints */ \"./src/features/media-query/useBreakpoints.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProjectsBlock = (props)=>{\n    _s();\n    const { projects, className = \"\", ...restProps } = props;\n    const { isSm } = (0,_media_query_useBreakpoints__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(projects[0]);\n    const handleProjectSelection = (project)=>{\n        setSelectedProject(project);\n        if (!isSm) {\n            const element = document.getElementById(project.id);\n            if (element) {\n                element.scrollIntoView({\n                    behavior: \"smooth\"\n                });\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        ...restProps,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-full ax-h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"px-4 md:p-12 ml-0 md:ml-10\",\n                id: \"projects\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-bold mb-8\",\n                        children: \"My Projects\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row gap-6 md:gap-16 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-1/2 flex flex-wrap\",\n                                children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4 w-full md:w-1/2 max-w-xs rounded-lg shadow-md p-4 cursor-pointer \".concat(selectedProject && selectedProject.id === project.id ? \"text-red-500 shadow-red-600\" : \"\"),\n                                        onClick: ()=>handleProjectSelection(project),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mb-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: project.image,\n                                                    alt: project.title,\n                                                    className: \"w-full h-32 object-cover rounded\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-xl font-bold mb-2\",\n                                                children: project.title\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, project.id, true, {\n                                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-1/2 max-w-sm\",\n                                style: {\n                                    height: \"500px\"\n                                },\n                                children: selectedProject && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: selectedProject.id,\n                                    className: \"rounded-lg shadow-md p-4 mb-10 shadow-red-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: selectedProject.image,\n                                            alt: selectedProject.title,\n                                            className: \"w-full mb-4 h-40 object-cover rounded\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl font-bold mb-2\",\n                                            children: selectedProject.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_typography_rich_text_RichText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            className: \"text-sm\",\n                                            html: selectedProject.description\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        selectedProject.linkText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: selectedProject.link,\n                                            className: \"block mt-4 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg text-center hover:bg-red-600 transition-all duration-300\",\n                                            children: selectedProject.linkText\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\saifmuhamad.nl\\\\src\\\\features\\\\blocks\\\\project\\\\ProjectsBlock.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsBlock, \"R/xcxjiETuwShOzy07Yjfbw+7nU=\", false, function() {\n    return [\n        _media_query_useBreakpoints__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = ProjectsBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsBlock);\nvar _c;\n$RefreshReg$(_c, \"ProjectsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvYmxvY2tzL3Byb2plY3QvUHJvamVjdHNCbG9jay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ3NCO0FBQ0E7QUFnQjlELE1BQU1JLGdCQUFnQixDQUFDQzs7SUFDckIsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRSxFQUFFLEdBQUdDLFdBQVcsR0FBR0g7SUFDbkQsTUFBTSxFQUFFSSxJQUFJLEVBQUUsR0FBR04sdUVBQWNBO0lBRS9CLE1BQU0sQ0FBQ08saUJBQWlCQyxtQkFBbUIsR0FBR1YsK0NBQVFBLENBQ3BESyxRQUFRLENBQUMsRUFBRTtJQUdiLE1BQU1NLHlCQUF5QixDQUFDQztRQUM5QkYsbUJBQW1CRTtRQUNuQixJQUFJLENBQUNKLE1BQU07WUFDVCxNQUFNSyxVQUFVQyxTQUFTQyxjQUFjLENBQUNILFFBQVFJLEVBQUU7WUFDbEQsSUFBSUgsU0FBUztnQkFDWEEsUUFBUUksY0FBYyxDQUFDO29CQUFFQyxVQUFVO2dCQUFTO1lBQzlDO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJYixXQUFXQTtRQUFZLEdBQUdDLFNBQVM7a0JBQ3RDLDRFQUFDWTtZQUFJYixXQUFVO3NCQUNiLDRFQUFDYztnQkFBUWQsV0FBVTtnQkFBNkJVLElBQUc7O2tDQUNqRCw4REFBQ0s7d0JBQUdmLFdBQVU7a0NBQTBCOzs7Ozs7a0NBQ3hDLDhEQUFDYTt3QkFBSWIsV0FBVTs7MENBQ2IsOERBQUNhO2dDQUFJYixXQUFVOzBDQUNaRCxTQUFTaUIsR0FBRyxDQUFDLENBQUNWLHdCQUNiLDhEQUFDTzt3Q0FFQ2IsV0FBVyx5RUFJVixPQUhDRyxtQkFBbUJBLGdCQUFnQk8sRUFBRSxLQUFLSixRQUFRSSxFQUFFLEdBQ2hELGdDQUNBO3dDQUVOTyxTQUFTLElBQU1aLHVCQUF1QkM7OzBEQUV0Qyw4REFBQ087Z0RBQUliLFdBQVU7MERBQ2IsNEVBQUNrQjtvREFDQ0MsS0FBS2IsUUFBUWMsS0FBSztvREFDbEJDLEtBQUtmLFFBQVFnQixLQUFLO29EQUNsQnRCLFdBQVU7Ozs7Ozs7Ozs7OzBEQUdkLDhEQUFDZTtnREFBR2YsV0FBVTswREFBMEJNLFFBQVFnQixLQUFLOzs7Ozs7O3VDQWZoRGhCLFFBQVFJLEVBQUU7Ozs7Ozs7Ozs7MENBbUJyQiw4REFBQ0c7Z0NBQ0NiLFdBQVU7Z0NBQ1Z1QixPQUFPO29DQUFFQyxRQUFRO2dDQUFROzBDQUV4QnJCLGlDQUNDLDhEQUFDVTtvQ0FDQ0gsSUFBSVAsZ0JBQWdCTyxFQUFFO29DQUN0QlYsV0FBVTs7c0RBRVYsOERBQUNrQjs0Q0FDQ0MsS0FBS2hCLGdCQUFnQmlCLEtBQUs7NENBQzFCQyxLQUFLbEIsZ0JBQWdCbUIsS0FBSzs0Q0FDMUJ0QixXQUFVOzs7Ozs7c0RBRVosOERBQUNlOzRDQUFHZixXQUFVO3NEQUNYRyxnQkFBZ0JtQixLQUFLOzs7Ozs7c0RBRXhCLDhEQUFDM0IseUVBQVFBOzRDQUNQSyxXQUFVOzRDQUNWeUIsTUFBTXRCLGdCQUFnQnVCLFdBQVc7Ozs7Ozt3Q0FFbEN2QixnQkFBZ0J3QixRQUFRLGtCQUN2Qiw4REFBQ0M7NENBQ0NDLE1BQU0xQixnQkFBZ0IyQixJQUFJOzRDQUMxQjlCLFdBQVU7c0RBRVRHLGdCQUFnQndCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVcvQztHQW5GTTlCOztRQUVhRCxtRUFBY0E7OztLQUYzQkM7QUFxRk4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2Jsb2Nrcy9wcm9qZWN0L1Byb2plY3RzQmxvY2sudHN4P2VhZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSaWNoVGV4dCBmcm9tIFwiLi4vLi4vdWkvdHlwb2dyYXBoeS9yaWNoLXRleHQvUmljaFRleHRcIjtcclxuaW1wb3J0IHVzZUJyZWFrcG9pbnRzIGZyb20gXCIuLi8uLi9tZWRpYS1xdWVyeS91c2VCcmVha3BvaW50c1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0c0Jsb2NrIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBsaW5rOiBzdHJpbmc7XHJcbiAgbGlua1RleHQ6IHN0cmluZztcclxuICBpbWFnZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0c0Jsb2NrUHJvcHNcclxuICBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XHJcbiAgcHJvamVjdHM6IFByb2plY3RzQmxvY2tbXTtcclxufVxyXG5cclxuY29uc3QgUHJvamVjdHNCbG9jayA9IChwcm9wczogUHJvamVjdHNCbG9ja1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9qZWN0cywgY2xhc3NOYW1lID0gXCJcIiwgLi4ucmVzdFByb3BzIH0gPSBwcm9wcztcclxuICBjb25zdCB7IGlzU20gfSA9IHVzZUJyZWFrcG9pbnRzKCk7XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZFByb2plY3QsIHNldFNlbGVjdGVkUHJvamVjdF0gPSB1c2VTdGF0ZTxQcm9qZWN0c0Jsb2NrIHwgbnVsbD4oXHJcbiAgICBwcm9qZWN0c1swXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2plY3RTZWxlY3Rpb24gPSAocHJvamVjdDogUHJvamVjdHNCbG9jaykgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgaWYgKCFpc1NtKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0LmlkKTtcclxuICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnJlc3RQcm9wc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGF4LWgtc2NyZWVuXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHgtNCBtZDpwLTEyIG1sLTAgbWQ6bWwtMTBcIiBpZD1cInByb2plY3RzXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLThcIj5NeSBQcm9qZWN0czwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTYgbWQ6Z2FwLTE2IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBmbGV4IGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtYi00IHctZnVsbCBtZDp3LTEvMiBtYXgtdy14cyByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTQgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFByb2plY3QgJiYgc2VsZWN0ZWRQcm9qZWN0LmlkID09PSBwcm9qZWN0LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1yZWQtNTAwIHNoYWRvdy1yZWQtNjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUHJvamVjdFNlbGVjdGlvbihwcm9qZWN0KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgb2JqZWN0LWNvdmVyIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPntwcm9qZWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgbWF4LXctc21cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI1MDBweFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2VsZWN0ZWRQcm9qZWN0ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgaWQ9e3NlbGVjdGVkUHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBzaGFkb3ctbWQgcC00IG1iLTEwIHNoYWRvdy1yZWQtNjAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRQcm9qZWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17c2VsZWN0ZWRQcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtYi00IGgtNDAgb2JqZWN0LWNvdmVyIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFByb2plY3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw9e3NlbGVjdGVkUHJvamVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUHJvamVjdC5saW5rVGV4dCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3NlbGVjdGVkUHJvamVjdC5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtNCBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLXJlZC01MDAgcm91bmRlZC1sZyB0ZXh0LWNlbnRlciBob3ZlcjpiZy1yZWQtNjAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUHJvamVjdC5saW5rVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNCbG9jaztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSaWNoVGV4dCIsInVzZUJyZWFrcG9pbnRzIiwiUHJvamVjdHNCbG9jayIsInByb3BzIiwicHJvamVjdHMiLCJjbGFzc05hbWUiLCJyZXN0UHJvcHMiLCJpc1NtIiwic2VsZWN0ZWRQcm9qZWN0Iiwic2V0U2VsZWN0ZWRQcm9qZWN0IiwiaGFuZGxlUHJvamVjdFNlbGVjdGlvbiIsInByb2plY3QiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImRpdiIsInNlY3Rpb24iLCJoMiIsIm1hcCIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwic3R5bGUiLCJoZWlnaHQiLCJodG1sIiwiZGVzY3JpcHRpb24iLCJsaW5rVGV4dCIsImEiLCJocmVmIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/blocks/project/ProjectsBlock.tsx\n"));

/***/ })

});