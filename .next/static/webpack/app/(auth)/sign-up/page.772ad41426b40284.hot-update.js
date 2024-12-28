"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/sign-up/page",{

/***/ "(app-pages-browser)/./components/AuthForm.tsx":
/*!*********************************!*\
  !*** ./components/AuthForm.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./components/ui/form.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst formSchema = zod__WEBPACK_IMPORTED_MODULE_5__.z.object({\n    username: zod__WEBPACK_IMPORTED_MODULE_5__.z.string().min(2).max(50)\n});\nconst AuthForm = (param)=>{\n    let { type } = param;\n    _s();\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_1__.zodResolver)(formSchema),\n        defaultValues: {\n            username: \"\"\n        }\n    });\n    const onSubmit = async (values)=>{\n        console.log(values);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.Form, {\n            ...form,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: form.handleSubmit(onSubmit),\n                className: \"auth-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"form-title\",\n                        children: type\n                    }, void 0, false, {\n                        fileName: \"/Users/gunkiratsingh/Documents/YEAR3/PROJECTS/Skybyte/components/AuthForm.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormField, {\n                        control: form.control,\n                        name: \"username\",\n                        render: (param)=>{\n                            let { field } = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormItem, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                        children: \"Username\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gunkiratsingh/Documents/YEAR3/PROJECTS/Skybyte/components/AuthForm.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                            placeholder: \"shadcn\",\n                                            ...field\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gunkiratsingh/Documents/YEAR3/PROJECTS/Skybyte/components/AuthForm.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gunkiratsingh/Documents/YEAR3/PROJECTS/Skybyte/components/AuthForm.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormDescription, {\n                                        children: \"This is your public display name.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gunkiratsingh/Documents/YEAR3/PROJECTS/Skybyte/components/AuthForm.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormMessage, {}, void 0, false, {\n                                        fileName: \"/Users/gunkiratsingh/Documents/YEAR3/PROJECTS/Skybyte/components/AuthForm.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, void 0)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/gunkiratsingh/Documents/YEAR3/PROJECTS/Skybyte/components/AuthForm.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/gunkiratsingh/Documents/YEAR3/PROJECTS/Skybyte/components/AuthForm.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gunkiratsingh/Documents/YEAR3/PROJECTS/Skybyte/components/AuthForm.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gunkiratsingh/Documents/YEAR3/PROJECTS/Skybyte/components/AuthForm.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/gunkiratsingh/Documents/YEAR3/PROJECTS/Skybyte/components/AuthForm.tsx\",\n            lineNumber: 39,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(AuthForm, \"woqMTX6igxsX6/9vX4dQZlxR7yY=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c = AuthForm;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQXV0aEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFdUI7QUFDOEI7QUFDWjtBQUVNO0FBU2xCO0FBQ2dCO0FBRTdDLE1BQU1ZLGFBQWFaLGtDQUFDQSxDQUFDYSxNQUFNLENBQUM7SUFDMUJDLFVBQVVkLGtDQUFDQSxDQUFDZSxNQUFNLEdBQUdDLEdBQUcsQ0FBQyxHQUFHQyxHQUFHLENBQUM7QUFDbEM7QUFJQSxNQUFNQyxXQUFXO1FBQUMsRUFBQ0MsSUFBSSxFQUFtQjs7SUFDdEMsTUFBTUMsT0FBT2xCLHdEQUFPQSxDQUE2QjtRQUM3Q21CLFVBQVVwQixvRUFBV0EsQ0FBQ1c7UUFDdEJVLGVBQWU7WUFDYlIsVUFBVTtRQUNaO0lBQ0Y7SUFFQSxNQUFNUyxXQUFXLE9BQU1DO1FBQ3JCQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2Q7SUFFSixxQkFDTTtrQkFDSiw0RUFBQ3BCLHFEQUFJQTtZQUFFLEdBQUdnQixJQUFJO3NCQUNaLDRFQUFDQTtnQkFBS0csVUFBVUgsS0FBS08sWUFBWSxDQUFDSjtnQkFBV0ssV0FBVTs7a0NBQ3JELDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FDVFQ7Ozs7OztrQ0FFTCw4REFBQ1osMERBQVNBO3dCQUNSdUIsU0FBU1YsS0FBS1UsT0FBTzt3QkFDckJDLE1BQUs7d0JBQ0xDLFFBQVE7Z0NBQUMsRUFBRUMsS0FBSyxFQUFFO2lEQUNoQiw4REFBQ3pCLHlEQUFRQTs7a0RBQ1AsOERBQUNDLDBEQUFTQTtrREFBQzs7Ozs7O2tEQUNYLDhEQUFDSiw0REFBV0E7a0RBQ1YsNEVBQUNNLHVEQUFLQTs0Q0FBQ3VCLGFBQVk7NENBQVUsR0FBR0QsS0FBSzs7Ozs7Ozs7Ozs7a0RBRXZDLDhEQUFDM0IsZ0VBQWVBO2tEQUFDOzs7Ozs7a0RBR2pCLDhEQUFDSSw0REFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlsQiw4REFBQ1AseURBQU1BO3dCQUFDZ0IsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlCO0dBekNNRDs7UUFDV2hCLG9EQUFPQTs7O0tBRGxCZ0I7QUEyQ04saUVBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndW5raXJhdHNpbmdoL0RvY3VtZW50cy9ZRUFSMy9QUk9KRUNUUy9Ta3lieXRlL2NvbXBvbmVudHMvQXV0aEZvcm0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG4gXG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiXG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZFwiXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiXG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcbmltcG9ydCB7XG4gIEZvcm0sXG4gIEZvcm1Db250cm9sLFxuICBGb3JtRGVzY3JpcHRpb24sXG4gIEZvcm1GaWVsZCxcbiAgRm9ybUl0ZW0sXG4gIEZvcm1MYWJlbCxcbiAgRm9ybU1lc3NhZ2UsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZm9ybVwiXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxuIFxuY29uc3QgZm9ybVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXNlcm5hbWU6IHouc3RyaW5nKCkubWluKDIpLm1heCg1MCksXG59KVxuXG50eXBlIEZvcm1UeXBlID0gXCJzaWduLWluXCIgfCBcInNpZ24tdXBcIjtcblxuY29uc3QgQXV0aEZvcm0gPSAoe3R5cGV9OiB7dHlwZTogRm9ybVR5cGV9KSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IHVzZUZvcm08ei5pbmZlcjx0eXBlb2YgZm9ybVNjaGVtYT4+KHtcbiAgICAgICAgcmVzb2x2ZXI6IHpvZFJlc29sdmVyKGZvcm1TY2hlbWEpLFxuICAgICAgICBkZWZhdWx0VmFsdWVzOiB7XG4gICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICBcbiAgICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmModmFsdWVzOiB6LmluZmVyPHR5cGVvZiBmb3JtU2NoZW1hPikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG4gICAgICB9XG5cbiAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICA8Rm9ybSB7Li4uZm9ybX0+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybS5oYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9XCJhdXRoLWZvcm1cIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvcm0tdGl0bGVcIj5cbiAgICAgICAgICAgIHt0eXBlfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgY29udHJvbD17Zm9ybS5jb250cm9sfVxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWw+VXNlcm5hbWU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cInNoYWRjblwiIHsuLi5maWVsZH0gLz5cbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPEZvcm1EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICBUaGlzIGlzIHlvdXIgcHVibGljIGRpc3BsYXkgbmFtZS5cbiAgICAgICAgICAgICAgPC9Gb3JtRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSAvPlxuICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0Zvcm0+XG4gICAgey8qT1RQIHZlcmlmaWNhdGlvbiovfVxuICAgICAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybSJdLCJuYW1lcyI6WyJ6Iiwiem9kUmVzb2x2ZXIiLCJ1c2VGb3JtIiwiQnV0dG9uIiwiRm9ybSIsIkZvcm1Db250cm9sIiwiRm9ybURlc2NyaXB0aW9uIiwiRm9ybUZpZWxkIiwiRm9ybUl0ZW0iLCJGb3JtTGFiZWwiLCJGb3JtTWVzc2FnZSIsIklucHV0IiwiZm9ybVNjaGVtYSIsIm9iamVjdCIsInVzZXJuYW1lIiwic3RyaW5nIiwibWluIiwibWF4IiwiQXV0aEZvcm0iLCJ0eXBlIiwiZm9ybSIsInJlc29sdmVyIiwiZGVmYXVsdFZhbHVlcyIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImNsYXNzTmFtZSIsImgxIiwiY29udHJvbCIsIm5hbWUiLCJyZW5kZXIiLCJmaWVsZCIsInBsYWNlaG9sZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AuthForm.tsx\n"));

/***/ })

});