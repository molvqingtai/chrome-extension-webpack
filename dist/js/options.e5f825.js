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
/******/ 		"options": 0
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
/******/ 	deferredModules.push(["./src/options/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/options/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/options/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Options',

  data() {
    return {
      msg: 'Hi,I am the options page.'
    };
  },

  mounted() {
    console.log('挂载成功！');
  }

});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/options/App.vue?vue&type=style&index=0&id=64f45072&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--5-2!./node_modules/postcss-loader/src??ref--5-3!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/options/App.vue?vue&type=style&index=0&id=64f45072&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "h1[data-v-64f45072] {\n  color: red;\n}", "",{"version":3,"sources":["/Users/molvqingtai/Desktop/Project/chrome-extension-template/src/options/App.vue","App.vue"],"names":[],"mappings":"AAAA;EAAG,UAAA;ACEH","file":"App.vue?vue&type=style&index=0&id=64f45072&lang=scss&scoped=true&","sourcesContent":["h1{color:red}","h1 {\n  color: red;\n}"]}]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/options/App.vue?vue&type=template&id=64f45072&scoped=true&lang=html&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/options/App.vue?vue&type=template&id=64f45072&scoped=true&lang=html& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("h1", [_vm._v(_vm._s(_vm.msg))])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/options/App.vue?vue&type=style&index=0&id=64f45072&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--5-0!./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--5-2!./node_modules/postcss-loader/src??ref--5-3!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/options/App.vue?vue&type=style&index=0&id=64f45072&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../node_modules/postcss-loader/src??ref--5-3!../../node_modules/cache-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=64f45072&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/options/App.vue?vue&type=style&index=0&id=64f45072&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("67782a3c", content, false, {"sourceMap":true});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/options/App.vue":
/*!*****************************!*\
  !*** ./src/options/App.vue ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _App_vue_vue_type_template_id_64f45072_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=64f45072&scoped=true&lang=html& */ "./src/options/App.vue?vue&type=template&id=64f45072&scoped=true&lang=html&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/options/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_64f45072_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=64f45072&lang=scss&scoped=true& */ "./src/options/App.vue?vue&type=style&index=0&id=64f45072&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  _App_vue_vue_type_template_id_64f45072_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _App_vue_vue_type_template_id_64f45072_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "64f45072",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/App.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "./src/options/App.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/options/App.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/options/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["a"] = (_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); 

/***/ }),

/***/ "./src/options/App.vue?vue&type=style&index=0&id=64f45072&lang=scss&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/options/App.vue?vue&type=style&index=0&id=64f45072&lang=scss&scoped=true& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_postcss_loader_src_index_js_ref_5_3_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_64f45072_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--5-0!../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../node_modules/postcss-loader/src??ref--5-3!../../node_modules/cache-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=64f45072&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/options/App.vue?vue&type=style&index=0&id=64f45072&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_postcss_loader_src_index_js_ref_5_3_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_64f45072_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_postcss_loader_src_index_js_ref_5_3_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_64f45072_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_postcss_loader_src_index_js_ref_5_3_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_64f45072_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/options/App.vue?vue&type=template&id=64f45072&scoped=true&lang=html&":
/*!**********************************************************************************!*\
  !*** ./src/options/App.vue?vue&type=template&id=64f45072&scoped=true&lang=html& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_64f45072_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=64f45072&scoped=true&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/options/App.vue?vue&type=template&id=64f45072&scoped=true&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_64f45072_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_64f45072_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./src/options/index.js":
/*!******************************!*\
  !*** ./src/options/index.js ***!
  \******************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./src/options/App.vue");


new vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]({
  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])
}).$mount('#app');

/***/ })

/******/ });
//# sourceMappingURL=options.e5f825.js.map