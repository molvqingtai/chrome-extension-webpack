/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"background": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([3,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/background/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/background/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clipboard_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clipboard-polyfill */ "./node_modules/clipboard-polyfill/dist/clipboard-polyfill.esm.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Background',

  data() {
    return {
      msg: 'Hi,I am the background page.',
      value: ''
    };
  },

  mounted() {
    console.log('挂载成功！'); // console.log([['0', 'a'], ['1', 'b'], ['2', 'c']].flat())
    // console.log(Object.fromEntries([['0', 'a'], ['1', 'b'], ['2', 'c']]))
    //
    // import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    //   console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
    // })
  },

  methods: {
    postMessage() {
      axios__WEBPACK_IMPORTED_MODULE_3___default()({
        method: 'post',
        url: 'http://xncs.dajiaok.com/after-sale-checkin/web/api/linkAdd',
        headers: {
          'x-auth-token': '8713f0f6-57c0-4740-930f-28d60ca2d560',
          token: '0a20279fea1977524f48b8a4077dc31b'
        },
        data: qs__WEBPACK_IMPORTED_MODULE_2___default.a.stringify({
          tid: 45634456446,
          shopId: 9,
          categoryId: 1
        })
      });
    },

    handleCopy() {
      var _this = this;

      return _asyncToGenerator(function* () {
        yield _this.postMessage();
        clipboard_polyfill__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].writeText(_this.value).then(function (res) {
          alert('复制成功！');
        }, function () {
          alert('复制失败！');
        });
      })();
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/background/App.vue?vue&type=style&index=0&id=9e023c8e&lang=css&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--5-2!./node_modules/postcss-loader/src??ref--5-3!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/background/App.vue?vue&type=style&index=0&id=9e023c8e&lang=css&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "img[data-v-9e023c8e] {\n  max-width: 50%;\n}", "",{"version":3,"sources":["/Users/molvqingtai/Desktop/Project/chrome-extension-template/src/background/App.vue","App.vue"],"names":[],"mappings":"AAAA;EAAI,cAAA;ACEJ","file":"App.vue?vue&type=style&index=0&id=9e023c8e&lang=css&scoped=true&","sourcesContent":["img{max-width:50%}","img {\n  max-width: 50%;\n}"]}]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/background/App.vue?vue&type=template&id=9e023c8e&scoped=true&lang=html&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/background/App.vue?vue&type=template&id=9e023c8e&scoped=true&lang=html& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {}, [
    _c("h1", [_vm._v(_vm._s(_vm.msg))]),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.value,
          expression: "value"
        }
      ],
      staticClass: "text",
      attrs: { type: "text" },
      domProps: { value: _vm.value },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.value = $event.target.value
        }
      }
    }),
    _c("button", { staticClass: "button", on: { click: _vm.handleCopy } }, [
      _vm._v("\n    点击复制\n  ")
    ]),
    _c("img", { attrs: { src: __webpack_require__(/*! ../assets/images/test.png */ "./src/assets/images/test.png") } }),
    _c("img", { attrs: { src: __webpack_require__(/*! ../assets/images/icon-32.png */ "./src/assets/images/icon-32.png") } })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/background/App.vue?vue&type=style&index=0&id=9e023c8e&lang=css&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--5-0!./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--5-2!./node_modules/postcss-loader/src??ref--5-3!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/background/App.vue?vue&type=style&index=0&id=9e023c8e&lang=css&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../node_modules/postcss-loader/src??ref--5-3!../../node_modules/cache-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=9e023c8e&lang=css&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/background/App.vue?vue&type=style&index=0&id=9e023c8e&lang=css&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("99066598", content, false, {"sourceMap":true});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/assets/images/icon-32.png":
