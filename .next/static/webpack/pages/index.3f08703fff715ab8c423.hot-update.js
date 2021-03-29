webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndexPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ori_Documents_picshon_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ori_Documents_picshon_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ori_Documents_picshon_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ori_Documents_picshon_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/ori/Documents/picshon/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction IndexPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])('Press \"Get New Word\" to start.'),\n      word = _useState[0],\n      setWord = _useState[1];\n\n  var _getNewWord = /*#__PURE__*/function () {\n    var _ref = Object(_Users_ori_Documents_picshon_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_ori_Documents_picshon_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var url, data;\n      return _Users_ori_Documents_picshon_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              url = \"/api/word\";\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(url);\n\n            case 3:\n              data = _context.sent;\n              setWord(data.data);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function _getNewWord() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-219513728\" + \" \" + \"container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-219513728\" + \" \" + \"text-wrapper\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"jsx-219513728\" + \" \" + \"word\",\n          children: word\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: _getNewWord,\n          className: \"jsx-219513728\" + \" \" + \"button\",\n          children: \"Get a new word\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"219513728\",\n      children: \"body{margin:0;}.button{background-color:rgb(16,185,129);box-shadow:rgba(0,0,0,0) 0px 0px 0px 0px,rgba(0,0,0,0) 0px 0px 0px 0px,rgba(0,0,0,0.1) 0px 4px 6px -1px,rgba(0,0,0,0.06) 0px 2px 4px -1px;font-weight:600;line-height:24px;padding:8px 16px;font-size:16px;}.container{max-width:800px;width:95vw;margin:0 auto;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\\\"Segoe UI\\\",Roboto,\\\"Helvetica Neue\\\",Arial,\\\"Noto Sans\\\",sans-serif,\\\"Apple Color Emoji\\\",\\\"Segoe UI Emoji\\\",\\\"Segoe UI Symbol\\\",\\\"Noto Color Emoji\\\";text-align:center;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmkvRG9jdW1lbnRzL3BpY3Nob24vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJ1QixBQUVzQixBQUVvQixBQVFqQixTQVZGLE9BV0gsV0FDRyxNQVR5SSxRQVUxSSxhQUVBLDBFQUNTLDJDQVpSLGdCQUNDLGlCQUNBLEVBV1EsZUFWVixlQUNmLHFFQVVxQiw2RkFFeU0sK01BRS9OLGtCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9vcmkvRG9jdW1lbnRzL3BpY3Nob24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xuICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnUHJlc3MgXCJHZXQgTmV3IFdvcmRcIiB0byBzdGFydC4nKTtcblxuICBjb25zdCBfZ2V0TmV3V29yZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBcIi9hcGkvd29yZFwiO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICBzZXRXb3JkKGRhdGEuZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZFwiPnt3b3JkfTwvaDE+XG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e19nZXROZXdXb3JkfT5cbiAgICAgICAgICAgIEdldCBhIG5ldyB3b3JkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7IG1hcmdpbjogMCB9XG4gICAgICAuYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNiwgMTg1LCAxMjkpO1xuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwKSAwcHggMHB4IDBweCAwcHgsIHJnYmEoMCwgMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgd2lkdGg6IDk1dnc7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcbiJdfQ== */\\n/*@ sourceURL=/Users/ori/Documents/picshon/pages/index.js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true);\n}\n\n_s(IndexPage, \"MBJM4bDib/YdnwyHU31utOvv9B4=\");\n\n_c = IndexPage;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleFBhZ2UiLCJ1c2VTdGF0ZSIsIndvcmQiLCJzZXRXb3JkIiwiX2dldE5ld1dvcmQiLCJ1cmwiLCJheGlvcyIsImdldCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBQyxnQ0FBRCxDQURFO0FBQUEsTUFDM0JDLElBRDJCO0FBQUEsTUFDckJDLE9BRHFCOztBQUdsQyxNQUFNQyxXQUFXO0FBQUEsa1JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1pDLGlCQURZLEdBQ04sV0FETTtBQUFBO0FBQUEscUJBRUNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixDQUZEOztBQUFBO0FBRVpHLGtCQUZZO0FBR2xCTCxxQkFBTyxDQUFDSyxJQUFJLENBQUNBLElBQU4sQ0FBUDs7QUFIa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEosV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFNQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEseUNBQWUsV0FBZjtBQUFBLDZCQUNFO0FBQUEsMkNBQWUsY0FBZjtBQUFBLGdDQUNFO0FBQUEsNkNBQWMsTUFBZDtBQUFBLG9CQUFzQkY7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUdFO0FBQTJCLGlCQUFPLEVBQUVFLFdBQXBDO0FBQUEsNkNBQWtCLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBdUNEOztHQWhEdUJKLFM7O0tBQUFBLFM7QUFnRHZCIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xuICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSgnUHJlc3MgXCJHZXQgTmV3IFdvcmRcIiB0byBzdGFydC4nKTtcblxuICBjb25zdCBfZ2V0TmV3V29yZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBcIi9hcGkvd29yZFwiO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICBzZXRXb3JkKGRhdGEuZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid29yZFwiPnt3b3JkfTwvaDE+XG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e19nZXROZXdXb3JkfT5cbiAgICAgICAgICAgIEdldCBhIG5ldyB3b3JkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7IG1hcmdpbjogMCB9XG4gICAgICAuYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNiwgMTg1LCAxMjkpO1xuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwKSAwcHggMHB4IDBweCAwcHgsIHJnYmEoMCwgMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgd2lkdGg6IDk1dnc7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})