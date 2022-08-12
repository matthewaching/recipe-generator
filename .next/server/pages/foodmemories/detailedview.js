"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/foodmemories/detailedview";
exports.ids = ["pages/foodmemories/detailedview"];
exports.modules = {

/***/ "./pages/foodmemories/detailedview/index.js":
/*!**************************************************!*\
  !*** ./pages/foodmemories/detailedview/index.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DetailedView)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\n/* harmony import */ var _src_firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/firebase-config */ \"./src/firebase-config.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_database__WEBPACK_IMPORTED_MODULE_3__, _src_firebase_config__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_database__WEBPACK_IMPORTED_MODULE_3__, _src_firebase_config__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction DetailedView() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { 0: pageItem , 1: setItem  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!router.isReady) return;\n        const query = router.query;\n        return (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.onValue)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_src_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db), (querySnapShot)=>{\n            let data = querySnapShot.val() || {};\n            setItem(data.dishes[router.query.dish]);\n            console.log(data.dishes[router.query.dish]);\n        });\n    }, [\n        router.isReady,\n        router.query\n    ]);\n    if (!pageItem) return;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: pageItem.name\n            }, void 0, false, {\n                fileName: \"/home/matt/repos/food-memories/pages/foodmemories/detailedview/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Date: \",\n                    pageItem.date\n                ]\n            }, void 0, true, {\n                fileName: \"/home/matt/repos/food-memories/pages/foodmemories/detailedview/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Location: \",\n                    pageItem.location\n                ]\n            }, void 0, true, {\n                fileName: \"/home/matt/repos/food-memories/pages/foodmemories/detailedview/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"City: \",\n                    pageItem.city\n                ]\n            }, void 0, true, {\n                fileName: \"/home/matt/repos/food-memories/pages/foodmemories/detailedview/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Mealtime: \",\n                    pageItem.meal\n                ]\n            }, void 0, true, {\n                fileName: \"/home/matt/repos/food-memories/pages/foodmemories/detailedview/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Type of Dish: \",\n                    pageItem.type\n                ]\n            }, void 0, true, {\n                fileName: \"/home/matt/repos/food-memories/pages/foodmemories/detailedview/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/matt/repos/food-memories/pages/foodmemories/detailedview/index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb29kbWVtb3JpZXMvZGV0YWlsZWR2aWV3L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ0k7QUFDSztBQUNDO0FBRW5DLFNBQVNNLFlBQVksR0FBRztJQUNyQyxNQUFNQyxNQUFNLEdBQUdQLHNEQUFTLEVBQUU7SUFFMUIsTUFBTSxLQUFDUSxRQUFRLE1BQUVDLE9BQU8sTUFBSVAsK0NBQVEsRUFBRTtJQUV0Q0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxDQUFDTSxNQUFNLENBQUNHLE9BQU8sRUFBRSxPQUFPO1FBQzVCLE1BQU1DLEtBQUssR0FBR0osTUFBTSxDQUFDSSxLQUFLO1FBQzFCLE9BQU9SLDBEQUFPLENBQUNDLHNEQUFHLENBQUNDLG9EQUFFLENBQUMsRUFBRSxDQUFDTyxhQUFhLEdBQUs7WUFDekMsSUFBSUMsSUFBSSxHQUFHRCxhQUFhLENBQUNFLEdBQUcsRUFBRSxJQUFJLEVBQUU7WUFDcENMLE9BQU8sQ0FBQ0ksSUFBSSxDQUFDRSxNQUFNLENBQUNSLE1BQU0sQ0FBQ0ksS0FBSyxDQUFDSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDRSxNQUFNLENBQUNSLE1BQU0sQ0FBQ0ksS0FBSyxDQUFDSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzdDLENBQUMsQ0FBQztLQUNKLEVBQUU7UUFBQ1QsTUFBTSxDQUFDRyxPQUFPO1FBQUVILE1BQU0sQ0FBQ0ksS0FBSztLQUFDLENBQUMsQ0FBQztJQUVuQyxJQUFJLENBQUNILFFBQVEsRUFBRSxPQUFPO0lBRXRCLHFCQUNFLDhEQUFDVyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxLQUFLOzswQkFDbEIsOERBQUNDLElBQUU7MEJBQUViLFFBQVEsQ0FBQ2MsSUFBSTs7Ozs7b0JBQU07MEJBQ3hCLDhEQUFDQyxHQUFDOztvQkFBQyxRQUFNO29CQUFDZixRQUFRLENBQUNnQixJQUFJOzs7Ozs7b0JBQUs7MEJBQzVCLDhEQUFDRCxHQUFDOztvQkFBQyxZQUFVO29CQUFDZixRQUFRLENBQUNpQixRQUFROzs7Ozs7b0JBQUs7MEJBQ3BDLDhEQUFDRixHQUFDOztvQkFBQyxRQUFNO29CQUFDZixRQUFRLENBQUNrQixJQUFJOzs7Ozs7b0JBQUs7MEJBQzVCLDhEQUFDSCxHQUFDOztvQkFBQyxZQUFVO29CQUFDZixRQUFRLENBQUNtQixJQUFJOzs7Ozs7b0JBQUs7MEJBQ2hDLDhEQUFDSixHQUFDOztvQkFBQyxnQkFBYztvQkFBQ2YsUUFBUSxDQUFDb0IsSUFBSTs7Ozs7O29CQUFLOzs7Ozs7WUFDaEMsQ0FDTjtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1tZW1vcmllcy8uL3BhZ2VzL2Zvb2RtZW1vcmllcy9kZXRhaWxlZHZpZXcvaW5kZXguanM/MDMwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG9uVmFsdWUsIHJlZiB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2ZpcmViYXNlLWNvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxlZFZpZXcoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtwYWdlSXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xuICAgIGNvbnN0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xuICAgIHJldHVybiBvblZhbHVlKHJlZihkYiksIChxdWVyeVNuYXBTaG90KSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHF1ZXJ5U25hcFNob3QudmFsKCkgfHwge307XG4gICAgICBzZXRJdGVtKGRhdGEuZGlzaGVzW3JvdXRlci5xdWVyeS5kaXNoXSk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmRpc2hlc1tyb3V0ZXIucXVlcnkuZGlzaF0pO1xuICAgIH0pO1xuICB9LCBbcm91dGVyLmlzUmVhZHksIHJvdXRlci5xdWVyeV0pO1xuXG4gIGlmICghcGFnZUl0ZW0pIHJldHVybjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8aDE+e3BhZ2VJdGVtLm5hbWV9PC9oMT5cbiAgICAgIDxwPkRhdGU6IHtwYWdlSXRlbS5kYXRlfTwvcD5cbiAgICAgIDxwPkxvY2F0aW9uOiB7cGFnZUl0ZW0ubG9jYXRpb259PC9wPlxuICAgICAgPHA+Q2l0eToge3BhZ2VJdGVtLmNpdHl9PC9wPlxuICAgICAgPHA+TWVhbHRpbWU6IHtwYWdlSXRlbS5tZWFsfTwvcD5cbiAgICAgIDxwPlR5cGUgb2YgRGlzaDoge3BhZ2VJdGVtLnR5cGV9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwib25WYWx1ZSIsInJlZiIsImRiIiwiRGV0YWlsZWRWaWV3Iiwicm91dGVyIiwicGFnZUl0ZW0iLCJzZXRJdGVtIiwiaXNSZWFkeSIsInF1ZXJ5IiwicXVlcnlTbmFwU2hvdCIsImRhdGEiLCJ2YWwiLCJkaXNoZXMiLCJkaXNoIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibmFtZSIsInAiLCJkYXRlIiwibG9jYXRpb24iLCJjaXR5IiwibWVhbCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/foodmemories/detailedview/index.js\n");