/*!***************************************!*\
  !*** ./src/assets/images/icon-32.png ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC40lEQVRYR8WXT27aUBDGv3mWILtYcIEHUrumNyA3YNF9yQlCd4EV2ZjsICeIs69UeoLSE4R1KwVfAOTuApLfVGPj1BBjOwYpXvrP+34z35s3Y8I7X/TO+igNYOuhrbD5IgEYVB58b+iXCaYUQK05GIK5Q0wTEWXiHoi+r56cm7dC5ALYetBShHuRMcZ8U0p9BtF09eQMk2L/oTBceqNpUZBcgHqjPwuYu8CZT/T8h/nsw6F0h7bQekKAlm9879bLAykAMJgGjCFQ8RStZ6vFqJW3qGTNIp4w4dGY6k3W/jgIUNeDboDKFNhoiwSA7YCp53vOPA8gfi5rhPuD6X7lOXdp370CiDxnN83nosLJ90Jb1KZHzO20AF4BRJ6/LdIiYHFg+xamAiwXo3baolFKMSbwPGC+lE22vXdluHKRdxZIcPtrvwmg1hzIDr8SuMCYCwtKQ0mJAsyY50EcDVDX/Q4ruGDyifgRoE4yU3kQRwPEYrVmv0eg8Y5NjB9gdgOQJyWbZsdJAMTzOO0xAIP/GlPVImrr67YiNU6z42iANPEYIjCmIZsyzo7YsVo4n5JZOhogLCXFMwKd71cJM3ypDhBFFWRwufQc96QAslgWxItYirg8OzoDsUAmxAHxkwHUG4MpwOcMaoDY3rEjQ/wkAGGXU3gMM8H8S47slz2RI34SAFmk1uz7EjUDNzKUhFBAa3/DpR7lRY7iWqM/N0zdrLZr62tdZNjY7YrhZDVdLRydvJ/ajqNhgn4aU7nLazBFOqGMa4XbcfK4BaNLjPHSGz0UEYrK9LptKdo2LL4DzuYWNp1DFmWOZNthQuhbRWeEyMJqG3huWaR6y4Wz07D2A8mdCbdRaYvIZaKFMZWvWUMp0fo3c/Uj8GxbpCYnAYipw3Ys82HKP0A8lhsOXEVWl0BewGbie7ezLPsKZWB/gcQ/QNiSmfC17AxZCiCyRYbNdTfsO6bqlq2W0gBFqyLvvXcH+AcvaPAwuvwRnQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/test.png":
/*!************************************!*\
  !*** ./src/assets/images/test.png ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/test.00b54e.png";

/***/ }),

/***/ "./src/background/App.vue":
/*!********************************!*\
  !*** ./src/background/App.vue ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _App_vue_vue_type_template_id_9e023c8e_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=9e023c8e&scoped=true&lang=html& */ "./src/background/App.vue?vue&type=template&id=9e023c8e&scoped=true&lang=html&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/background/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_9e023c8e_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=9e023c8e&lang=css&scoped=true& */ "./src/background/App.vue?vue&type=style&index=0&id=9e023c8e&lang=css&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _App_vue_vue_type_template_id_9e023c8e_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _App_vue_vue_type_template_id_9e023c8e_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "9e023c8e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/background/App.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./src/background/App.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/background/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/background/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/background/App.vue?vue&type=style&index=0&id=9e023c8e&lang=css&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./src/background/App.vue?vue&type=style&index=0&id=9e023c8e&lang=css&scoped=true& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_postcss_loader_src_index_js_ref_5_3_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9e023c8e_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--5-0!../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../node_modules/postcss-loader/src??ref--5-3!../../node_modules/cache-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=9e023c8e&lang=css&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/background/App.vue?vue&type=style&index=0&id=9e023c8e&lang=css&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_postcss_loader_src_index_js_ref_5_3_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9e023c8e_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_postcss_loader_src_index_js_ref_5_3_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9e023c8e_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_postcss_loader_src_index_js_ref_5_3_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9e023c8e_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/background/App.vue?vue&type=template&id=9e023c8e&scoped=true&lang=html&":
/*!*************************************************************************************!*\
  !*** ./src/background/App.vue?vue&type=template&id=9e023c8e&scoped=true&lang=html& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9e023c8e_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=9e023c8e&scoped=true&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/background/App.vue?vue&type=template&id=9e023c8e&scoped=true&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9e023c8e_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9e023c8e_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./src/background/index.js":
/*!*********************************!*\
  !*** ./src/background/index.js ***!
  \*********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./src/background/App.vue");


new vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]({
  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])
}).$mount('#app');

/***/ }),

/***/ 3:
/*!**********************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0 ./src/background/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/molvqingtai/Desktop/Project/chrome-extension-template/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0");
module.exports = __webpack_require__(/*! ./src/background/index.js */"./src/background/index.js");


/***/ })

/******/ });
//# sourceMappingURL=background.4d9c51.js.map