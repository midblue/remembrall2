exports.ids = [14];
exports.modules = {

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("0c75da74", content, true, context)
};

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RefreshHandler_vue_vue_type_style_index_0_id_97f78d7e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RefreshHandler_vue_vue_type_style_index_0_id_97f78d7e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RefreshHandler_vue_vue_type_style_index_0_id_97f78d7e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RefreshHandler_vue_vue_type_style_index_0_id_97f78d7e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RefreshHandler_vue_vue_type_style_index_0_id_97f78d7e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".refreshtakeover[data-v-97f78d7e]{align-items:center;background:hsla(0,0%,100%,0);display:flex;font-size:1.5em;height:100vh;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.4s;width:100%;z-index:2000}.refreshtakeover>*[data-v-97f78d7e]{opacity:0;transition:.4s}.refreshtakeover.on[data-v-97f78d7e]{background:hsla(0,0%,100%,.95);pointer-events:auto}.refreshtakeover.on>*[data-v-97f78d7e]{opacity:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RefreshHandler.vue?vue&type=template&id=97f78d7e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "refreshtakeover",
    class: {
      on: false
    }
  }, [_vm._ssrNode("<span data-v-97f78d7e>Loading data...</span>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/RefreshHandler.vue?vue&type=template&id=97f78d7e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RefreshHandler.vue?vue&type=script&lang=js&
/* harmony default export */ var RefreshHandlervue_type_script_lang_js_ = ({
  data() {
    return {
      startTime: null,
      requireRefreshTime: 5 * 60 * 1000,
      // 5m of inactivity
      refreshing: false
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    }
  },
  mounted() {
    this.startTime = Date.now();
    window.addEventListener('focus', this.checkIfRefreshNeeded);
  },
  beforeDestroy() {
    window.removeEventListener('focus', this.checkIfRefreshNeeded);
  },
  methods: {
    checkIfRefreshNeeded() {
      if (this.currentUser && Date.now() - this.startTime > this.requireRefreshTime) this.refresh();
      this.startTime = Date.now();
    },
    refresh() {
      this.startTime = Date.now();
      this.$store.dispatch('logInAs', this.currentUser);
    }
  }
});
// CONCATENATED MODULE: ./components/RefreshHandler.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RefreshHandlervue_type_script_lang_js_ = (RefreshHandlervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/RefreshHandler.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(136)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_RefreshHandlervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "97f78d7e",
  "104dd5a3"
  
)

/* harmony default export */ var RefreshHandler = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=refresh-handler.js.map