/***/ }),

/***/ "./src/firebase-config.js":
/*!********************************!*\
  !*** ./src/firebase-config.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyA7LHyfPQ0mjyNMXYItDwnaWpEYAewg6to\",\n    authDomain: \"foodmemories-6b5eb.firebaseapp.com\",\n    projectId: \"foodmemories-6b5eb\",\n    storageBucket: \"foodmemories-6b5eb.appspot.com\",\n    messagingSenderId: \"109282309473\",\n    appId: \"1:109282309473:web:c7eb64c83effe7a61dc120\",\n    databaseURL: \"https://foodmemories-6b5eb-default-rtdb.firebaseio.com\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UtY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QztBQUNHO0FBRWhELE1BQU1FLGNBQWMsR0FBRztJQUNyQkMsTUFBTSxFQUFFLHlDQUF5QztJQUNqREMsVUFBVSxFQUFFLG9DQUFvQztJQUNoREMsU0FBUyxFQUFFLG9CQUFvQjtJQUMvQkMsYUFBYSxFQUFFLGdDQUFnQztJQUMvQ0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztJQUNsREMsV0FBVyxFQUFFLHdEQUF3RDtDQUN0RTtBQUVELE1BQU1DLEdBQUcsR0FBR1YsMkRBQWEsQ0FBQ0UsY0FBYyxDQUFDO0FBQ3pDLE1BQU1TLEVBQUUsR0FBR1YsOERBQVcsQ0FBQ1MsR0FBRyxDQUFDO0FBRWIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLW1lbW9yaWVzLy4vc3JjL2ZpcmViYXNlLWNvbmZpZy5qcz83NWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXREYXRhYmFzZSB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUE3TEh5ZlBRMG1qeU5NWFlJdER3bmFXcEVZQWV3ZzZ0b1wiLFxuICBhdXRoRG9tYWluOiBcImZvb2RtZW1vcmllcy02YjVlYi5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcImZvb2RtZW1vcmllcy02YjVlYlwiLFxuICBzdG9yYWdlQnVja2V0OiBcImZvb2RtZW1vcmllcy02YjVlYi5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDkyODIzMDk0NzNcIixcbiAgYXBwSWQ6IFwiMToxMDkyODIzMDk0NzM6d2ViOmM3ZWI2NGM4M2VmZmU3YTYxZGMxMjBcIixcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9mb29kbWVtb3JpZXMtNmI1ZWItZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXG59O1xuXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbmNvbnN0IGRiID0gZ2V0RGF0YWJhc2UoYXBwKTtcblxuZXhwb3J0IHsgZGIgfTtcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0RGF0YWJhc2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImRhdGFiYXNlVVJMIiwiYXBwIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/firebase-config.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("firebase/database");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/foodmemories/detailedview/index.js"));
module.exports = __webpack_exports__;

})();