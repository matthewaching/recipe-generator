"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/recipelookup",{

/***/ "./src/components/recipelookup/DisplayRecipe.js":
/*!******************************************************!*\
  !*** ./src/components/recipelookup/DisplayRecipe.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_matt_repos_food_memories_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_matt_repos_food_memories_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_matt_repos_food_memories_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction DisplayRecipe() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), currentRecipe = ref[0], setRecipe = ref[1];\n    var url = \"https://api.spoonacular.com/recipes/random?apiKey=3dd0a0e1bb084632878d8bd6074e22c1\";\n    var callApi = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_home_matt_repos_food_memories_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res, json;\n            return _home_matt_repos_food_memories_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(url);\n                    case 2:\n                        res = _ctx.sent;\n                        _ctx.next = 5;\n                        return res.json();\n                    case 5:\n                        json = _ctx.sent;\n                        console.log(json.recipes[0].title);\n                        setRecipe(json);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callApi() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        callApi();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/matt/repos/food-memories/src/components/recipelookup/DisplayRecipe.js\",\n        lineNumber: 20,\n        columnNumber: 10\n    }, this);\n}\n_s(DisplayRecipe, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = DisplayRecipe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DisplayRecipe);\nvar _c;\n$RefreshReg$(_c, \"DisplayRecipe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9yZWNpcGVsb29rdXAvRGlzcGxheVJlY2lwZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQTRDO0FBRTVDLFNBQVNFLGFBQWEsR0FBRzs7SUFDdkIsSUFBbUNGLEdBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUF0Q0csYUFBYSxHQUFlSCxHQUFVLEdBQXpCLEVBQUVJLFNBQVMsR0FBSUosR0FBVSxHQUFkO0lBRS9CLElBQU1LLEdBQUcsR0FDUCxvRkFBb0Y7SUFFdEYsSUFBTUMsT0FBTzttQkFBRyxpUEFBWTtnQkFDcEJDLEdBQUcsRUFDSEMsSUFBSTs7Ozs7K0JBRFFDLEtBQUssQ0FBQ0osR0FBRyxDQUFDOzt3QkFBdEJFLEdBQUcsWUFBbUI7OytCQUNUQSxHQUFHLENBQUNDLElBQUksRUFBRTs7d0JBQXZCQSxJQUFJLFlBQW1CO3dCQUM3QkUsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQzt3QkFDbkNULFNBQVMsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7Ozs7OztTQUNqQjt3QkFMS0YsT0FBTzs7O09BS1o7SUFFREwsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RLLE9BQU8sRUFBRSxDQUFDO0tBQ1gsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUFPLDhEQUFDUSxLQUFHOzs7O1lBQU8sQ0FBQztDQUNwQjtHQWxCUVosYUFBYTtBQUFiQSxLQUFBQSxhQUFhO0FBb0J0QiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3JlY2lwZWxvb2t1cC9EaXNwbGF5UmVjaXBlLmpzPzdiOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBEaXNwbGF5UmVjaXBlKCkge1xuICBjb25zdCBbY3VycmVudFJlY2lwZSwgc2V0UmVjaXBlXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgdXJsID1cbiAgICBcImh0dHBzOi8vYXBpLnNwb29uYWN1bGFyLmNvbS9yZWNpcGVzL3JhbmRvbT9hcGlLZXk9M2RkMGEwZTFiYjA4NDYzMjg3OGQ4YmQ2MDc0ZTIyYzFcIjtcblxuICBjb25zdCBjYWxsQXBpID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2coanNvbi5yZWNpcGVzWzBdLnRpdGxlKTtcbiAgICBzZXRSZWNpcGUoanNvbik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjYWxsQXBpKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGRpdj48L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlSZWNpcGU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEaXNwbGF5UmVjaXBlIiwiY3VycmVudFJlY2lwZSIsInNldFJlY2lwZSIsInVybCIsImNhbGxBcGkiLCJyZXMiLCJqc29uIiwiZmV0Y2giLCJjb25zb2xlIiwibG9nIiwicmVjaXBlcyIsInRpdGxlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/recipelookup/DisplayRecipe.js\n"));

/***/ })

});